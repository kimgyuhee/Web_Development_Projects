import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

console.log(1);
app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(2);
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);
console.log(3);

app.get("/", (req, res) => {
  console.log(4);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(5);
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

console.log(6);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
