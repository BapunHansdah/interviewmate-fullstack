import express from 'express'
import {isAdmin,getUsers,getBookedSlots} from '../controller/adminController.js'

const router = express.Router()

router.get('/',isAdmin)
router.get('/bookedslots',getBookedSlots)
router.get('/users',getUsers)

// router.post('/add',addSlot)
// router.get('/',getSlots)
// router.delete('/delete/:ID',deleteSlot)
// router.put('/schedule/:ID',scheduleSlot)
// router.get('/activeslots',activeSlots)
// router.put('/approve/:ID',approveSlot)
// router.get('/approvedslots',approvedSlots)
// router.put('/complete/:ID',completeSlot)




export default router