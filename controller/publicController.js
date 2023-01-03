import User from '../model/userSchema.js'
import Slot from '../model/slotSchema.js'
import Topic from '../model/topicSchema.js'
import Info from '../model/infoSchema.js'
import {connectDB} from '../config/db.js'


export const getSingleUser =async (req,res,next)=>{
     
     const {name,date} = req.params

     console.log(date)

     const user = await User.find({username:name}).select('username')
     if(!user){
          return res.status(404).json("user not found")
     }
 
     try{
     	if(!name){
     		return res.status(404).json("user not found")
     	}
     	const user = await User.findOne({username:name}).select('username')
          const info = await Info.findOne({user:user.id}).populate({path:'user',select:'username email'})
          const slot = await Slot.find({by:user.id,date:date})
          const review = await Slot.find({by:user.id,rating:{$gt:0}}).populate({path:'bookedBy',select:'username'})
          // const userReviewed = await Slot.find({bookedBy:user.id,rating:{$gt:0}})
          return res.status(200).json({info,slot,review});
     }catch(err){
     	next(err)
     }
}


export const getPublicProfiles =async (req,res,next)=>{

     const {topic,page,minprice,profilerating,level} = req.params
     // const array = [level]
     // return null

     try{
          const countUsers = await Info.countDocuments({role:"interviewer",profileRating:{$gte:parseInt(profilerating)},level:{$in:level.split(',')},minPrice:{$lte:parseInt(minprice)},active:true,topic:{$elemMatch:{title:topic}}})
         
          const user = await Info.aggregate([
            {
              $match: { role: "interviewer",profileRating:{$gte:parseInt(profilerating)},level:{$in:level.split(',')},minPrice:{$lte:parseInt(minprice)},active: true, topic: { $elemMatch: { title: topic } } }
            },
            {
              $project : {user:1,role:1,fullname:1,maxPrice:1,minPrice:1,avatar:1,level:1,bio:1,interviewed:1,profileRating:1,topic:1,total: { $multiply: ["$profileRating", "$interviewed"] } }
            },
            {
              $sort: { total: -1 }
            },
            {
               $skip:10*page
            },
            {
               $limit:10
            }
          ])
          const users = await Info.populate(user,{path:'user',select:'username'})
          // console.log(users,countUsers)
          return res.status(200).json({users,countUsers});
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
          const slots = await Slot.find({by:ID}) 
          return res.status(200).json(slots);
     }catch(err){
          next(err)
     }
}


export const getPublicRatings = async (req,res,next)=>{
     const {ID} = req.params
     try{
          const slots = await Slot.find({by:ID,rating:{$gt:0}}) 
          return res.status(200).json(slots);
     }catch(err){
          next(err)
     }
}


