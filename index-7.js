import express from 'express';
const app = express();
app.listen(8080,()=>{
    console.log("Server started")
})
app.use(express.json());

let users = [
    {
        name:"Ekshin",
        email:"ekshin@gmail.com",
        role:"student"
    },
    {
        name:"Ajay",
        email:"ajay@gmail.com",
        role:"student"
    },
    {
        name:"Sumanth",
        email:"sumanth@gmail.com",
        role:"student"
    }
]
app.get("/", (req,res) => {
    res.send(users);
})

// app.get("/:idx",(req,res) => {
    
// })

app.post("/",(req,res) => {
    // console.log(req.body);
    const user = req.body;
    users.push(user);
    res.json(users);
})

app.delete("/:idx",(req,res) => {
    const index = users.findIndex((user) => user.id === parseInt(req.params.idx));
    const removed = users.splice(index, 1)[0];
    res.json(users);
})