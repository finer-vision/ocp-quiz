import app from "./services/app";

const port = 3000;

app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
