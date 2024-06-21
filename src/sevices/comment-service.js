const {CommentRepository, TweetRepository}= require('../repository/index')

class commentService{
  constructor(){
    this.commentRepository=new CommentRepository();
    this.tweetRepository=new TweetRepository();
  }

  async createComment(modelId,modelType,userId,content){
    console.log("hello");
    console.log(modelId,modelType,userId,content);
      if(modelType=='Tweet'){
        var commentable= await this.tweetRepository.get(modelId);

      }
      else if(modelType=='Comment'){
        var commentable= await this.commentRepository.get(modelId);

      }
      else{
        throw {error:'unknown modeltype'};
      }
      
      const comment=await this.commentRepository.create({
        content:content,
        userId:userId,
        onModel:modelType,
        commentable:modelId,
        commets:[]
      })
      commentable.comments.push(comment);
      commentable.save();
      return comment;

  }
}
module.exports=commentService;