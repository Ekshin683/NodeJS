import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})

// const greet = (req,res,next) => {
//     console.log("Hello World!");
//     next();
// }
// app.use(greet)
app.use(express.json());
let users = [
    {
        id:1,
        name:"Ekshin",
        email:"ekshin@gmail.com",
        role:"student"
    },
    {
        id:2,
        name:"Ajay",
        email:"ajay@gmail.com",
        role:"student"
    },
    {
        id:3,
        name:"Sumanth",
        email:"sumanth@gmail.com",
        role:"student"
    }
]

app.get("/",(req,res) => {
    res.send(users);
})

app.post("/",(req,res) => {
    // console.log(req.body);
    const user = req.body;
    users.push(user);
    res.json(users);
})
