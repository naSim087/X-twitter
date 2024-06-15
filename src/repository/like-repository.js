const Like=require('../models/like') 
const crudRepository= require('./crud-repository');

class LikeRepository extends crudRepository{
constructor(){
  super(Like);
}

}
module.exports=LikeRepository;