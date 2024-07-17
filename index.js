// http= require('http');

// myserver= http.createServer((req, res)=>{
//     console.log(req);
//     res.end("hello from browser");
// })
// myserver.listen(8080,()=>console.log("server started"));








const http = require("http");
const fs = require("fs");
myserver = http.createServer((req, res) => {
    const log=`${Date.now()}:${req.url}\n`;
  if (req.url == "/") {
    fs.appendFile("serverLogs.txt", log, (err) => {
      res.end("Home page");
    });
  } else if (req.url == "/aboutus") {
    fs.appendFile("serverLogs.txt", log, (err) => {
      res.end("About Us page");
    });
  }
  else{
    fs.appendFile("serverLogs.txt", log, (err) => {
      res.end("Page not found");
    });
  
  }
});
myserver.listen(8080, () => console.log("Server Started"));

