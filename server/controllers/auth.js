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
        await newUser.save()
        res.status(200).send("User has been created")
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