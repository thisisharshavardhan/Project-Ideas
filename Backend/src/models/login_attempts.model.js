import mongoose from "mongoose";

const loginAttemptsSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    Attempts: [
        {
            time: {
                type: Date,
                default: Date.now,
            },
            success: {
                type: Boolean,
                default: false,
            },
            userAgent: {
                type: String,
            },
        }
    ],

});

const LoginAttempt = mongoose.model("LoginAttempt", loginAttemptsSchema);