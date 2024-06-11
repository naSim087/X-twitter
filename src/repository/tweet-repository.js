const Tweet =require('../models/tweet');

class tweetRepository{

async create(data){
  try {
    const tweet =await  Tweet.create(data);
    return tweet;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}
async updata(id,data){
  try {
    const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
    // this new: true will property will return the updated doecument
    // if you don't use it then we will get the old document but the document will get updated
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





};
module.exports=tweetRepository;
