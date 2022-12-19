import mongoose from 'mongoose'

const {model,Schema} = mongoose

const topicSchema = new Schema({
	user:{
     type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'User'
   },
   topic:{
     type: [String]
   }

})

const topics = model("topics", topicSchema);

module.exports = topics;