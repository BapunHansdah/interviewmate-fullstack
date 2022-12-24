import User from '../model/userSchema.js'
import Slot from '../model/slotSchema.js'
import Topic from '../model/topicSchema.js'
import Info from '../model/infoSchema.js'
import {connectDB} from '../config/db.js'


export const getSingleUser =async (req,res,next)=>{
     
     const {name} = req.params

     try{
     	if(!name){
     		return res.status(404).json("user not found")
     	}
     	const user = await User.findOne({username:name}).select('username roles')
          const info = await Info.findOne({user:user.id}).populate({path:'user',select:'username email roles'})
          const slot = await Slot.find({by:user.id})
          const topic = await Topic.find({by:user.id})
          return res.status(200).json({user,info,slot,topic});
     }catch(err){
     	next(err)
     }
}


export const getPublicProfiles =async (req,res,next)=>{
     
     try{
          const user = await Info.find().populate({path:"user",select:"username"}).select("fullname location bio avatar")
          return res.status(200).json(user);
     }catch(err){
          next(err)
     }
}

export const getPublicTopics =async (req,res,next)=>{
     const {ID} = req.params
     try{
          const topic = await Topic.find({by:ID}) 
          return res.status(200).json(topic);
     }catch(err){
          next(err)
     }
}

export const getPublicSlots =async (req,res,next)=>{
     const {ID} = req.params
     try{
          const slots = await SLot.find({by:ID}) 
          return res.status(200).json(slots);
     }catch(err){
          next(err)
     }
}

