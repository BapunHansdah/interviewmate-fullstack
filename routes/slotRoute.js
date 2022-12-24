import express from 'express'
import {addSlot,getSlots,deleteSlot,scheduleSlot,activeSlots,approveSlot,approvedSlots,completeSlot} from '../controller/slotController.js'

const router = express.Router()

router.post('/add',addSlot)
router.get('/',getSlots)
router.delete('/delete/:ID',deleteSlot)
router.put('/schedule/:ID',scheduleSlot)
router.get('/activeslots',activeSlots)
router.put('/approve/:ID',approveSlot)
router.get('/approvedslots',approvedSlots)
router.put('/complete/:ID',completeSlot)




export default router