import { createError } from "../error.js"
import Conversation from '../models/Conversation.js'
import User from '../models/Users.js'

export const newConversation = async (req, res, next) => {
    const thisMembers = [req.user.id, req.body.receiverId]
    const newConversation = new Conversation({ members: thisMembers })
    try {
        const conversation = await Conversation.findOne({ members: { $eq: thisMembers } })
        console.log(conversation)
        if (conversation) {
            res.status(200).json(conversation)
        } else {
            const savedConversation = await newConversation.save()
            res.status(200).json(savedConversation)
        }
    } catch (err) {
        next(err)
    }
}

export const getConversation = async (req, res, next) => {
    const userID = req.user.id
    try {
        const conversation = await Conversation.find({
            members: { $in: [userID] }
        })
        res.status(200).json(conversation)
    } catch (err) {
        next(err)
    }
}

export const deleteConversation = async (req, res, next) => {
    try {
        await Conversation.findByIdAndDelete(req.params.id)
        res.status(200).json("Conversation has been deleted successfully")
    } catch (err) {
        next(err)
    }
}

// export const getComments = async (req, res, next) => {
//     try {
//         const comments = await Comment.find({ blogID: req.params.blogid })
//         res.status(200).json(comments)
//     } catch (err) {
//         next(err)
//     }
// }