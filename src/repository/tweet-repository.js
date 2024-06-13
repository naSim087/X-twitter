const Tweet =require('../models/tweet');

class TweetRepository{

async create(data){
  try {
    const tweet =await  Tweet.create(data);
    return tweet;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}

async get(id){
  try {
    const tweet=await Tweet.findById(id);
    return tweet;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}
async getWithComment(id){
  try {
    const tweet=await Tweet.findById(id).populate({path:'comments'});
    // Tweet.findById(id).populate({path:'comments'}).lean can be used when we don't want the 
    // object to me moongose using the lean we will get the javascript object
    
    return tweet;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}
async destroy(id){
  try {
    const tweet= await Tweet.findByIdAndRemove(id);
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




};
module.exports=TweetRepository;
