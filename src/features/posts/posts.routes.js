import express from "express"
import PostController from "./posts.controller.js"

const postRouter = express.Router()

const postController = new PostController()

postRouter.get("/all",(req,res)=>{
    postController.getAllPosts(req,res)
})

postRouter.get("/:postId",(req,res)=>{
    postController.getOnePost(req,res)
})
postRouter.get("/",(req,res)=>{
    postController.getUserPost(req,res)
})
postRouter.post("/",(req,res)=>{
    postController.createPost(req,res)
})
postRouter.delete("/:postId",(req,res)=>{
    postController.deletePost(req,res)
})
postRouter.put("/:postId",(req,res)=>{
    postController.updatePost(req,res)
})

export default postRouter