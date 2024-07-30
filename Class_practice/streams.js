import http from "http";
import fs from "fs";

const server=http.createServer();
const rstream=fs.createReadStream("new.txt");
server.on('request',(req,res)=>{

rstream.on("data",(chunk)=>{
    res.write(chunk);
});

rstream.on("end",()=>{
    res.end();
});
rstream.on("error",(err)=>{
    console.log(err);
    res.end("file not found");
})
});

server.listen(3000,()=>console.log("server started"));

/*const server=http.createServer();

server.on('request',(req,res)=>{
    fs.readFile("new.txt",(err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });
});

server.listen(3000,()=>console.log("server started"));*/