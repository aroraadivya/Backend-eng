// http= require('http');

// myserver= http.createServer((req, res)=>{
//     console.log(req);
//     res.end("hello from browser");
// })
// myserver.listen(8080,()=>console.log("server started"));


const fs=require("fs");
console.log("1");
const result=fs.readFileSync("read.txt", "utf-8");
console.log(result);

console.log("2");