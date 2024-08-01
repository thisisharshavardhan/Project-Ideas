import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './Routes/user.routes.js'

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
app.use(cookieParser())

// Routes

app.use('/api/v1/users',userRouter)
app.use('/api/v1/projects',projectRouter)

export {app}