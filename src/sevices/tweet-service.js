const {TweetRepository,HashtagRepository}= require('../repository/index')
class tweetService{
  constructor(){
    this.tweetRepository= new TweetRepository();
    this.hashtagRepository= new HashtagRepository();
  }
  async create(data){
    console.log(data);
    const content=data.content;
    let tags= content.match(/#[a-zA-Z0-9_]+/g);
    console.log(tags);
   tags= tags.map((ele)=>{
      return ele.substring(1);
     
    })
    // console.log(tags);
    const tweet= await this.tweetRepository.create(data);
    
    let response= (await this.hashtagRepository.findByName(tags));
    console.log("thi si it")
    console.log(response);
    let titleOfPresentTag=response;
    titleOfPresentTag.map(tag=>{
      return tag.title
    });
    let newtag=tags.filter(tag=> !titleOfPresentTag.includes(tag))
   

    newtag= newtag.map((tag)=>{
      return {title:tag,

        tweets:[tweet.id]
      };
    })
    console.log(newtag);

    const newhashtag= await this.hashtagRepository.bulkCreate(newtag);

       response.forEach(tag=>{
        console.log(tag);
        tag.tweets.push(tweet.id);
        tag.save();
      })
    return tweet;
  }






}
module.exports= tweetService;