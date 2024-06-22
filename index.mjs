import express from "express"

import authRoutes from "./routes/auth.mjs"
import tasksRoutes from "./routes/tasks.mjs"
import cors from "cors"
import { getAllTasks } from "./controllers/tasks.mjs";

const corsOptions = {

    origin: 'https://taskmanagement333.vercel.app', 
   
    credentials: true, 
   
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
   
    methods: 'GET, POST, PUT, DELETE, OPTIONS'
   
   };
const app=express();
app.use(express.json())
app.use(express())
app.use(cors(corsOptions))




app.use("/api/auth",authRoutes)
app.use("/api/tasks",tasksRoutes)


app.listen(8000,(req,res)=>{
    console.log("connected")
})