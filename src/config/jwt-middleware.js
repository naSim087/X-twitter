const JWT = require('passport-jwt')
const User= require('../models/user')
const jwtStrategy= JWT.Strategy;
const ExtractJwt= JWT.ExtractJwt;
const opt={
  jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:'twitter_secret',

}

const passportAuth=   (passport)=>{
  passport.use(new jwtStrategy(opt,async (jwt_payload,done)=>{
    const user= await User.findById(jwt_payload.id);
    if(!user){
      done(null,false)
    }
    else{
      done(null,user);
    }
  }))
}

module.exports={
  passportAuth
}