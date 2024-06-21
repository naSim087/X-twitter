const commentService= require('../sevices/comment-service')
const CommentService=new commentService();
const createComment=async( req,res)=>{
  try {
    console.log(req.query.modelId,req.query.modelType,req.body.userId,req.body.Content)
    const response=await CommentService.createComment(req.query.modelId,req.query.modelType,req.body.userId,req.body.Content);

    return res.status(200).json({
      success:true,
      message:"successfully created the Comment",
      data: response,
      err:{}
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"unsuccessfully",
      data: {},
      err:error,

    })
  }
}

module.exports={
  createComment
}