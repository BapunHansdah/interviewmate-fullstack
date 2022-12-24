import jwt from 'jsonwebtoken'

export default function auth(req,res,next){
	try{
		const token = req.header("Authorization")
       
		if(!token) {

			return res.status(400).json({msg:"Authorization failed"})
		}
	   const verifyToken=jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
			if(err) {

			       return res.status(400).json({msg:"Authorization failed (unverified)"})
			}
			req.user = user
			// console.log(token)
			return next()
		})
	   return verifyToken
	}catch(err){
		next(err)
	}
}