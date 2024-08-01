import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/APIerror.js";
import {ApiResponse} from "../utils/APIresponse.js";
import Category from "../models/categeries.model.js";
const getCategories = asyncHandler(async (req, res) => {
    //fetching all categories
    const categorys = await Category.find({}).select("-_id -__v -subcategeries");
    res.send(new ApiResponse(200, categorys)).status(200);
})

const postCategory = asyncHandler(async (req, res) => {

    if(!(req.body.name)) {
        throw new ApiError(401,"Category Name is required")
    }

    const existsCategory = await Category.findOne({name:req.body.name})

    if(existsCategory){
        throw new ApiError(401,"Category already exists")
    }

    await Category.create({
        name: req.body.name,
    })

    res.json({ message: "Category created successfully" })

})

export { getCategories,postCategory } ;