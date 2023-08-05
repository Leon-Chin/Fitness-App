import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { cancerlikeBlog, addContact, deleteUser, dislikeBlog, favoriteBlog, cancerfavoriteBlog, getUser, likeBlog, removeContact, updateUser, likeComment, cancerlikeComment, createReport } from '../controllers/user.js'
const router = express.Router()
// update user
// router.put('/:id', updateUser)
// router.options('/:id', function (req, res) {
//     res.sendStatus(200);
// });
router.put('/:id', verifyToken, updateUser)

// delete user
// router.delete('/:id', deleteUser)
// router.options('/signup', function (req, res) {
//     res.sendStatus(200);
// });
router.delete('/:id', verifyToken, deleteUser)

// get a user
router.get('/find/:id', getUser)

// add the contacts
router.put('/add/:id', verifyToken, addContact)

// remove the contacts
// router.put('/remove/:id', removeContact)
router.put('/remove/:id', verifyToken, removeContact)

// like the blog
// router.put('/like/:blogID', likeBlog)
router.put('/like/:blogID', verifyToken, likeBlog)

// cancel like the blog
router.put('/cancerlike/:blogID', verifyToken, cancerlikeBlog)

// favorite the blog
// router.put('/favorite/:blogID', favoriteBlog)
router.put('/favorite/:blogID', verifyToken, favoriteBlog)

// cancel favorite the blog
router.put('/cancerfavorite/:blogID', verifyToken, cancerfavoriteBlog)

// dislike the blog
// router.put('/dislike/:blogID', dislikeBlog)
router.put('/dislike/:blogID', verifyToken, dislikeBlog)

// like the comment
// router.put('/like/:blogID', likeBlog)
router.put('/likecomment/:commentID', verifyToken, likeComment)

router.put('/cancerlikecomment/:commentID', verifyToken, cancerlikeComment)

// router.post('/', createBlog)
router.post('/report', verifyToken, createReport)


export default router