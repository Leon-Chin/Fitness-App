import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { addContact, deleteUser, dislikeBlog, favoriteBlog, getUser, likeBlog, removeContact, updateUser } from '../controllers/user.js'
const router = express.Router()


// update user
// router.put('/:id', updateUser)
router.options('/:id', function (req, res) {
    res.sendStatus(200);
});
router.put('/:id', verifyToken, updateUser)

// delete user
// router.delete('/:id', deleteUser)
router.options('/signup', function (req, res) {
    res.sendStatus(200);
});
router.delete('/:id', verifyToken, deleteUser)

// get a user
router.get('/find/:id', getUser)

// add the contacts
// router.put('/add/:id', addContact)
router.put('/add/:id', verifyToken, addContact)

// remove the contacts
// router.put('/remove/:id', removeContact)
router.put('/remove/:id', verifyToken, removeContact)

// like the blog
// router.put('/like/:blogID', likeBlog)
router.put('/like/:blogID', verifyToken, likeBlog)

// favorite the blog
// router.put('/favorite/:blogID', favoriteBlog)
router.put('/favorite/:blogID', verifyToken, favoriteBlog)

// dislike the blog
// router.put('/dislike/:blogID', dislikeBlog)
router.put('/dislike/:blogID', verifyToken, dislikeBlog)

export default router