import bcrypt from 'bcryptjs'
import User from '../model/userSchema.js'
import Info from '../model/infoSchema.js'
import mongoose from 'mongoose'
import createToken from '../utils/createToken.js'
import {sendEmailRegister} from '../utils/sendMail.js'
import jwt from 'jsonwebtoken'

export const register =async (req,res,next)=>{

	try{
		    // check field
	        const {username,email,password,role} = req.body

        	
        	//check fields
        	if(!username || !email || !password ){
		       return res.status(400).json({msg:"Please fill the input fields"})
	        }	

	        //check if email or username already exist
	        const USERNAME = await User.findOne({username})
	        const EMAIL = await User.findOne({email})

        	if(USERNAME){
		       return res.status(403).json({msg:"This username already exist"})
	        }

	        if(EMAIL){
		       return res.status(403).json({msg:"This email already exist"})
	        }

	        //check if password length is less than 6
	        if(password.length < 6){
	        	return res.status(400).json({msg:"password should not be less than 6"})
	        }

	        //encrypt password with bcryptjs
	        const salt = await bcrypt.genSalt(10)
	        const hashPassword = await bcrypt.hash(password,salt)

	         // create token
     		  const newUser = { username, email, password: hashPassword ,role };
      		const activation_token = createToken.activation(newUser);
      		const testUrl = "http://localhost:4000"
      		const liveUrl = "https://interviewmates.onrender.com"
      		const url = `${process.env.NODE_ENV === 'development' ?testUrl:liveUrl}/api/auth/activate/${activation_token}`;
          console.log(url)
          sendEmailRegister(email, url, "Verify your email");

            return res.status(200).json({ msg: "Welcome! Please check your email." });	

	}catch(err){
		return next(err)
	}
	
}


export const activate = async (req,res,next) =>{
	try{
			const {activation_token} = req.params
			const user = jwt.verify(activation_token,process.env.ACTIVATION_TOKEN)
			const {username,email,password,role} = user

			console.log(role)

			//check if email or username already exist
			const USERNAME = await User.findOne({username})
		    const EMAIL = await User.findOne({email})

		    if(USERNAME){
			   return res.status(403).json({msg:"This username already exist"})
			}

			if(EMAIL){
			   return res.status(403).json({msg:"This email already exist"})
			}

			//save user to database
		    const newUser = new User({
		    	username,email,password
		    })

		    await newUser.save((err,auth)=>{
		    	if(err){
		    		console.log(err)
		    	}else{
		    		const newInfo = new Info({
		    			user:auth._id,
		    			fullname:email.substring(0,email.indexOf('@')),
		    	    location:'',
		    	    bio:'',
		    	    website:'',
		    	    role:role,
		    	    topic:[],
		    	    profileRating:0,
		    	    attended:0,
		    	    interviewed:0,
		    	    level:''
		    		}) 
		    		newInfo.save(err=>{
		    			if(err){
		    				console.log(err)
		    			}else{
		                    return res.status(200).json({msg:"You have succesfully registered ! please sign in to your account"})
		    			}
		    		})
		    	}
		    });
		  }

		  catch(err){
		  	return next(err)
		  }
	
}


export const signin = async (req,res,next)=>{
	try{


		const {email,password} = req.body

		if(!email || !password){
		   return res.status(403).json({msg:"input fields cant be empty"})	
		}

		//check if the user exist in the datbase
		const user =await User.findOne({email}) 
		const info = await Info.findOne({user:user.id})

		if(!user){
			return res.status(400).json({msg:"This email is not registered !! Please sign up"})
		}

		//check if password is correct

		const isMatch =await bcrypt.compare(password,user.password)

		if(!isMatch){
			return res.status(400).json({msg:"This password is incorrect !!"})
		}

		//refresh token
		const rf_token =createToken.refresh({id:user.id,role:info.role})
		console.log(rf_token)

		return res.cookie("_apprftoken",rf_token,{httpOnly:true,path:"/api/auth/access",maxAge: 24 * 60 * 60 * 1000}).status(200).json({name:user.username,msg:"sign in success"})

	}
	catch(err){
		return next(err)
	}
}


export const access = async (req,res,next)=>{
	try{

		const rf_token = req.cookies._apprftoken
		//rf token
		if(!rf_token){
			return res.status(400).json({msg:"Please sign in"})
		}

		//validate
		jwt.verify(rf_token,process.env.REFRESH_TOKEN,(err,user)=>{
			if(err){
				return res.status(400).json({msg:"Please sign in again"})
			}
			const ac_token = createToken.access({ id: user.id ,role:user.role });
			return res.status(200).json({ ac_token });
		})

	}catch(err){
		return next(err)
	}
	
}

export const signout = async (req,res,next)=>{
    try {
      // clear cookie
      res.clearCookie("_apprftoken", { path: "/api/auth/access" });
      res.clearCookie("project_token")
      // success
      return res.status(200).json({ msg: "Signout success." });
    } catch (err) {
      return next(err)
    }
  }
