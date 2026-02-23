import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const secret = "lpu";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWtzaGluIiwiZW1haWwiOiJla3NoaW5AZXhhbXBsZS5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzk2MSwiZXhwIjoxNzcxODM3NTYxfQ.sttkNmhLUOnHmGiHgGUfNxWDAUk6w6bNzE-c_g2ZwhA";
const user = jwt.verify(token, secret);
console.log(user);