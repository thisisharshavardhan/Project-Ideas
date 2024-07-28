import mongoose from "mongoose";

const categeriesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    subcategeries: [
        {
            name: {
                type: String,
                required: true
            }
        }
    ]
    })

const Categery = mongoose.model("Categery", categeriesSchema);