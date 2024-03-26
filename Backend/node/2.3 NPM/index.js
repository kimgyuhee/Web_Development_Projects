// const fs = require("fs");

// fs.writeFile("message.txt", "Hello, Nice To Meet You~ 😗", (err) => {
//   if (err) throw err;
//   console.log("The File has been saved!");
// });

// fs.readFile("./message.txt", "utf-8", (err, text) => {
//   if (err) throw err;
//   console.log(text);
// });

var generateName = require("sillyname");
// import generateName from "sillyname";
var sillyname = generateName();
console.log(`My name is ${sillyname}.`);

const superheroes = require("superheroes");
// import superheroes from "superheroes";

console.log(superheroes.all);
//=> ['3-D Man', 'A-Bomb', …]

console.log(superheroes.random());
//=> 'Spider-Ham'
