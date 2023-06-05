import express, { json } from "express"
const app = express()
import mongoose from "mongoose"
// import UserModel from './models/Users.js'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import blogRoutes from './routes/blogs.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log('Connected to Database');
    }).catch((err) => {
        throw err
    })
}
app.use(json())
app.use(cookieParser())

app.use(cors(corsOptions))
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/comments', commentRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'error'
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})
app.listen(3001, () => {
    connect()
    console.log("Connect to server!");
})