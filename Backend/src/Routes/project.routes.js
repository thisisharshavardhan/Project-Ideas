import { Router } from "express";
import { get } from "mongoose";
import { getCategories } from "../controllers/project.controller.js";
const projectRouter = Router()
project.route('/get-categories').get(getCategories)
export default projectRouter