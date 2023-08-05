import express from 'express'
import { newConversation, deleteConversation, getConversation } from '../controllers/conversation.js'
import { verifyToken } from '../verifyToken.js'
const router = express.Router()

// start a conversation
router.post('/', verifyToken, newConversation)

// get user's conversations
router.get('/', verifyToken, getConversation)

router.delete('/:id', verifyToken, deleteConversation)

export default router