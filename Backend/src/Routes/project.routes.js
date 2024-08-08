import { Router } from "express";
import { get } from "mongoose";
import { getCategories, getSubcategories, postCategory,postSubCategory } from "../controllers/project.controller.js";
const projectRouter = Router()
projectRouter.route('/get-categories').get(getCategories)
projectRouter.route('/get-subcategories').get(getSubcategories)
projectRouter.route('/post-category').post(postCategory)
projectRouter.route('/post-subcategory').post(postSubCategory)
export default projectRouter