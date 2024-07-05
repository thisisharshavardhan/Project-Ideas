import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    usersince: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
    },
    bio: {
        type: String,
    },
    refreshToken: {
        type: String
    }

}, {timestamps: true});

export const User = mongoose.model('User', userSchema);