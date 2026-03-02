import express from 'express';

const port1 = process.argv[2];
const port2 = process.argv[3];
const app1 = express();
app1.get("/", (req, res) => {
    res.send(`Hello Ekshin, the server running on port: ${port1}`);
});

app1.listen(port1, () => {
    console.log(`Server started on port ${port1}`);
});
const app2 = express();
app2.get("/", (req, res) => {
    res.send(`Hello Ekshin, the server running on port: ${port2}`);
});

app2.listen(port2, () => {
    console.log(`Server started on port ${port2}`);
});