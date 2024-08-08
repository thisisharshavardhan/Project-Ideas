import mongoose from "mongoose";

const categeriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const Category = mongoose.model("Category", categeriesSchema);
export default Category;