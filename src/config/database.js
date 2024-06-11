const mongose= require('mongoose');

const connect=async ()=>{
 await mongose.connect('mongodb+srv://Cluster99030:b1ZicV5pTGF9@cluster99030.ti6t5ae.mongodb.net/twitter_Dev')


}
module.exports=connect;