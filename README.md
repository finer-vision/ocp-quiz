# OCP Quiz

Touchscreen quiz and info kiosk touchscreen for OCP event in 2022.

### Getting Started

```shell
wget https://bootstrap.pypa.io/get-pip.py
sudo python3 get-pip.py
python3 -m pip install -U pyserial tornado
nvm use # optional (uses the exact Node this project was tested against)
npm install
npm start
```

### Production Build

Install kiosk software ([**install docs**](https://github.com/finer-vision/touchscreen-kiosk#kiosk-install)).

```shell
sudo python3 -m pip install -U pyserial tornado
nvm use # optional (uses the exact Node this project was tested against)
npm install
npm run build
mkdir /home/$USER/apps
sudo pm2 start --name ocp-quiz-server node -- /home/$USER/apps/ocp-quiz/server/build/index.js
sudo pm2 save
pm2 start --name ocp-quiz-client /usr/bin/touchscreen-kiosk -- --url=http://localhost:8080 --start="serve -p 8080 -s /home/$USER/apps/ocp-quiz/client/build" --delay=3000
pm2 save
```

The kiosk is now set to autostart on boot.

### Notes

Convert transparent `.mov` videos into transparent `.webm` videos:

```shell
ffmpeg -y -i in.mov -f webm -c:v libvpx -b:v 2M -acodec libvorbis -auto-alt-ref 0 out.webm
```
