import express from 'express';
const app = express();
app.listen(8080,()=>{
    console.log("Server Started")
})
app.use(express.json());
const auth = (req,res,next) => {
    const val = req.body;
    console.log(val);
    if(val.token === "1234"){
        console.log("Welcome!");
        next();
    }else{
        res.send("Access Denied!");
    }
}
app.use(auth);
app.post("/1234",(req,res) => {
    res.send("Welcome!");
})