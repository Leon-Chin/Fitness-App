import { Schema, model } from "mongoose"
const UserSchema = new Schema({
    avator: {
        type: String,
        
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    preferedTheme: {
        type: String,
        default: 'dark'
    },
    preferedLanguage: {
        type: String,
        required: true,
        default: 'English'
    },
    hpNum: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    fitnessLevel: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    contactsUsers: {
        type: [String],
    },
    likeBlogs: {
        type: [String],
    },
    favoriteBlogs: {
        type: [String],
    },
}, { timestamps: true })

const UserModel = model("users", UserSchema)
export default UserModel