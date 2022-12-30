import express from 'express'
import authRoutes from './authRoute.js'
import userRoutes from './userRoute.js'
import slotRoutes from './slotRoute.js'
import topicRoutes from './topicRoute.js'
import publicRoutes from './publicRoute.js'
import adminRoutes from './adminRoute.js'
import auth from '../middileware/auth.js'




const router = express.Router()

router.use('/auth',authRoutes)
router.use('/user',auth,userRoutes)
router.use('/slot',auth,slotRoutes)
router.use('/topic',auth,topicRoutes)
router.use('/public',publicRoutes)
router.use('/admin',auth,adminRoutes)

export default router