var fs = require("fs");

var m = fs.readFileSync("./races.txt", "utf-8");
console.log(m);
