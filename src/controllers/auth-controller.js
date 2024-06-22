const UserService= require('../sevices/user-service')
const userService= new UserService();
const signup= async (req,res)=>{
 try{
    const response= await userService.signup({
      email:req.body.email,
      password:req.body.password,
      name:req.body.name,
    })  
    return res.status(200).json({
      success:true,
      data:response,
      err:{},
      message:"successfully create the new user",
  
    })
  }
  catch(error){
    return res.status(500).json({
      success:false,
      data:{},
      err:error,
      message:"unsuccessfully ",
  
    })
  }
}
const login=async(req,res)=>{
  try{
    const user= await userService.getUserByEmail(req.body.email);
    console.log(user);
    if(!user){
      return res.status(401).json({
        message:"no user found",
        success:false,
        err:error
      })
    }
    if(!user.comparePassword(req.body.password)){
      return res.status(401).json({
        message:"incorrect password",
        success:false,
        
      })
    }
    const token = user.genJWT();
    return res.status(200).json({
      message:"logged in",
      success:true,
      err:{},
      token:token,
    })
  }
  catch(error){
    return res.status(401).json({
      message:" password",
      success:false,
      err:error
    })
  }
}
module.exports={
  signup,login
}