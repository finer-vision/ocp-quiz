from time import sleep
from typing import List
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop
from tornado.escape import json_encode
from threading import Thread

import serial
import sys
import glob


class BoxInterface(object):
    box: serial.Serial
    port: str
    connected: bool

    def __init__(self, port="AUTO"):
        self.port = ""
        ports = self.serial_ports()
        if port == "AUTO":
            if len(ports) > 0:
                self.port = ports[0]
        else:
            if port in ports:
                self.port = port

        assert self.port != ""

        self.box = serial.Serial(
            port=self.port,
            baudrate=9600,
            timeout=1
        )

        self.connected = self.box.isOpen()

        # assert self.connected

    def get_current_code(self)->str:
        self.box.write(b"?\r\n")
        sleep(0.5)
        code = self.box.readline().decode().replace("\r\n", "")
        return code

    def get_current_input(self)->str:
        self.box.write(b"$\r\n")
        sleep(0.5)
        code = self.box.readline().decode().replace("\r\n", "")
        return code

    def shutdown(self):
        self.box.close()

    def disable_code(self):
        code = 'X' + self.get_current_code().split("=")[1]
        self.update_code(code)

    def update_code(self, new_code)->bool:
        self.box.write(f"!{new_code}@\r\n".encode())
        sleep(0.5)
        result = self.box.readline()
        if "code updated" in result.decode():
            return True
        else:
            return False

    def unlock_box(self):
        self.box.write(b"%\r\n")
        self.box.readline()

    @staticmethod
    def serial_ports()->List[str]:
        """ Lists serial port names

            :raises EnvironmentError:
                On unsupported or unknown platforms
            :returns:
                A list of the serial ports available on the system
        """
        if sys.platform.startswith('win'):
            ports = ['COM%s' % (i + 1) for i in range(12)]
        elif sys.platform.startswith('linux') or sys.platform.startswith('cygwin'):
            # this excludes your current terminal "/dev/tty"
            ports = glob.glob('/dev/tty[A-Za-z]*')
        elif sys.platform.startswith('darwin'):
            ports = glob.glob('/dev/tty.*')
        else:
            raise EnvironmentError('Unsupported platform')

        result = []
        for port in ports:
            try:
                s = serial.Serial(port)
                s.close()
                result.append(port)
            except (OSError, serial.SerialException):
                pass
        return result


class WebApp(object):
    io_loop: IOLoop
    thread: Thread
    do_shutdown: bool

    def __init__(self, port:int, endpoints:List[any]):
        endpoints.append(("/shutdown", ShutdownHandler, {"api": self}))
        app = Application(endpoints, debug=True)
        app.listen(port)
        self.thread = Thread(target=self.main_thread)
        self.io_loop = IOLoop.current()
        self.thread.start()
        self.do_shutdown = False

    def main_thread(self):
        self.io_loop.start()

    def shutdown(self):
        self.io_loop.stop()
        if self.thread is not None:
            self.thread.join(1)
        self.thread = None


class MainHandler(RequestHandler):
    box: BoxInterface

    def initialize(self, **kwargs) -> None:
        self.box = kwargs["box"]

    def get(self):
        data = {"Status": "Running", "Box": "Not Connected"}
        if self.box.connected:
            data["Box"] = "Connected"
            data["Port"] = self.box.port
        self.write(json_encode(data))


class CodeHandler(RequestHandler):
    box: BoxInterface

    def initialize(self, **kwargs) -> None:
        self.box = kwargs["box"]

    def get(self):
        data = {"Code": "", "Input": ""}
        if self.box.connected:
            data["Code"] = self.box.get_current_code()
            data["Input"] = self.box.get_current_input()
        self.write(json_encode(data))

    def post(self):
        new_code = self.get_argument("new_code")
        self.box.update_code(new_code)
        sleep(1)
        data = {"Code": "", "Input": ""}
        if self.box.connected:
            data["Code"] = self.box.get_current_code()
            data["Input"] = self.box.get_current_input()
        self.write(json_encode(data))

        # data = json_decode(data)
        # if "new_code" in data.keys():
        #    self.box.update_code(data["new_code"])


class UnlockHandler(RequestHandler):
    box: BoxInterface

    def initialize(self, **kwargs) -> None:
        self.box = kwargs["box"]

    def get(self):
        self.set_status(201, "Unlocking Box...")
        self.box.unlock_box()
        self.write("Unlocking Box...")


class ShutdownHandler(RequestHandler):
    api: WebApp

    def initialize(self, **kwargs):
        self.api = kwargs["api"]

    def get(self):
        self.set_status(201, "Shutting Down Box API...")
        self.api.do_shutdown = True
        self.write("Shutting Down Box API...")




if __name__=='__main__':
    print("Connecting to Box...")
    box = BoxInterface()
    print("Starting local web interface...")
    urls = [
        ("/", MainHandler, {"box": box}),
        ("/code", CodeHandler, {"box": box}),
        ("/unlock", UnlockHandler, {"box": box}),
    ]
    api = WebApp(8888, urls)
    print("http://localhost:8888")
    print("press ctrl+c to shutdown or use shutdown from api")
    while(True):
        try:
            if api.do_shutdown:
                print("Shutdown Requested from API")
                break
        except KeyboardInterrupt:
            print("Shutdown initiated by console")
            break
        sleep(1)

    print("Shutting Down...")
    api.shutdown()
    box.shutdown()

