const path=require("path");
console.log(path.dirname("index.js"));
console.log(path.extname("index.js"));
console.log(path.basename("index.js"));
console.log(path.parse("index.js"));
const par=path.parse("index.js");
console.log(par.name);