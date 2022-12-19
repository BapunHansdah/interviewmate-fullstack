import mongoose from 'mongoose'

const {model,Schema} = mongoose

const infoSchema = new Schema({
	user:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
	image:{
		type:String,
		required:true
		max:30
	},
	location:{
		type:String,
		max:20
	},
	bio:{
		type:String,
		required:true,
		max:120
	}
})

const Info = model("Info", infoSchema);

module.exports = Info;