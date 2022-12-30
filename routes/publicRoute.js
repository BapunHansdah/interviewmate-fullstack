import express from 'express'
import {getSingleUser,getPublicProfiles,getPublicTopics,getPublicRatings} from '../controller/publicController.js'

const router = express.Router()

// router.post('/add',addSlot)
router.get('/profile/:name',getSingleUser)
router.get('/feed/:topic',getPublicProfiles)
router.get('/topic/:ID',getPublicTopics)
router.get('/rating/:ID',getPublicRatings)



// router.delete('/delete/:ID',deleteSlot)



export default router