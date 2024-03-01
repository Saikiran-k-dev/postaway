import mongoose from "mongoose";
import {ObjectId} from "mongodb"
import { postSchema } from "./posts.schema.js";
import { userSchema } from "../users/users.schema.js";

const PostModel = new mongoose.model('post',postSchema)
const UserModel = new mongoose.model("user",userSchema)

export default class PostRepositories{
    async getAllPosts(){
        try {
            return await PostModel.find()
        } catch (error) {
            console.log(error)
        }
    }
    async getOnePost(postId){
        try {
             return await PostModel.findOne({_id:new ObjectId(postId)})
        } catch (error) {
            console.log(error)
        }
    }
    async getUserPost(userId){
        try {
            return await PostModel.find({userId:new ObjectId(userId)})
        } catch (error) {
            console.log(error)
        }
    }
    async createPost(userId,data){
        try {
            const postData = await new PostModel({
                content:data.content,
                image:data.image,
                userId:new ObjectId(userId),
                likes:data.likes,
                comments:data.comments
            })
            await postData.save()
            const updateUserData = await UserModel.findOne({_id: new ObjectId(userId)})
            // console.log(updateUserData)
            updateUserData.posts.push(new ObjectId(postData._id))
            updateUserData.save()
            return postData
        } catch (error) {
            console.log(error)
        }
    }
    async deletePost(userId,postId){
        try {
            const isvalidPost = await PostModel.findOne({_id:new ObjectId(postId),userId: new ObjectId(userId)})
            if(isvalidPost){
                await PostModel.deleteOne({_id:new ObjectId(postId),userId: new ObjectId(userId)})
                const updateUserData = await UserModel.findOne({_id: new ObjectId(userId)})
                updateUserData.posts.pull(new ObjectId(isvalidPost._id))
                updateUserData.save()
                return isvalidPost
            } else {
                return "Post doesnt exist"
            }
        } catch (error) {
            console.log(error)
        }
    }
    async updatePost(userId,postId,updatedData){
        try {
            const isvalidPost = await PostModel.findOne({_id:new ObjectId(postId),userId: new ObjectId(userId)})
            if(isvalidPost){
                isvalidPost.content = updatedData.content
                isvalidPost.image = updatedData.image
                return await isvalidPost.save()
            }
        } catch (error) {
            console.log(error)
        }
    }
}