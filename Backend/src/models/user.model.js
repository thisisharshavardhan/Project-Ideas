import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    gender: {
        type: String,
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
    },
    city: {
        type: String,
    },
    usersince: {
        type: Date,
        default: Date.now
    },
    social: {
        linkedin: {
            type: String,
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
    loginAttempts: [{
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

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.createRefreshToken = function () {
    
    return jwt.sign({ 
        id: this._id,
        username: this.username,
        email: this.email,
        name: this.name,
     }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
}

userSchema.methods.createAccessToken = function () {
    return jwt.sign({
        id: this._id,
        username: this.username,
        email: this.email,
        name: this.name,
    }, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });
}

export const User = mongoose.model('User', userSchema);