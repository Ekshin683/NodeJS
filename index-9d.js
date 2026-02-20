import express from 'express';
const app = express();
// const app = express();
app.use(express.json());
const jwt = Math.random();
const auth = (req,res,next) => {
    const token = req.headers.authorization;
    const val = token.split(" ");
    if(val[1] === jwt){
        next();
    }else{
        res.send("Access Denied!");
    }
}
app.post("/login",(req,res) => {
    res.send(jwt);
})
// res.send(jwt);
app.get("/",auth,(req,res) => {
    res.send("Welcome!");
})

app.listen(8080, () => {
    console.log("Server Started");
})