import { Schema, model } from "mongoose"
const TutorialLibrarySchema = new Schema({
    tutorialName: {
        type: String,
    },
    Name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'series'
    },
    brief: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
        require: true
    },
    users: {
        type: [String],
        default: []
    }
}, { timestamps: true })

const TutorialLibraryModel = model("tutorialLibraries", TutorialLibrarySchema)
export default TutorialLibraryModel