import express from 'express'
import {getSingleUser,getPublicProfiles,getPublicTopics,getPublicRatings} from '../controller/publicController.js'

const router = express.Router()

// router.post('/add',addSlot)
router.get('/profile/:name/:date',getSingleUser)
router.get('/feed/:topic/:page/:minprice/:profilerating/:level',getPublicProfiles)
router.get('/topic/:ID',getPublicTopics)
router.get('/rating/:ID',getPublicRatings)



// routerlete/:ID',deleteSlot)



export default router