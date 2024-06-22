const express= require('express');
const app=express();
const connect=require('./config/database')
const Comment= require('./models/comment')
const Tweet =require('./models/tweet')

const {passportAuth} = require('./config/jwt-middleware')
const tweetService= require('./sevices/tweet-service')

const {tweetRepository,HashtagRepository,UserRepository, TweetRepository}= require('./repository/index')
const bodyparser= require('body-parser');
const newrouter = require('./routes/index');

const LikeService= require('./sevices/like-service');
const passport = require('passport');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/api',newrouter);
app.use(passport.initialize());
passportAuth(passport);
// app.use('/api',apiroutes);
app.listen(3000,async ()=>{ 
  console.log("server started ")
  await connect();
   console.log("mongodb connected");

}

)