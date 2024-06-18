import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "happy14413!!",
  port: 5432,
});

db.connect();

let countries = [];

// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     // countries = res.rows;
//     countries.push(res.rows.country_code);
//   }
//   // db.end();
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.get("/add", async (req, res) => {
  const input = req.body["country"];
  const code = await db.query("SELECT country_code FROM countries WHERE $1", [
    input,
  ]);

  db.query("INSERT INTO (country_code) VALUES ($1)", code);
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  console.log(result.rows);
  console.log(countries);
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
