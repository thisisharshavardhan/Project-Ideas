import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/APIerror.js";
import {ApiResponse} from "../utils/APIresponse.js";
import Category from "../models/categeries.model.js";
import Subcategory from "../models/subcategory.model.js";

const getCategories = asyncHandler(async (req, res) => {
    const {category} = req.body;
    const categories = await Category.find({name:category}).select("name -_id");
    if(!categories){
        throw new ApiError(404,"No categories found")
    }
    res.status(200).send(new ApiResponse(200,categories))
})

const getSubcategories = asyncHandler(async (req, res) => {
    const {category} = req.body;
    const cat_id = await Category.find({name:category}).select("_id")
    if (!cat_id[0]) {
        throw new ApiError(401,"No Category found")
    }
    
    const categories = await Subcategory.find({category:cat_id}).select("name -_id");
    if(!categories){
        throw new ApiError(404,"No Subcategories found")
    }
    res.status(200).send(new ApiResponse(200,categories))
})

const postCategory = asyncHandler(async (req, res) => {

    const {category} = req.body;

    if(!category ){
        throw new ApiError(401,"Category name is required")
    }
    console.log(category)

    const existsCategory = await Category.findOne({name:category});

    if(existsCategory){
        throw new ApiError(401,"Category already exists")
    }

    await Category.create({
        name: category,
    })

    res.status(200).send(new ApiResponse(200,"Category created successfully"))

})

const postSubCategory = asyncHandler(async (req, res) => {
    const {category,subcategory} = req.body;
    if(!category || !subcategory){
        throw new ApiError(401,"Category and Subcategory name is required")
    }
    const existsCategory = await Category.findOne({name:category});
    if(!existsCategory){
        throw new ApiError(401,"Category does not exists")
    }
    const existsSubCategory = await Subcategory.findOne({name:subcategory});
    if(existsSubCategory){
        throw new ApiError(401,"Subcategory already exists")
    }
    await Subcategory.create({
        name: subcategory,
        category: existsCategory._id
    }).then(() => {
        res.status(200).send(new ApiResponse(200,"Subcategory created successfully"))
    }).catch((err) => {
        throw new ApiError(500,"Error creating subcategory")
    })
})


export { getCategories,postCategory,postSubCategory,getSubcategories } ;