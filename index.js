// http= require('http');

// myserver= http.createServer((req, res)=>{
//     console.log(req);
//     res.end("hello from browser");
// })
// myserver.listen(8080,()=>console.log("server started"));


// const fs=require("fs");
// console.log("1");
// const result=fs.readFileSync("read.txt", "utf-8");
// console.log(result);

// fs.readFile("read.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log("2");

// fs.writeFile("write.txt", "FS module write operation", (err) => {
//     console.log("File is written");
//     console.log(err);
//   });

// const os=require("os");
// console.log(os.arch());
// const freeMemory=os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);
// const totalmem=os.totalmem();
// console.log(`${totalmem/1024/1024/1024}`);
// console.log(os.hostname());
// console.log(os.platform());

// const path=require("path");
// console.log(path.dirname("index.js"));
// console.log(path.extname("index.js"));
// console.log(path.basename("index.js"));
// console.log(path.parse("index.js"));
// const par=path.parse("index.js");
// console.log(par.name);