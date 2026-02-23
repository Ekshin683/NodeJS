import express from 'express';
import jwt from 'jsonwebtoken';
const secret = "lpu"
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})
const user = {
    name:"Ekshin",
    email:"ekshin@example.com",
    role:"student"
}
const token = jwt.sign(user, secret, {expiresIn:"1h"})
console.log(token);