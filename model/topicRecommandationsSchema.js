import mongoose from 'mongoose'

const {model,Schema} = mongoose

const topicRecommandationsSchema = new Schema({
	by:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
   title:{
     type: String,
     required: true,
     max:30
   },
   approved:{
     type:Boolean,
     default:false
   }
})

const topicRecommandations = model("topicsRecommandations", topicRecommandationsSchema);

export default topicRecommandations