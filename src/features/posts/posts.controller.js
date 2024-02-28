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
            res.status(201).send(result)
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