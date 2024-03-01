import mongoose from "mongoose";
import { userSchema } from "./users.schema.js";

const UserModel = new mongoose.model('user',userSchema)

export default class UserRepositories{
    async signIn(email,password){
        try {
            return await UserModel.findOne({email})
        } catch (error) {
            console.log(error)
        }
    }
    async signUp(userData){
        try {
            const newUser = await new UserModel(userData)
            return await newUser.save()
        } catch (error) {
            console.log(error)
        }
    }
    async getOneUser(userId){
        try {
            // console.log(user)
            const userDetaail =  await UserModel.findById(userId)
            userDetaail.password = "ahhhh no password will be displayed"
            return userDetaail
        } catch (error) {
            console.log(error)
        }
    }

    async getAllUsers(){
        try {
            const userDetails = await UserModel.find()
            for (let userDetail of userDetails) {
                userDetail.password = "ahh no password for u";
            }
            return userDetails
        } catch (error) {
            console.log(error)
        }
    }
    
}