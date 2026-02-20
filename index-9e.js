import express from 'express';
const app = express();
const token = Math.random(Math.random() * 100000).toString();
app.use(express.json());
const auth = (req,res,next) => {
    const val = req.headers.authorization;
    const tokenval = val.split(" ");
    if(tokenval[1] === token) next();
    else res.send("Unauthorized Access!");
}

app.get("/",auth,(req,res) => {
    res.send("Welcome!");
})
app.post("/login",(req,res) => {
    res.send(token);
})