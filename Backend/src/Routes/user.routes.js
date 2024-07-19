import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";
import multer from "multer";

const upload = multer()

const userRouter = Router()

userRouter.route('/register').post(upload.none(),registerUser)
userRouter.route('/login').post(upload.none(),loginUser)

export default userRouter