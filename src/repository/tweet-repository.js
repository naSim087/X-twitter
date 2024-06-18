const Tweet =require('../models/tweet');
const crudRepository= require('./crud-repository')
class TweetRepository extends crudRepository{

  constructor(){
    super(Tweet);
  }


async getWithComment(id){
  try {
    const tweet=await Tweet.findById(id).populate('comments');
    // Tweet.findById(id).populate({path:'comments'}).lean can be used when we don't want the 
    // object to me moongose using the lean we will get the javascript object
    
    return tweet;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}


// writing the query to paginate the going response
async getAll(offset,limit){
  try {
    const tweet= await Tweet.find().skip(offset).limit(limit);
    return tweet;
  } catch (error) {
    throw error;
  }
}

async find(id){
  try {
    let result = await this.model.findById(id).populate({path:'likes'});
    return result;
  } catch (error) {
    throw error;
  }
}


};
module.exports=TweetRepository;
