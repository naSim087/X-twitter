const Hashtag =require('../models/hashtag');

class HashtagRepository{

async create(data){
  try {
    const tag =await  Hashtag.create(data);
    return tag;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}
async bulkCreate(data){
  try {
    const tag =await  Hashtag.insertMany(data);
    return tag;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}


async get(id){
  try {
    const tag=await Hashtag.findById(id);
    return tag;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  } 
}

async destroy(id){
  try {
    const response= await Hashtag.findByIdAndRemove(id);
    return response;
  } catch (error) {
    console.log(`something went wrong at the repolayer`);
    throw error;
  }
}
async findByName(titleList){
  try {
    const tags=await Hashtag.find({
      title:titleList,
    });
    return tags;
  } catch (error) {
    throw error;
  }
}

// writing the query to paginate the going response





};
module.exports=HashtagRepository;
