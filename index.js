// http= require('http');

// myserver= http.createServer((req, res)=>{
//     console.log(req);
//     res.end("hello from browser");
// })
// myserver.listen(8080,()=>console.log("server started"));


const fs=require("fs");
console.log("1");
// const result=fs.readFileSync("read.txt", "utf-8");
// console.log(result);

// fs.readFile("read.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log("2");

fs.writeFile("write.txt", "FS module write operation", (err) => {
    console.log("File is written");
    console.log(err);
  });