import express from 'express'
import {userInfo,editUser,activeUser,addTopic,deleteTopic} from '../controller/userController.js'

const router = express.Router()

router.get('/me',userInfo)
router.put('/edit',editUser)
router.put('/active',activeUser)
router.put('/addtopic',addTopic)
router.delete('/deletetopic/:ID',deleteTopic)


export default router