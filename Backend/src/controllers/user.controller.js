import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/APIerror.js'
import {ApiResponse} from '../utils/APIresponse.js'
import {User} from '../models/user.model.js'

const registerUser = asyncHandler(async(req,res)=>{

  const {email,password,username,name,gender} = req.body;
  
    console.log(email,password,username,name,gender);
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
    }).save({validateBeforeSave:false})

    res.send(new ApiResponse(201,{username:user.username,email:user.email,name:user.name,gender:user.gender}))
})

const loginUser = asyncHandler(async(req,res)=>{
        
})

const logoutUser = asyncHandler(async(req,res)=>{
        
})

const forgotPassword = asyncHandler(async(req,res)=>{

})

export {registerUser,loginUser,logoutUser,forgotPassword}