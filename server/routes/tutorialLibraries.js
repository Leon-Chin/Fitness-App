import express from 'express'
import { createTutorialLibrary, getAllTutorialLibrary, updateTutorialLibrary, removeTutorialLibrary, getTutorialLibrary } from '../controllers/tutorialLibrary.js'
const router = express.Router()

// create a blog
// router.post('/', createBlog)
router.post('/', createTutorialLibrary)

router.get('/:type', getAllTutorialLibrary)

// updateBlog
router.put('/:id', updateTutorialLibrary)

// router.delete('/:id', removeBlog)
router.delete('/:id', removeTutorialLibrary)

// get
router.get('/find/:id', getTutorialLibrary)

export default router