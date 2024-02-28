import UserRepositories from "./users.repositories.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default class UserController{
    constructor(){
        this.userRepositories = new UserRepositories()
    }
    async signUp(req,res){
        const hashedPass = await bcrypt.hash(req.body.password,12)
        req.body.password = hashedPass
        console.log(hashedPass)
        const createdUser = await this.userRepositories.signUp(req.body)
       
        res.status(201).send(createdUser)
    }
    async signIn(req,res){
        const {email,password} = req.body
        const isValidUser  = await this.userRepositories.signIn(email)
        const confirmPassword = await bcrypt.compare(password,isValidUser.password)
        if(!isValidUser){
            console.log(isValidUser)
            res.status(400).send("user not found")
        } else {
        if(confirmPassword){
        const token = jwt.sign({userId:isValidUser._id},process.env.JWT_SECRET,{
            expiresIn:'1h'
        })
        res.status(201).send(token)
    } else {
        return res.status(400).send("incorrect username or passoword")
    }
    }
    }
}