import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { verifyToken, authorize } from './middleware/auth.js';

const app = express();
app.listen(8080, () => {
    console.log("Server started")
})
app.use(express.json());
const users = []
const SECRET_KEY = "lpu";

app.post("/login", async (req,res) => {
    const {email, password} = req.body;
    const found = users.find((user) => user.email === email);
    if(found){
    const match = await bcrypt.compare(password, found.password);
    if(match){
        const token = jwt.sign({email: found.email, name: found.name, role: found.role}, SECRET_KEY, {expiresIn: "1h"});
        res.status(200).json({message:"Login successful", token: token});
    }else{
        res.status(401).json({message:"Invalid credentials"});
    }
}else{
    res.status(401).json({message:"User not found"});
}

})
app.post("/signup", async (req,res) => {
    const body = req.body;
    const hashpassword = await bcrypt.hash(body.password, 10);
    body.password = hashpassword;
    users.push(body);
    res.json(users);
})

app.get("/users",(req,res) => {
    res.json(users);
})
app.get("/", verifyToken(SECRET_KEY), (req,res) => {
    res.send("Welcome")
})
app.get("/admin", verifyToken(SECRET_KEY), authorize("admin"), (req,res) => {
    res.json(users);
})