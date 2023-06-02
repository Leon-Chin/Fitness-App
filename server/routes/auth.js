import express from 'express'
import { signin, signup } from '../controllers/auth.js'
const router = express.Router()

// create user
router.post('/signup', signup)
//sign in
router.post('/signin', signin)
// google
router.get('/google',)

export default router