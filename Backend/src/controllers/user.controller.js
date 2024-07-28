import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/APIerror.js'
import {ApiResponse} from '../utils/APIresponse.js'
import {User} from '../models/user.model.js'
import {LoginAttempt} from '../models/login_attempts.model.js'

const registerUser = asyncHandler(async(req,res)=>{

  const {email,password,username,name,gender} = req.body;
    if(!email || !password || !username || !name || !gender){
        throw new ApiError(400,'Please provide email, username, fullname, gender and password')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
        throw new ApiError(400, 'Please provide a valid email address')
    }

    if (password.length < 6) {
        throw new ApiError(400, 'Password must be at least 6 characters')
    }

    let usernameExists = await User.findOne({username})
    
    if (usernameExists) {
        throw new ApiError(400, 'User with username '+username+' already exists')
    }
    
    const userExists = await User.findOne({email})
    if (userExists) {
        throw new ApiError(400, 'User with email '+email+' already exists')
    }

    const user = await User({
        email,
        password,
        username,
        name,
        gender
    }).save()

    res.send(new ApiResponse(201,{username:user.username,email:user.email,name:user.name,gender:user.gender}))
})

const loginUser = asyncHandler(async(req,res)=>{

    const {username,email,password} = req.body;

    if((!email && !password) || (!username && !password)){
        throw new ApiError(400,'Please provide email and password')
    }
    
    const user = await User.findOne({
        $or: [{ email }, { username }]
    })

    if (!user) {
        await LoginAttempt({
            ip: req.ip,
            Attempts: {
                time: Date.now(),
                success: false,
                message: 'Invalid email or username',
                userAgent: req.headers['user-agent']
            }
        }).save()
        throw new ApiError(401, 'Invalid email or username')
    }

    const isPasswordCorrect = await user.comparePassword(password)

    if (!isPasswordCorrect) {
        const invalidUser = await new LoginAttempt({
            ip: req.ip,
            Attempts: {
                time: Date.now(),
                success: false,
                message: 'Invalid password',
                userAgent: req.headers['user-agent']
            }
        }).save()
        user.loginAttempts.push(invalidUser._id)
        await user.save()
        throw new ApiError(401, 'Invalid password')
    }

    const refreshToken = user.createRefreshToken()
    const accessToken = user.createAccessToken()

    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    }

    user.refreshToken = refreshToken
    await user.save()

    await LoginAttempt.create({
        ip: req.ip,
        Attempts: {
            time: Date.now(),
            success: true,
            message: 'Login successful',
            userAgent: req.headers['user-agent']
        }
    })
    res.status(200)
    .cookie('refreshToken', refreshToken, options)
    .cookie('accessToken', accessToken, options)
    .send(new ApiResponse(200, { accessToken }))


})

const logoutUser = asyncHandler(async(req,res)=>{
        
})

const forgotPassword = asyncHandler(async(req,res)=>{

})

export {registerUser,loginUser,logoutUser,forgotPassword}