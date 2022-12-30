import bcrypt from 'bcryptjs'
import Slot from '../model/slotSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const addSlot= async (req,res,next)=>{
	const {id} = req.user
	const {time,date,price,duration} = req.body

	if(!time){
		return res.status(403).json({msg:"add time"})
	}
	if(!date){
		return res.status(403).json({msg:"add date"})
	}

	try{
		 const newSlot = await new Slot({
		 	time,date,by:id,price,duration
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
	if(!id){
		return res.status(401).json({msg:"Login Again"})
	}
	if(!ID){
		return res.status(401).json({msg:"This Slot doesn't exist"})
	}
	try{
		 const slots = await Slot.deleteOne({_id:ID,by:id})
	     return res.status(200).json({msg:"Slot Deleted Successfully"});
	}catch(err){
		next(err)
	}
}

export const scheduleSlot= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params
	const {booked,by,topic} = req.body

	try{
		 if(!id){
		 return res.status(401).json({msg:"login first"});
         }
         if(!ID){
		 return res.status(403).json({msg:"Invalid slot"});
         }
         if(id===by){
		    return res.status(403).json({msg:"you can't interview your self"});
         }

         if(booked){
         	return  res.status(403).json({msg:"Already Booked"});
         }

	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{booked:true,bookedBy:id,topic:topic},{new:true})
	     return res.status(200).json({msg:"Slot Booked"});
	}catch(err){
		next(err)
	}
}

export const activeSlots= async (req,res,next)=>{
	const {id} = req.user

	try{
		 if(!id){
		 return res.status(200).json({msg:"login first"});
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
		 return res.status(200).json({msg:"login first"});
         }
         if(!ID){
		 return res.status(200).json({msg:"Invalid slot"});
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
		 return res.status(200).json({msg:"login first"});
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
	const {completed,rating,by,review} = req.body

	if(id===by){
		    return res.status(403).json({msg:"you can't approve your self"});
     }
     if(rating===0){
		    return res.status(403).json({msg:"give atleast star rating"});	   
     }


	try{
		 if(!id){
		 return res.status(200).json({msg:"login first"});
         }
         if(!ID){
		 return res.status(200).json({msg:"Invalid slot"});
         }
	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{completed:completed,rating,review},{new:true})
	     return res.status(200).json({msg:"Successfully Reviewed"});
	}catch(err){
		next(err)
	}
}