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
        if(email){
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

    async getOneUser(req,res){
        try {
            const userId = req.params.userId
            const userDetails = await this.userRepositories.getOneUser(userId)
            if(userDetails){
                return res.status(200).send(userDetails)
            } else {
                return res.status(401).send("no such user found")
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getAllUsers(req,res){
        try {
            const allUsers =  await this.userRepositories.getAllUsers()
            if(allUsers){
                return res.status(201).send(allUsers)

            } else {
                return res.status(401).send("no users yet")
            }
        } catch (error) {
            console.log(error)
        }
    }
}