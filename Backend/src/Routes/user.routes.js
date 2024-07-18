import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import multer from "multer";

const upload = multer()

const userRouter = Router()

userRouter.route('/register').post(upload.none(),registerUser)

export default userRouter