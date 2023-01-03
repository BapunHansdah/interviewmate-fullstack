import express from 'express'
import {addSlot,getSlots,deleteSlot,scheduleSlot,activeSlots,approveSlot,bookedSlots,completeSlot} from '../controller/slotController.js'

const router = express.Router()

router.post('/add',addSlot)
router.get('/:date',getSlots)
router.delete('/delete/:ID',deleteSlot)
router.put('/schedule/:ID',scheduleSlot)
router.get('/activeslots/:page',activeSlots)
router.put('/approve/:ID',approveSlot)
router.get('/bookedslots/:page',bookedSlots)
router.put('/complete/:ID',completeSlot)




export default router