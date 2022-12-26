import express from 'express'
import {register,activate,signin,access,signout} from '../controller/authController.js'

const router = express.Router()

router.post('/register',register)
router.get('/activate/:activation_token',activate)
router.post('/signin',signin)
router.post('/access',access)
router.get('/signout',signout)


export default router