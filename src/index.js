const express= require('express');
const app=express();
const connect=require('./config/database')
const Comment= require('./models/comment')
const Tweet =require('./models/tweet')
const tweetRepository=require('./repository/tweet-repository')
app.listen(3000,async ()=>{ 
  console.log("server started ")
  try{
  await connect();
  console.log("mongodb connected");
  const tweetRepo= new tweetRepository();
  const tweet=await tweetRepo.create({content:'my tweet'});
  // tweet.comments.push({content:'first comment'});
  // await tweet.save();

  // const tweet=await tweetRepo.create({content:'Tweet with content schema'});
  // console.log(tweet);

  // const comment= await Comment.create({content:'new comment'});
  // tweet.comments.push(comment);
  // await tweet.save();
  // const tweet= await tweetRepo.getWithComment('6667f581660ddc42925f4aa5')
  console.log(tweet);
  // const tweet=await Tweet.create({
  //   content:'ds tweet',
  //   userEmail:'A@b.com',
  // })
}
  catch(error){
    console.log(error);

    throw error;
  }

})
