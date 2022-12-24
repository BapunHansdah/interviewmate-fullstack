import express from 'express'
import {getSingleUser,getPublicProfiles,getPublicTopics} from '../controller/publicController.js'

const router = express.Router()

// router.post('/add',addSlot)
router.get('/profile/:name',getSingleUser)
router.get('/feed',getPublicProfiles)
router.get('/topic/:ID',getPublicTopics)



// router.delete('/delete/:ID',deleteSlot)



export default router