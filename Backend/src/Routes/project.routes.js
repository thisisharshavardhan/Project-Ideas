import { Router } from "express";
import { get } from "mongoose";
import { getCategories } from "../controllers/project.controller.js";
const projectRouter = Router()
projectRouter.route('/get-categories').get(getCategories)
projectRouter.route('/upload-project').post()
projectRouter.route('/get-projects').get()
projectRouter.route('/get-project/:id').get()
projectRouter.route('/update-project/:id').patch()
projectRouter.route('/delete-project/:id').delete()
export default projectRouter