import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  //password: ,
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log(email);
  console.log(password);
  try {
    const result = await db.query(
      "SELECT COUNT(email) FROM users WHERE email = $1",
      [email]
    );
    const check = result.rows[0];
    if (check.count == 1) {
      res.write(
        "<script>alert('This email already exists. Please register with a different email.')</script>"
      );
      res.write('<script>window.location="../register"</script>');
    } else {
      try {
        await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [
          email,
          password,
        ]);
        res.render("home.ejs");
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    const result = await db.query(
      "SELECT count(*) FROM users WHERE email = $1 and password = $2",
      [email, password]
    );

    const check = result.rows[0].count;
    if (check == 1) {
      res.render("secrets.ejs");
    } else {
      res.write(
        "<script>alert('The email doesn't exist or the password is incorrect.')</script>"
      );
      res.write('<script>window.location="../login"</script>');
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
