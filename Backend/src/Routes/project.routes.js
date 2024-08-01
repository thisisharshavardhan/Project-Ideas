import { Router } from "express";
import { get } from "mongoose";
import { getCategories, postCategory } from "../controllers/project.controller.js";
const projectRouter = Router()
projectRouter.route('/get-categories').get(getCategories)
projectRouter.route('/post-category').post(postCategory)
export default projectRouter