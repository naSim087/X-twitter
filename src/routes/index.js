const express= require('express')
const {router}= require('./v1/index')
const newrouter= express.Router();
newrouter.use('/v1',router);

module.exports=newrouter;