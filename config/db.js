import mongoose from 'mongoose'
import Info from '../model/infoSchema.js'


export const connectDB = async ()=>{

	try{
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Database connected")
	}
	catch(err){
      console.log(err)
      process.exit(1)
	}

}
       // await Info.updateMany({}, {$set: {minPrice:0,maxPrice:0}})
