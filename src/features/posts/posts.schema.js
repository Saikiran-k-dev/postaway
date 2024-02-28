import mongoose from "mongoose";

export const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        maxlength: 280 
    },
    image: {
        type: String 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'like'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});