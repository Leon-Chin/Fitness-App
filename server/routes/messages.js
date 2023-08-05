import express from 'express'
import { sendMessage, getMessage } from '../controllers/message.js'
import { verifyToken } from '../verifyToken.js'
const router = express.Router()

// start message
router.post('/', verifyToken, sendMessage)

// get message
router.get('/:conversationId', verifyToken, getMessage)

export default router