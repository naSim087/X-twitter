const express= require('express')
const {create,getTweet}= require('../../controllers/tweet-controller')
const toggleLike= require('../../controllers/like-controller');
const { createComment } = require('../../controllers/comment-controller');
const router=express.Router();
router.post('/tweets',create);
router.post('/likes',toggleLike);
router.post('/comment',createComment)
router.get('/tweets/:id',getTweet);
module.exports= {router};
