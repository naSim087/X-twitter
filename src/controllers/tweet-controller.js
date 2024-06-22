const tweetService= require('../sevices/tweet-service')
const tweetservice=new tweetService();
const create=async( req,res)=>{
  try {
    console.log(req.body);
    const response=await tweetservice.create(req.body);
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
const getTweet = async (req,res)=>{
 
  try {
    const response=await tweetservice.get(req.params.id);
    return res.status(200).json({
      success:true,
      message:"successfully fetched the tweet",
      data: response,
      err:{}
    })
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"unsuccessfully attemp to fetch the tweet",
      data: {},

    })
  }
}
module.exports={
  create,
  getTweet
}