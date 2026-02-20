import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})
//localhost:8080/?name=Ekshindeep&age=20
app.get("/",(req,res) => {
    res.send("Hello "+req.query.name + req.query.age);
})