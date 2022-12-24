import express from 'express'
import authRoutes from './authRoute.js'
import userRoutes from './userRoute.js'
import slotRoutes from './slotRoute.js'
import topicRoutes from './topicRoute.js'
import publicRoutes from './publicRoute.js'
import auth from '../middileware/auth.js'



const router = express.Router()

router.use('/auth',authRoutes)
router.use('/user',auth,userRoutes)
router.use('/slot',auth,slotRoutes)
router.use('/topic',auth,topicRoutes)
router.use('/public',publicRoutes)

export default router