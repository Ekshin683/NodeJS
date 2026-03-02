import express from 'express';
const app = express();
const port = process.argv[2];
app.listen(port, () =>{
    console.log("server started"+port);
})

app.get("/",(req,res) => {
    res.send("Hello Ekshin, the server running on port : " + port);
})