import * as path from "path";
import { spawn } from "child_process";
import app from "./services/app";

const apiBinPath = path.resolve(__dirname, "..", "bin", "api.py");
const proc = spawn("/usr/local/bin/python3", [apiBinPath]);

proc.on("error", (err) => {
  console.error(err);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});

function kill() {
  proc.kill(1);
}

process.on("exit", kill);
process.on("SIGINT", kill);
