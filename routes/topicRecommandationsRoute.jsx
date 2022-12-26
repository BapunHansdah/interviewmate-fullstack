import express from 'express'
import {addTopicRecommandation,getTopicsRecommandations,deleteTopicRecommandation} from '../controller/topicRecommandationsController.js'

const router = express.Router()

router.post('/add',addTopicRecommandation)
router.get('/',getTopicsRecommandations)
router.delete('/delete/:ID',deleteTopicRecommandation)




export default router