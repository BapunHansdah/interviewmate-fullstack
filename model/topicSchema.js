import mongoose from 'mongoose'

const {model,Schema} = mongoose

const topicSchema = new Schema({
	by:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
   title:{
     type: String,
     required: true,
     max:30
   }
})

const topics = model("topics", topicSchema);

export default topics