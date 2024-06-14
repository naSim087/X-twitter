const tweetService= require('../sevices/tweet-service')
const tweetservice=new tweetService();
const create=async( req,res)=>{
  try {
    const response=tweetservice.create(req.body);
    return res.status(200).json({
      success:true,
      message:"successfully created the tweet",
      data: response,
      err:{}
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"unsuccessfully",
      data: {},

    })
  }
}
module.exports={
  create
}