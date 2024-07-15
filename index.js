http= require('http');

myserver= http.createServer((req, res)=>{
    console.log(req);
    res.end("hello from browser");
})
myserver.listen(8080,()=>console.log("server started"));