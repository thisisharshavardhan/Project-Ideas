import mongoose from "mongoose";

const loginAttemptsSchema = new mongoose.Schema({
    ip: {
        type: String,
        required: true,
    },
    Attempts:
    {
        time: {
            type: Date,
            default: Date.now,
        },
        success: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            required: true,
        },
        userAgent: {
            type: String,
        },
    }


});

export const LoginAttempt = mongoose.model("LoginAttempt", loginAttemptsSchema);
