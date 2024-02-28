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
    
}