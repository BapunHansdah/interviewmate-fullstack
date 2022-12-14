import bcrypt from 'bcryptjs'
import Info from '../model/infoSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const userInfo = async (req,res,next)=>{
	const {id} = req.user
	try{
		const user = await Info.findOne({user:id}).populate({path:'user',select:'email username roles active'})
	     return res.status(200).json(user);
	}catch(err){
		next(err)
	}
}

export const editUser =async (req,res,next)=>{
     const {id} =req.user
     const {fullname,location,bio,website,level} =req.body
     try{
     	const user = await Info.findOne({user:id})
     	if(!user){
     		return res.status(404).json("user not found")
     	}
     	const updateUser = await Info.findOneAndUpdate({user:id},{fullname,location,bio,website,level},{new:true})

          return res.status(200).json({msg:"saved Successfully"});
     }catch(err){
     	next(err)
     }
}


export const activeUser =async (req,res,next)=>{
     const {id} =req.user
     const {active} =req.body
     try{
     	const user = await Info.findOne({user:id})
     	if(!user){
     		return res.status(404).json("user not found")
     	}
     	const updateUser = await Info.findOneAndUpdate({user:id},{active},{new:true})

          return res.status(200).json(updateUser);
     }catch(err){
     	next(err)
     }
}

export const addTopic =async (req,res,next)=>{
     const {id} =req.user
     const {title} =req.body
     try{
     	const user = await Info.findOne({user:id})
     	if(!user){
     		return res.status(404).json("user not found")
     	}
     	const updateUser = await Info.findOneAndUpdate({user:id},{$push:{"topic":[{title}]}},{new:true})

          return res.status(200).json(updateUser);
     }catch(err){
     	next(err)
     }
}

export const deleteTopic =async (req,res,next)=>{
     const {id} =req.user
     const {ID} =req.params
     try{
     	const user = await Info.findOne({user:id})
     	if(!user){
     		return res.status(404).json("user not found")
     	}
     	const updateUser = await Info.findOneAndUpdate({user:id},{$pull:{"topic":{"_id":ID}}},{new:true})

          return res.status(200).json({msg:"topic deleted successfully"});
     }catch(err){
     	next(err)
     }
}

