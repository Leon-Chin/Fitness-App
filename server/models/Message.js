import { Schema, model } from "mongoose"
const MessageSchema = new Schema({
    conversationId: {
        type: String,
        required: true
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
}, { timestamps: true })

const CommentModel = model("Message", MessageSchema)
export default CommentModel