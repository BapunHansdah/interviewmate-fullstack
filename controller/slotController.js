import bcrypt from 'bcryptjs'
import Slot from '../model/slotSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const addSlot= async (req,res,next)=>{
	const {id} = req.user
	const {time,date} = req.body

	if(!time){
		return res.status(403).json("add time")
	}
	if(!date){
		return res.status(403).json("add date")
	}

	try{
		 const newSlot = await new Slot({
		 	time,date,by:id
		 })
		 await newSlot.save()
	      return res.status(200).json(newSlot);
	}catch(err){
		next(err)
	}
}

export const getSlots= async (req,res,next)=>{
	const {id} = req.user
	try{
		const slots = await Slot.find({by:id})
	     return res.status(200).json(slots);
	}catch(err){
		next(err)
	}
}

export const deleteSlot= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params
	try{
		 const slots = await Slot.deleteOne({_id:ID,by:id})
	     return res.status(200).json(slots);
	}catch(err){
		next(err)
	}
}

export const scheduleSlot= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params
	const {booked} = req.body

	try{
		 if(!id){
		 return res.status(200).json("login first");
         }
         if(!ID){
		 return res.status(200).json("Invalid slot");
         }
	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{booked:booked,bookedBy:id},{new:true})
	     return res.status(200).json(updateSlot);
	}catch(err){
		next(err)
	}
}

export const activeSlots= async (req,res,next)=>{
	const {id} = req.user

	try{
		 if(!id){
		 return res.status(200).json("login first");
         }
	 	 const updateSlot = await Slot.find({by:id,booked:true}).populate({path:'bookedBy',select:'username email roles'})
	     return res.status(200).json(updateSlot);
	}catch(err){
		next(err)
	}
}

export const approveSlot= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params
	const {approved} = req.body

	try{
		 if(!id){
		 return res.status(200).json("login first");
         }
         if(!ID){
		 return res.status(200).json("Invalid slot");
         }
	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{approved:approved},{new:true})
	     return res.status(200).json(updateSlot);
	}catch(err){
		next(err)
	}
}

export const approvedSlots= async (req,res,next)=>{
	const {id} = req.user

	try{
		 if(!id){
		 return res.status(200).json("login first");
         }
	 	 const updateSlot = await Slot.find({bookedBy:id}).populate({path:'by',select:'username email roles'})
	     return res.status(200).json(updateSlot);
	}catch(err){
		next(err)
	}
}

export const completeSlot= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params
	const {completed} = req.body

	try{
		 if(!id){
		 return res.status(200).json("login first");
         }
         if(!ID){
		 return res.status(200).json("Invalid slot");
         }
	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{completed:completed},{new:true})
	     return res.status(200).json(updateSlot);
	}catch(err){
		next(err)
	}
}