const  User= require('../models/user');
const crudRepository=require('./crud-repository')

class UserRepository extends crudRepository{
  constructor(){
    super(User);
  }
  
  
  };
  module.exports=UserRepository;