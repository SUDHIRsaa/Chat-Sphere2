import express from "express";
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv"
import messageRoutes from "./routes/message.js"
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import {app,server} from "./lib/socket.js"
import path from "path"

dotenv.config()
const PORT= process.env.PORT
const __dirname=path.resolve();
const allowedOrigins = [
  "http://localhost:3000",
  "https://chat-sphere2-5hhr-git-master-sudmaurya2611-gmailcoms-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(cookieParser());

app.use(express.json({ limit: '10mb'}))
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../chatsphere-new/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"..chatsphere-new","build","index.html"))
    })
}

server.listen(PORT,()=>{
    console.log("Server is running on port " + PORT)
    connectDB()
})