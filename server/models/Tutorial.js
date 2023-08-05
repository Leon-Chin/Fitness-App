import { Schema, model } from "mongoose"
const TutorialSchema = new Schema({
    tutorialName: {
        type: String,
        required: true,
    },
    tutorialLibrary: {
        type: [String],
        default: []
    },
    imgUrl: {
        type: [String],
        default: []
    },
}, { timestamps: true })

const TutorialModel = model("tutorials", TutorialSchema)
export default TutorialModel