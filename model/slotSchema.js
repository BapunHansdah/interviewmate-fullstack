import mongoose from 'mongoose'

const {model,Schema} = mongoose

const slotSchema = new Schema({
	by:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
   },
	booked:{
		type:Boolean,
		default:false
	},
	bookedBy:{
		type:String,
		default:"",
		ref:'User'
	},
	rating:{
		type:Number,
		default:0,
		max:10
	},
	price:{
		type:Number,
		default:0
	},
	time:{
		type:String,
		default:"8:45 AM",
		required:true
	},
	date:{
		type:String,
		default:"26 Nov 2022",
		required:true
	},
	approved:{
		type:Boolean,
		default:false
	},
	completed:{
		type:Boolean,
		default:false
	}
},{timestamps:true})

const Slots = model("Slots", slotSchema);

export default Slots