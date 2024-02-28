import mongoose from "mongoose";
import {ObjectId} from "mongodb"
import { postSchema } from "./posts.schema.js";

const PostModel = new mongoose.model('post',postSchema)

export default class PostRepositories{
    async getAllPosts(){
        try {
            return await PostModel.find()
        } catch (error) {
            console.log(error)
        }
    }
    async getOnePost(req,res){
        try {
             
        } catch (error) {
            console.log(error)
        }
    }
    async getUserPost(req,res){
        try {
            
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
            return postData
        } catch (error) {
            console.log(error)
        }
    }
    async deletePost(userId,postId){
        try {
            console.log(userId,postId)
            const isvalidPost = await PostModel.findOne({_id:new ObjectId(postId),userId: new ObjectId(userId)})
            if(isvalidPost){
                await PostModel.deleteOne({_id:new ObjectId(postId),userId: new ObjectId(userId)})
                return isvalidPost
            } else {
                return "Post doesnt exist"
            }
        } catch (error) {
            console.log(error)
        }
    }
    async updatePost(req,res){
        try {
            
        } catch (error) {
            console.log(error)
        }
    }
}