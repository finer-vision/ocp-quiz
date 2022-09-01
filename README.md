# OCP Quiz

Touchscreen quiz and info kiosk touchscreen for OCP event in 2022.

### Getting Started

```shell
nvm use # optional (uses the exact Node this project was tested against)
npm install
npm start
```

### Production Build

Install kiosk software ([**install docs**](https://github.com/finer-vision/touchscreen-kiosk#kiosk-install)).

```shell
nvm use # optional (uses the exact Node this project was tested against)
npm add -g serve
npm install
npm run build
mkdir /home/$USER/apps
pm2 start --name kiosk /usr/bin/touchscreen-kiosk -- --url=http://localhost:3000 --start="serve -p 3000 -s /home/$USER/apps/ocp-quiz/build" --delay=3000
pm2 save
```

The kiosk is now set to autostart on boot.
