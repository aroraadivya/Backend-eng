const fs=require("fs");
console.log("1");
const result=fs.readFileSync("read.txt", "utf-8");
console.log(result);

fs.readFile("read.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("2");

fs.writeFile("write.txt", "FS module write operation", (err) => {
    console.log("File is written");
    console.log(err);
  });