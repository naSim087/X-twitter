const {LikeRepository,TweetRepository}= require('../repository/index.js');

class LikeService{
  constructor(){
    this.likeRepository= new LikeRepository();
    this.tweetRepository= new TweetRepository();
  }
  async toglelike(modelId,modelType,userId){
    if(modelType=='Tweet'){
      var likeable=await this.tweetRepository.find(modelId); 
      // console.log(likeable);
    }
    else if(modelType=='Comment'){


    }
    else{
        throw {error:'Unknow model type'};
    }
    const exists=await this.likeRepository.findByUserAndLikeable({
      user:userId,
      onModel:modelType,
      likeable:modelId
    })
    // console.log(exists);
    if(exists){
      likeable.likes.pull(exists.id);
    
      await likeable.save();
      await this.likeRepository.destroy(exists.id);
    //  await exists.remove();
      var isRemoved=true;

    }
    else{
      const newlike= await this.likeRepository.create({
        user:userId,
        onModel:modelType,
        likeable:modelId,
      })
      console.log(newlike);
      await likeable.likes.push(newlike);
      await likeable.save();
      var isRemoved=false;
    }
    return isRemoved;
  }

}

module.exports=LikeService;