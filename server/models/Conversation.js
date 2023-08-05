import { Schema, model } from "mongoose"
const ConversationSchema = new Schema({
    members: {
        type: Array,
        required: true
    },
    lastWords: {
        type: String,
        default: ''
    }
}, { timestamps: true })

const CommentModel = model("Conversation", ConversationSchema)
export default CommentModel