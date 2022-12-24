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
  }
},{timestamps:true})

const User = model("User", userSchema);

export default User