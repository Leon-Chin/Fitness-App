import mongoose from 'mongoose'
import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import { createError } from '../error.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
    console.log('signup');
    try {
        const reqUser = req.body
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(reqUser.password, salt)
        const CryptUser = { ...reqUser, password: hash }
        const newUser = new User(CryptUser)
        console.log(newUser._id);
        const token = jwt.sign({ id: newUser._id }, process.env.JWT)
        const user = await newUser.save()
        res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })
            .cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(user._doc)
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {
    console.log('signup');

    try {
        const { name, password } = req.body
        const user = await User.findOne({ name })
        const handleSendAfterSuccess = () => {
            const token = jwt.sign({ id: user._id }, process.env.JWT)
            res
                .set({
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    "Content-Type": "application/json;charset=utf-8",
                    "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Access-Token",
                    "Access-Control-Allow-Credentials": true
                })
                .cookie("access_token", token, {
                    httpOnly: true
                })
                .status(200).json(user._doc)
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
    console.log('signup');

    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT)
            console.log(res.header);
            res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })
                .cookie("access_token", token, {
                    httpOnly: true
                })
                .status(200).json(user)
        } else {
            const newUser = new User({
                ...req.body,
                fromGoogle: true
            })
            const savedUser = await newUser.save()
            const token = jwt.sign({ id: savedUser._id }, process.env.JWT)
            res
                .set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' })
                .cookie("access_token", token, {
                    httpOnly: true
                })
                .status(200).json(savedUser._doc)
        }
    } catch (err) {
        next(err)
    }
}