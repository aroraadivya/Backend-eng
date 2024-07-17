const express=require("express")
const user=require("./mock_data.json")

const app=express();
const port=7000;

app.use(express.urlencoded({extended:false}));

app.get("/api/user", (req, res)=>{
    return res.json(user);
});

app.listen(port, ()=>console.log(`Server is running on port ${port}`));