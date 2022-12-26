import bcrypt from 'bcryptjs'
import Topic from '../model/topicRecommandationsSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const addTopicTopicRecommandation= async (req,res,next)=>{
	const {id} = req.user
	const {title} = req.body

	if(!title){
		return res.status(403).json("can't be empty")
	}


	try{
		 const newTopic = await new Topic({
		 	title,by:id
		 })
		 await newTopic.save()
	     return res.status(200).json(newTopic);
	}catch(err){
		next(err)
	}
}

export const getTopicsTopicRecommandations= async (req,res,next)=>{
	const {id} = req.user
	try{
		const topics = await Topic.find({by:id})
	    return res.status(200).json(topics);
	}catch(err){
		next(err)
	}
}

export const deleteTopicTopicRecommandation= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params

	try{
		const slots = await Topic.deleteOne({_id:ID,by:id})
	     return res.status(200).json(slots);
	}catch(err){
		next(err)
	}
}

