const express= require('express');
const app=express();
const connect=require('./config/database')
const Comment= require('./models/comment')
const Tweet =require('./models/tweet')

const tweetService= require('./sevices/tweet-service')

const {tweetRepository,HashtagRepository,UserRepository, TweetRepository}= require('./repository/index')
const bodyparser= require('body-parser');
const newrouter = require('./routes/index');

const LikeService= require('./sevices/like-service')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',newrouter);
// app.use('/api',apiroutes);
app.listen(3000,async ()=>{ 
  console.log("server started ")
  await connect();
   console.log("mongodb connected");
//    const userRepo= new UserRepository();
//  const tweetRepo= new TweetRepository();
//   const tweets=await tweetRepo.getAll(0,10);
//   // console.log(tweets);
// //  const user = await userRepo.create({
// //     email:'nqqq1q@gmail.com',
// //     password:'qer12',
// //     name:'nqqqqqa'
// //   })
//   const users=await userRepo.getAll();
  
//   const likeservice = new LikeService();
//   await likeservice.toglelike(tweets[0].id,'Tweet',users[0].id);
  
  // let tweet=new tweetService();
  // const response =await tweet.create({content:'#RRRETURNS #EXCITED #AFTER'})
  

}

)