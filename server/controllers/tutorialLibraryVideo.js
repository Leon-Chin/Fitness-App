import { createError } from "../error.js"
import TutorialLibraryVideo from '../models/TutorialLibraryVideo.js'
import User from '../models/Users.js'
export const createTutorialLibraryVideo = async (req, res, next) => {
    const newTutorialLibraryVideo = new TutorialLibraryVideo({ ...req.body })
    try {
        const saveTutorialLibraryVideo = await newTutorialLibraryVideo.save()
        res.status(200).json(saveTutorialLibraryVideo)
    } catch (err) {
        next(err)
    }
}

export const getAllTutorialLibraryVideo = async (req, res, next) => {
    try {
        const tutorialLibraryVideo = await TutorialLibraryVideo.find({ tutorialLibraryID: { $eq: req.params.id } })
        res.status(200).json(tutorialLibraryVideo)
    } catch (err) {
        next(err)
    }
}
export const removeTutorialLibraryVideo = async (req, res, next) => {
    try {
        const tutorialLibraryVideo = await TutorialLibraryVideo.findById(req.params.id)
        if (!tutorialLibraryVideo) {
            return next(createError(404, "not found"))
        }
        await TutorialLibraryVideo.findByIdAndDelete(req.params.id)
        res.status(200).json('remove successfully')
    } catch (err) {
        next(err)
    }
}

export const updateTutorialLibraryVideo = async (req, res, next) => {
    try {
        const tutorialLibraryVideo = await TutorialLibraryVideo.findById(req.params.id)
        if (!tutorialLibraryVideo) {
            return next(createError(404, "not found"))
        }
        const updatedTutorialLibraryVideo = await TutorialLibraryVideo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedTutorialLibraryVideo)
    } catch (err) {
        next(err)
    }
}

export const getTutorialLibraryVideo = async (req, res, next) => {
    try {
        const tutorialLibraryVideo = await TutorialLibraryVideo.findById(req.params.id)
        if (!tutorialLibraryVideo) {
            return next(createError(404, "not found"))
        }
        res.status(200).json(tutorialLibraryVideo)
    } catch (err) {
        next(err)
    }
}