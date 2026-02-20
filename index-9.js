import express from 'express';
const app = express();
app.listen(8080, () =>{
    console.log("Server Started");
})

const loggar = (req,res,next) => {
    req.message = "This is loggor function";
    // console.log(req.url);
    next();
}
// app.use(loggar);

app.get("/",loggar,(req,res) => {
    // res.end()
    // res.send("Hello World!");
    // res.json({name:"Ekshindeep",age:20});
    console.log(req.message);
    res.json(req.url);
})

app.get("/home",(req,res) => {
    console.log(req.message);
    res.json(req.url);
})