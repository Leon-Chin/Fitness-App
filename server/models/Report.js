import { Schema, model } from "mongoose"
const ReportSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    targetID: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ReportModel = model("reports", ReportSchema)
export default ReportModel