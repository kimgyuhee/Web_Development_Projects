import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    hi: "안녕하신가유🫶🏻",
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
