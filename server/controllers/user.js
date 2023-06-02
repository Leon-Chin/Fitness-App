import { createError } from "../error.js"
import User from '../models/Users.js'
import Blog from '../models/Blog.js'
// update user
export const updateUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updateUser)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "Can only update your account"))
    }
}

// delete user
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "Can only delete your account"))
    }
}

// get a user
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
// add the contact
export const addContact = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { contactsUsers: req.params.id }
        })
        res.status(200).json("Add contact successfully")
    } catch (err) {
        next(err)
    }
}
// remove the contact
export const removeContact = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { contactsUsers: req.params.id }
        })
        res.status(200).json("remove contact successfully")
    } catch (err) {
        next(err)
    }
}
// like the blog
export const likeBlog = async (req, res, next) => {
    const UserID = req.user.id
    const BlogID = req.params.blogID
    try {
        await Blog.findByIdAndUpdate(BlogID, { $addToSet: { likesUsers: UserID }, $pull: { dislikeUsers: UserID } })
        res.status(200).json("has been liked")
    } catch (err) {
        next(err)
    }
}

export const favoriteBlog = async (req, res, next) => {
    const UserID = req.user.id
    const BlogID = req.params.blogID
    try {
        await Blog.findByIdAndUpdate(BlogID, { $addToSet: { favoriteUsers: UserID }, $pull: { dislikeUsers: UserID } })
        res.status(200).json("has been favorited")
    } catch (err) {
        next(err)
    }
}

// dislike the blog
export const dislikeBlog = async (req, res, next) => {
    const UserID = req.user.id
    const BlogID = req.params.blogID
    try {
        await Blog.findByIdAndUpdate(BlogID, { $addToSet: { dislikeUsers: UserID }, $pull: { likesUsers: UserID } }, { new: true })
        res.status(200).json("has been disliked")
    } catch (err) {
        next(err)
    }
}