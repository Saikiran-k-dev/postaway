import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxlength: 280 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});