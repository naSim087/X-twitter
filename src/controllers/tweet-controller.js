const tweetService= require('../sevices/tweet-service')
const tweetservice=new tweetService();
const {upload}= require('../config/file-upload-s3-config')
const singleUploader=upload.single('image')
const create=async( req,res)=>{
  try {
    singleUploader(req,res,async function(err,data){
      if(err){
        return res.status(500).json({
          error:err,
        })
      }
      console.log(`image url is ${req.file}`);
      const payload= req.body;
      payload.image=req.file.location;
      const response=await tweetservice.create(payload);

      return res.status(200).json({
        success:true,
        message:"successfully created the tweet",
        data: response,
        err:{}
      })
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