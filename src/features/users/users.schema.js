import mongoose  from "mongoose";

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\S+@\S+\.\S+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    bio: {
        type: String,
        maxlength: 160,
        trim: true
    },
    profilePicture: {
        type: String,
        default: 'default.jpg'
    },
    website: {
        type: String,
        trim: true,
        validate: {
            validator: function(value) {
                // Basic URL validation
                return /^(ftp|http|https):\/\/[^ "]+$/.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    birthday: {
        type: String
    },
    phoneNumber: {
        type: String,
        trim: true,
        match: /^\+(?:[0-9] ?){6,14}[0-9]$/
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    country: {
        type: String,
        trim: true
    },
    interests: {
        type: [String],
        trim: true
    },
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});