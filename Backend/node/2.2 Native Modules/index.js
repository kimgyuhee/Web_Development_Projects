const fs = require("fs");

fs.writeFile("message.txt", "Hello, Nice to Meet you ~ ", (err) => {
  if (err) throw err;
  console.log("The file has been saved !");
});

fs.readFile("./message.txt", "utf8", (err, txt) => {
  console.log(txt);
});
