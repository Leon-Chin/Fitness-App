import { createError } from "../error.js"
import Message from '../models/Message.js'
import Conversation from '../models/Conversation.js'
import User from '../models/Users.js'

export const sendMessage = async (req, res, next) => {
    const conversationId = req.body.conversationId
    const newMessage = new Message({ ...req.body, sender: req.user.id })
    try {
        await Conversation.findByIdAndUpdate(conversationId, {
            $set: { lastWords: req.body.text }
        })
        const savedMessage = await newMessage.save()
        const newConversation = await Conversation.findById(conversationId)
        res.status(200).json({ savedMessage, conversation: newConversation })
    } catch (err) {
        next(err)
    }
}

export const getMessage = async (req, res, next) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })
        res.status(200).json(messages)
    } catch (err) {
        next(err)
    }
}