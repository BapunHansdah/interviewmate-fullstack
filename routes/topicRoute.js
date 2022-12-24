import express from 'express'
import {addTopic,getTopics,deleteTopic} from '../controller/topicController.js'

const router = express.Router()

router.post('/add',addTopic)
router.get('/',getTopics)
router.delete('/delete/:ID',deleteTopic)




export default router