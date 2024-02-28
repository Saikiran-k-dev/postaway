import express from "express"
import UserController from "./users.controller.js"

const userRouter = express.Router()

const userController = new UserController()
userRouter.post("/signup",(req,res)=>{
    userController.signUp(req,res)
})
userRouter.post("/signin",(req,res)=>{
    userController.signIn(req,res)
})
userRouter.post("/logout",(req,res)=>{
    res.status(201).send("hi")
})
userRouter.post("/logout-all-devices",(req,res)=>{
    res.status(201).send("hi")
})
export default userRouter