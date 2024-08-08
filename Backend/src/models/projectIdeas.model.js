import mongoose from "mongoose";

const projectIdeasSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subcategory: {
        type: mongoose.Types.Schema.ObjectId,
        ref: "Subcategory",
        required: true
    },
},
{
    timestamps: true
});

export const ProjectIdea = mongoose.model("ProjectIdea", projectIdeasSchema);