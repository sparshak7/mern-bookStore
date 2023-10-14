import express from "express"
import { PORT } from "./config.js";
import userRouter from "./routes/user.route.js"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express();
dotenv.config();
mongoose.connect(
  process.env.MONGO
).then(()=>{
  console.log("Connected to database")
}).catch((err)=>{
  console.log(err)
});

app.use("/", userRouter);

app.listen(PORT, ()=>{
  console.log(`Server running at port ${PORT}`)
})