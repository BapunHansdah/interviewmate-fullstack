import mongoose from 'mongoose'

const {model,Schema} = mongoose

const userSchema = new Schema({
	username:{
		type:String,
		required:true,
		unique:true,
		trim: true,
		max:30
	},
	email:{
		type:String,
		required:true,
		unique:true,
		trim: true,
	},
	password:{
		type:String,
		required:true,
		min:6
	},
	roles: {
    type: [String],
    default: ["user"]
  },
  active: {
    type: Boolean,
    default: false
  },
	avatar: {
    type: String,
    default:"https://www.nicepng.com/png/detail/301-3012856_account-user-profile-avatar-comments-free-image-user.png"
  }
},{timestamp:true})

const User = model("User", userSchema);

export default User