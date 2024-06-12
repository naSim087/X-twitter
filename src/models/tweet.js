const mongoose=require('mongoose');
const tweetSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
  },
  hashtags:[
    {
      type:mongoose.Schema.ObjectId,
      ref:'Hashtag'
    }
  ]
},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet
