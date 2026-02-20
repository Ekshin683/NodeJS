import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})

// const logger = (req,res,next) => {
    
// }
const auth = (req,res,next) => {
    if(req.url === "/1234"){
        // console.log("Welcome!");
        next();
    }else{
        // console.log("Access Denied!");
        res.send("Access Denied!");
    }
}
app.use(auth);
app.get("/1234",(req,res) => {
    res.send("Welcome!");
})