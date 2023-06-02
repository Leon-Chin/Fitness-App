import { Schema, model } from "mongoose"
const BlogSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likesUsers: {
        type: [String],
        default: []
    },
    dislikeUsers: {
        type: [String],
        default: []
    },
    favoriteUsers: {
        type: [String],
        default: []
    },
    imgUrl: {
        type: [String],
        default: []
    },
    tags: {
        type: [String],
        default: []
    },
}, { timestamps: true })

const BlogModel = model("blogs", BlogSchema)
export default BlogModel