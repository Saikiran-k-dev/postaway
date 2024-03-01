import express from "express"
import CommentsController from "./comments.controller.js"

const commentRouter = express.Router()

const commentsController = new CommentsController()

commentRouter.get("/:postId",(req,res)=>{
    commentsController.getComments(req,res)
}
)

commentRouter.post("/:postId",(req,res)=>{
    commentsController.addComments(req,res)
}
)

commentRouter.delete("/:commentId",(req,res)=>{
    commentsController.deleteComment(req,res)
}
)
commentRouter.put("/:commentId",(req,res)=>{
    commentsController.updateComment(req,res)
}
)

