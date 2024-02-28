import express from "express";
import cors from "cors"
import dotenv from "dotenv"

import userRouter from "./src/features/users/users.routes.js";
import postRouter from "./src/features/posts/posts.routes.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";
dotenv.config()



const app = express()
app.use(cors())
app.use(express.json());


app.use("/api/users",userRouter)
app.use("/api/posts",jwtAuth,postRouter)

app.use((err,req,res,next)=>{
    logger.error(err.message)
    console.log(err)
    res.status(503).send("Something went wrong")
  })

app.use((req,res)=>{
    res.status(401).send("api not found please check the swagger for more info")
  })
export default app;
