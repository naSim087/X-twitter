const LikeService= require('../sevices/like-service')
const likeService= new LikeService();
const toggleLike=async(req,res)=>{
  try{
   
    const respose= await likeService.toglelike(req.query.modelId,req.query.modelType,req.body.userId);
    return res.status(200).json({
      data:respose,
      message:"successfully toggle the like",
      err:{},
      success:true,
    })
  }
  catch(error){
    res.status(500).json({
      
      success:false,
      data:{},
      message:'something went wrong',
      err:error
    })
  }
}
module.exports= toggleLike;