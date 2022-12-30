import bcrypt from 'bcryptjs'
import Topic from '../model/topicSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const addTopic= async (req,res,next)=>{
	const {id} = req.user
	const {title} = req.body

	if(!id){
		return res.status(401).json({msg:"Login Again !!"})
	}

	if(!title){
		return res.status(403).json({msg:"can't be empty"})
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

export const getTopics= async (req,res,next)=>{
	const {id} = req.user
	try{
		const topics = await Topic.find({by:id})
	    return res.status(200).json(topics);
	}catch(err){
		next(err)
	}
}

export const deleteTopic= async (req,res,next)=>{
	const {id} = req.user
	const {ID} = req.params

	try{
		const slots = await Topic.deleteOne({_id:ID,by:id})
	     return res.status(200).json({msg:"Topic deleted successfully"});
	}catch(err){
		next(err)
	}
}

