const express= require('express');
const app=express();
const connect=require('./config/database')
const Comment= require('./models/comment')
const Tweet =require('./models/tweet')

const tweetService= require('./sevices/tweet-service')
const {tweetRepository}=require('./repository/tweet-repository')
const {HashtagRepository}= require('./repository/index')
const bodyparser= require('body-parser');
const newrouter = require('./routes/index');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',newrouter);
// app.use('/api',apiroutes);
app.listen(3000,async ()=>{ 
  console.log("server started ")

  await connect();
  console.log("mongodb connected");
  // let tweet=new tweetService();
  // const response =await tweet.create({content:'#RRRETURNS #EXCITED #AFTER'})
  
}

)