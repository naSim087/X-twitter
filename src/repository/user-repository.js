const  User= require('../models/user');
const crudRepository=require('./crud-repository')

class UserRepository extends crudRepository{
  constructor(){
    super(User);
  }
  async findBy(data){
    try{
      // console.log(data);
      const response = await User.findOne({email:data});
      // console.log(response);
      return response;
    }
    catch(error){
      console.log(error);
      throw error;
    }
  }
  
  };
  module.exports=UserRepository;