const express= require('express')
const {create}= require('../../controllers/tweet-controller')
const toggleLike= require('../../controllers/like-controller')
const router=express.Router();
router.post('/tweets',create);
router.post('/likes',toggleLike);
module.exports= {router};