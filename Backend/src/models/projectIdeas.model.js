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
    tags: {
        type: Array,
        required: true
    },
});

const ProjectIdea = mongoose.model("ProjectIdea", projectIdeasSchema);