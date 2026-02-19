import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})

app.get("/:id1/:id2", (req,res) => {
    const sum = parseInt(req.params.id1) + parseInt(req.params.id2);
    res.send(sum);
})

app.get("/x/:id1/y/:id2/z/:id3", (req,res) => {
    const sum = parseInt(req.params.id1) + parseInt(req.params.id2) + parseInt(req.params.id3);
    res.send(sum);
})