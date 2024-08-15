import express from "express";
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello This Is PES UNIVERSITY<h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About me<h1>");
});
app.listen(4000,()=>{
    console.log("Server running on port 4000.");
});