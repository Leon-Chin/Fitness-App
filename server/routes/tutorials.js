import express from 'express'
import { createTutorial, updateTutorial, removeTutorial, getTutorial } from '../controllers/tutorial.js'
const router = express.Router()

// create a blog
// router.post('/', createBlog)
router.post('/', createTutorial)

// updateBlog
router.put('/:id', updateTutorial)

// router.delete('/:id', removeBlog)
router.delete('/:id', removeTutorial)

// get
router.get('/find/:id', getTutorial)

export default router