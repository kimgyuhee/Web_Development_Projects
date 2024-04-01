import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("dsdadasdasdajskld");
  console.log(__dirname + "/public/index.html");
  print("huih");
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/submit", (req, res) => {
  console.log(__dirname + "/public/index.html");
  return res.sendFile(__dirname + "/public/submit.html");
});

app.get("/submit", (req, res) => {
  console.log(req.body);
  return res.sendFile(__dirname + "/public/submit.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
