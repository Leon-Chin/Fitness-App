import express from 'express'
import { addComment, deleteComment, getComments } from '../controllers/comment.js'
import { verifyToken } from '../verifyToken.js'
const router = express.Router()

// router.get('/test', test)
router.post('/', verifyToken, addComment)
router.delete('/:id', verifyToken, deleteComment)
router.get('/:blogid', verifyToken, getComments)

export default router