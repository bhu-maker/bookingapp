import express from "express";
const app=express();
import cors from "cors";
import users from './data'
app.use(cors())
app.get("/",(req,res)=>{
    const {q} = req.query
    console.log(q)
    res.json(users.splice(0,2))
});
app.listen(5000,()=>console.log("api is working"))