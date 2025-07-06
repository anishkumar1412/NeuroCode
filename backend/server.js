import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();


const PORT = process.env.PORT || 1234;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to NeuroCode Backend");
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})