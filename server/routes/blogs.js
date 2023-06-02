import express from 'express'
import { contact, createBlog, getBlog, mostLike, random, removeBlog, updateBlog, tags, search } from '../controllers/blog.js'
import { verifyToken } from '../verifyToken.js'
const router = express.Router()

// create a blog
router.post('/', verifyToken, createBlog)

router.put('/:id', verifyToken, updateBlog)

router.delete('/:id', verifyToken, removeBlog)

router.get('/find/:id', getBlog)

router.get('/mostlike', mostLike)
router.get('/contact', verifyToken, contact)
router.get('/random', random)

router.get('/tags', tags)
router.get('/search', verifyToken, search)


export default router