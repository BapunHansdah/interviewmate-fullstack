import bcrypt from 'bcryptjs'
import Slot from '../model/slotSchema.js'
import Info from '../model/infoSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'
import moment from 'moment'

export const addSlot= async (req,res,next)=>{
	const {id} = req.user
	const {time,date,price,duration} = req.body
    console.log(date)

    
	if(!time){
		return res.status(403).json({msg:"add time"})
	}
	if(!date){
		return res.status(403).json({msg:"add date"})
	}

	if(price >1000){
		return res.status(403).json({msg:"Price can't be higher than 1000"})
	}
	if(duration <15){
		return res.status(403).json({msg:"Duration can't be less than 1 minute"})
	}
	try{
		 const newSlot = await new Slot({
		 	time,date,by:id,price,duration
		 })
		 await newSlot.save()

         const maxPrice = await Slot.find({by:id}).sort({price:-1}).limit(1)
         const minPrice = await Slot.find({by:id}).sort({price:+1}).limit(1)
		 const update =await Info.findOneAndUpdate({user:id},{maxPrice:maxPrice[0].price,minPrice:minPrice[0].price})

	     return res.status(200).json(newSlot);
	}catch(err){
		next(err)
	}
}

export const getSlots= async (req,res,next)=>{
	const {id} = req.user
	const {date} = req.params
	console.log(date)
	try{
		const slots = await Slot.find({by:id,date:date})
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
	
	const slot = await Slot.findOne({_id:ID})

	if(!slot){
	    return res.status(404).json({msg:"No slots found"});
	}

	if(slot.booked){
		return res.status(403).json({msg:"You can't delete booked slots"})
	}



	try{
		 const slots = await Slot.deleteOne({_id:ID,by:id})

		 const maxPrice = await Slot.find({by:id}).sort({price:-1}).limit(1)
         const minPrice = await Slot.find({by:id}).sort({price:+1}).limit(1)
		 const update =await Info.findOneAndUpdate({user:id},{maxPrice:maxPrice[0].price,minPrice:minPrice[0].price})
		 
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
	const {page} = req.params

	try{
		 if(!id){
		 return res.status(200).json({msg:"login first"});
         }

         const totalBookedSlots = await Slot.countDocuments({by:id,booked:true})
         
	 	 const activeSlots = await Slot.find({by:id,booked:true}).populate({path:'bookedBy',select:'username email roles'}).skip(page*10).limit(10)
	     return res.status(200).json({activeSlots,totalBookedSlots});
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

export const bookedSlots= async (req,res,next)=>{
	const {id} = req.user
	const {page} = req.params

	try{
		 if(!id){
		 return res.status(200).json({msg:"login first"});
         }
         const totalBookedSlots = await Slot.countDocuments({bookedBy:id})
	 	 const bookedSlots = await Slot.find({bookedBy:id}).populate({path:'by',select:'username email roles'}).skip(page*10).limit(10)
	     console.log(totalBookedSlots)
	     return res.status(200).json({bookedSlots,totalBookedSlots});
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
         const slot = await Slot.findOne({_id:ID})

         console.log(slot)

	     if(!slot){
	      return res.status(404).json({msg:"No slots found"});
	     }


         if(!ID){
		 return res.status(200).json({msg:"Invalid slot"});
         }
	 	 const updateSlot = await Slot.findOneAndUpdate({_id:ID},{completed:completed,rating,review},{new:true})

	 	const slots = await Slot.find({by:by,completed:true}).then(async (res)=>{
	 			const a = res.reduce((acc,obj)=>{
		    	if(obj.completed === true){
		    		acc.completed += 1
		    		acc.rating = acc.rating + obj.rating
		    	}
		    	return acc
	            },{completed:0,rating:0})
	            const rating = (a.completed ? (a.rating/a.completed).toFixed(1) : 0)
		        const update= await Info.findOneAndUpdate({user:by},{profileRating:rating,interviewed:a.completed},{new:true})

	 	})

	 	const userAttend = await Slot.count({bookedBy:id,completed:true}).then(async(res)=>{
		        const update= await Info.findOneAndUpdate({user:id},{attended:res},{new:true})
		        console.log(update)
	 	})

	     return res.status(200).json({msg:"Successfully Reviewed",slots});
	}catch(err){
		next(err)
	}
}