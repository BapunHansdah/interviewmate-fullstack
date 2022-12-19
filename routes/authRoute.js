import express from 'express'
import {register,activate,signin,access} from '../controller/authController.js'

const router = express.Router()

router.post('/register',register)
router.get('/activate/:activation_token',activate)
router.post('/signin',signin)
router.post('/access',access)


export default router