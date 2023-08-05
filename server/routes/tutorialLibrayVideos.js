import express from 'express'
import { createTutorialLibraryVideo,getAllTutorialLibraryVideo, updateTutorialLibraryVideo, removeTutorialLibraryVideo, getTutorialLibraryVideo } from '../controllers/tutorialLibraryVideo.js'
const router = express.Router()

// create a blog
// router.post('/', createBlog)
router.post('/', createTutorialLibraryVideo)

router.get('/:id', getAllTutorialLibraryVideo)

// updateBlog
router.put('/:id', updateTutorialLibraryVideo)

// router.delete('/:id', removeBlog)
router.delete('/:id', removeTutorialLibraryVideo)

// get
router.get('/find/:id', getTutorialLibraryVideo)

export default router