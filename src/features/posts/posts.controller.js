import PostRepositories from "./posts.repositories.js"
export default class PostController{
    constructor(){
        this.postRepositories = new PostRepositories()
    }

    async getAllPosts(req,res){
        try {
            const allPosts = await this.postRepositories.getAllPosts()
            res.status(200).send(allPosts)
        } catch (error) {
            console.log(error)
        }
    }
    async getOnePost(req,res){
        try {
            const postId = req.params.postId
            const getPost = await this.postRepositories.getOnePost(postId)
            return res.status(201).send(getPost)
        } catch (error) {
            console.log(error)
        }
    }
    async getUserPost(req,res){
        try {
            const userId = req.userId
            const userPosts = await this.postRepositories.getUserPost(userId)
            if (userPosts){
                return res.status(201).send(userPosts)
            } else {
                return res.status(400).send("no such post please check postId")
            }
        } catch (error) {
            console.log(error)
        }
    }
    async createPost(req,res){
        try {
            const userId = req.userId
            const data = req.body
            const post = await this.postRepositories.createPost(userId,data)
            res.status(201).send(post)
        } catch (error) {
            console.log(error)
        }
    }
    async deletePost(req,res){
        try {
            const userId = req.userId
            const postId = req.params.postId
            const result = await this.postRepositories.deletePost(userId,postId)
            if(result){
                res.status(201).send(result)
            }  else {
                return res.status(400).send("no such post please check postId")
            }
        } catch (error) {
            console.log(error)
        }
    }
    async updatePost(req,res){
        try {
            const userId = req.userId
            const postId = req.params.postId
            const updatedData = await this.postRepositories.updatePost(userId,postId,req.body)
            if (updatedData){
                return res.status(200).send(updatedData)
            }  else {
                return res.status(400).send("no such post please check postId")
            }
        } catch (error) {
            console.log(error)
        }
    }
}