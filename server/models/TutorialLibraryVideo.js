import { Schema, model } from "mongoose"
const TutorialLibraryVideoSchema = new Schema({
    tutorialLibraryID: {
        type: String,
    },
    Name: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
    },
    equipmentRequirement: {
        type: [String],
        default: []
    },
    calorie: {
        type: Number
    },
    tags: {
        type: [String],
        default: []
    },
    // 每周练习频次，数组中存周几
    exerciseFrequency: {
        type: [String],
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
    },
    imgUrl: {
        type: String,
        require: true
    }

}, { timestamps: true })
const TutorialLibraryVideoModel = model("tutorialVideoLibraries", TutorialLibraryVideoSchema)
export default TutorialLibraryVideoModel