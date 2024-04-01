// import express from "express";

// const app = express();
// const port = 3000;

// var Dayoftheweek = "";
// var ment = "";

// function getDay() {
//   const dayOfWeek = new Date(yyyyMMdd).getDay();
//   if (dayOfWeek == 0 || dayOfWeek == 6) {
//     Dayoftheweek = "weekend";
//     ment = "it's time to have fun!";
//   } else {
//     Dayoftheweek = "weekday";
//     ment = "it's time to work hard!";
//   }
//   // return Dayoftheweek, ment;
// }

// app.get("/", (req, res) => {
//   let type = "fdf";
//   let advice = "FDSFDF";
//   res.render("solution.ejs", {
//     dayType: type,
//     advice: adv,
//   });
// });
// app.listen(port, () => {
//   console.log(`Server running on port ${port}.`);
// });

import express from "express";

const app = express();
const port = 3000;
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
app.get("/", (req, res) => {
  console.log("ds" + "fds");
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "weekday [ " + days[day] + " ]";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend [" + days[day] + " ]";
    adv = "it's time to have some fun";
  }

  res.render("solution.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
