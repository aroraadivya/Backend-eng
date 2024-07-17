const express = require("express");
const users = require("./mock_data.json");
const fs=require("fs");
const app = express();
const port = 7000;

app.use(express.urlencoded({ extended: false }));

// app.get("/api/users",(req,res)=>{
//     return res.json(users)
// })
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (user) {
//     return res.json(user);
//   }
//   return res.status(404).json({ error: "User not found" });
// });



// app.get("/users",(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map(user=>`<li>${user.first_name}</li>`)}
//     <ul>`;
//     res.send(html)
//   })


app.post("/api/users",(req,res)=>{
  const body=req.body;
  users.push({...body,id:users.length+1});
  fs.writeFile("./mock_data.json",JSON.stringify(users),(err,data)=>{
    return res.json({message:"User added successfully"})
})
});

app.listen(port, () => console.log(`server started at ${port}`));