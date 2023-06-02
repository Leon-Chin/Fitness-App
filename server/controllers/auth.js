import mongoose from 'mongoose'
import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import { createError } from '../error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    try {
        const reqUser = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(reqUser.password, salt)
        const CryptUser = { ...reqUser, password: hash }
        const newUser = new User(CryptUser)
        const user = await newUser.save()
        res.status(200).send(user)
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {
    try {
        const { name, password } = req.body
        const user = await User.findOne({ name })
        const handleSendAfterSuccess = () => {
            const token = jwt.sign({ id: user._id }, process.env.JWT)
            res
                .cookie("access_token", token, {
                    httpOnly: true
                })
                .status(200).json(user)
        }
        const isVerified = await bcrypt.compare(password, user.password)
        const verifyProcess = async (isVerified) => {
            !isVerified ? next(createError(400, "wrong information")) : handleSendAfterSuccess()
        }
        !user ? next(createError(404, "user not found")) : verifyProcess(isVerified)
    } catch (err) {
        next(err)
    }
}

export const googleAuth = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT)
            console.log(user);
            res.cookie("access_token", token, {
                httpOnly: true
            })
                .status(200).json(user._doc)
        } else {
            const newUser = new User({
                ...req.body,
                fromGoogle: true
            })
            const savedUser = await newUser.save()
            const token = jwt.sign({ id: savedUser._id }, process.env.JWT)
            res.cookie("access_token", token, {
                httpOnly: true
            })
                .status(200).json(savedUser._doc)
        }
    } catch (err) {
        next(err)
    }
}