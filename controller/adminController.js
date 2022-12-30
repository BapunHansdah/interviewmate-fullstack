import bcrypt from 'bcryptjs'
import Info from '../model/infoSchema.js'
import Slot from '../model/slotSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'


export const isAdmin = async (req,res,next)=>{
	const {id,role} = req.user

	if(!id){
	    return res.status(401).json({msg:"login first!!"})
	}

	if(role !== 'admin'){
	    return res.status(401).json({isAdmin:false})
	}
	return res.status(200).json({isAdmin:true})

}


export const getUsers = async (req,res,next)=>{
	const {id,role} = req.user

	if(!id){
	    return res.status(401).json({msg:"login first!!"})
	}


	if(!role === 'admin'){
	    return res.status(200).json({msg:"Only Admin can access this page"})
	}

	const userList =await Info.find().populate({path:'user',select:'username email'})
	return res.status(200).json(userList)
}

export const getBookedSlots = async (req,res,next)=>{
	const {id,role} = req.user

	if(!id){
	    return res.status(401).json({msg:"login first!!"})
	}


	if(!role === 'admin'){
	    return res.status(200).json({msg:"Only Admin can access this page"})
	}

	const slot =await Slot.find({booked:true}).populate({path:'bookedBy by',select:'username email'})

	return res.status(200).json(slot)
}