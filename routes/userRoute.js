import express from 'express'
import {userInfo,editUser} from '../controller/userController.js'

const router = express.Router()

router.get('/me',userInfo)
router.put('/edit',editUser)


export default router