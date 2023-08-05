import { createError } from "../error.js"
import TutorialLibrary from '../models/TutorialLibrary.js'
export const createTutorialLibrary = async (req, res, next) => {
    const newTutorialLibrary = new TutorialLibrary({ ...req.body })
    try {
        const saveTutorialLibrary = await newTutorialLibrary.save()
        res.status(200).json(saveTutorialLibrary)
    } catch (err) {
        next(err)
    }
}

export const getAllTutorialLibrary = async (req, res, next) => {
    const type = req.params.type
    try {
        const tutorialLibrary = await TutorialLibrary.find({ tutorialName: { $eq: type } })
        res.status(200).json(tutorialLibrary)
    } catch (err) {
        next(err)
    }
}
export const removeTutorialLibrary = async (req, res, next) => {
    try {
        const tutorialLibrary = await TutorialLibrary.findById(req.params.id)
        if (!tutorialLibrary) {
            return next(createError(404, "not found"))
        }
        await TutorialLibrary.findByIdAndDelete(req.params.id)
        res.status(200).json('remove successfully')
    } catch (err) {
        next(err)
    }
}

export const updateTutorialLibrary = async (req, res, next) => {
    try {
        const tutorialLibrary = await TutorialLibrary.findById(req.params.id)
        if (!tutorialLibrary) {
            return next(createError(404, "not found"))
        }
        const updatedTutorialLibrary = await TutorialLibrary.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedTutorialLibrary)
    } catch (err) {
        next(err)
    }
}

export const getTutorialLibrary = async (req, res, next) => {
    try {
        const tutorialLibrary = await TutorialLibrary.findById(req.params.id)
        if (!tutorialLibrary) {
            return next(createError(404, "not found"))
        }
        res.status(200).json(tutorialLibrary)
    } catch (err) {
        next(err)
    }
}