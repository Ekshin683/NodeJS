import mongoose from "mongoose";
import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server Started");
})
const dbConnect = async () =>  {
    await mongoose.connect("mongodb://localhost:27017/lpu26a");
}

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    role:{type: String}
})
await dbConnect();
const usermodel = await mongoose.model("users", userSchema);
const users = usermodel.find();
console.log(users);

app.get("/", async (req,res) => {
    const result = await usermodel.find();
    res.json(result);
})