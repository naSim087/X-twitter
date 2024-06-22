const express= require('express')
const {create,getTweet}= require('../../controllers/tweet-controller')
const {signup,login}= require('../../controllers/auth-controller')
const toggleLike= require('../../controllers/like-controller');
const { createComment } = require('../../controllers/comment-controller');
const {authenticated}= require('../../config/authenticate')
const router=express.Router();
router.post('/tweets',authenticated,create);
router.post('/likes',authenticated,toggleLike);
router.post('/comment',authenticated,createComment)
router.get('/tweets/:id',authenticated,getTweet);
router.post('/signup', signup);
router.post('/login',login);
module.exports= {router};
