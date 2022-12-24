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
	avatar: {
        type: String,
        default:"https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"
  }
})

const Info = model("Info", infoSchema);
export default Info