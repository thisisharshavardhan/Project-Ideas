import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        default: Math.random().toString(36).substring(7)
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    },
    bio: {
        type: String,
    },
    avatar: {
        type: String,
    },
    cover: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    usersince: {
        type: Date,
        default: Date.now
    },
    social: {
        linkedin: {
            type: String
        },
        github: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        custom_url: {

            logo: {
                type: String
            },
            name: {
                type: String
            },
            url: {
                type: String
            }
        }
    },
    refreshToken: {
        type: String
    },
    loginAttempts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'LoginAttempt'
        }],

}, { timestamps: true });

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10);
    }
    next();
});

export const User = mongoose.model('User', userSchema);