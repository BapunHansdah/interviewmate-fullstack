import mongoose from 'mongoose'

const {model,Schema} = mongoose

const infoSchema = new Schema({
	user:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
	fullname:{
		type:String,
		required:true,
		max:30
	},
	location:{
		type:String,
		max:20
	},
	bio:{
		type:String,
		max:120
	},
	website:{
		type:String
	},
	role:{
		type:String,
		default:"user"
	},
	minPrice:{
		type:Number,
		default:0
	},
	maxPrice:{
		type:Number,
		default:0
	},
	active:{
        type:Boolean,
        default:false
	},
	profileRating:{
		type:Number,
		default:0
	},
	interviewed:{
		type:Number,
		default:0
	},
	attended:{
		type:Number,
		default:0
	},
	level:{
		type:String,
		default:"Beginner"
	},
	topic:[
	  {
	  	title:{
	  		type:String
	  	}
	  }
	],
	avatar: {
        type: String,
        default:"https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"
  }
})

const Info = model("Info", infoSchema);
export default Info