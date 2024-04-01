import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    count: 0,
  });
});

app.post("/submit", (req, res) => {
  const fn = req.body["fName"];
  const ln = req.body["lName"];
  console.log(fn);
  console.log(ln);
  const nameCount = fn.length + ln.length;
  res.render("index.ejs", { count: nameCount });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
