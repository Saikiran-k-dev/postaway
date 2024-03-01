import mongoose from "mongoose";
import {ObjectId} from "mongodb"


import { commentSchema } from "./comments.schema.js";
import { postSchema } from "../posts/posts.schema.js";

const CommentModel = new mongoose.model('comment',commentSchema)
const PostModel = new mongoose.model('post',postSchema)

export default class CommentRepositories{
    async getComments(postId){
        try {
            const comments = await CommentModel.find({postId:new ObjectId(postId)})
            return comments
       } catch (error) {
            comsole.log(error)
        }
    }
    async addComments(userId,postId,data){
        try {
            const newComment = await new CommentModel({
                content:data.content,
                userId: new ObjectId(userId),
                postId: new ObjectId(postId)
            })
            await newComment.save()
            
        } catch (error) {
            comsole.log(error)
        }
    }
    async deleteComment(){
        try {
            
        } catch (error) {
            comsole.log(error)
        }
    }
    async updateComment(){
        try {
            
        } catch (error) {
            comsole.log(error)
        }
    }
    }
