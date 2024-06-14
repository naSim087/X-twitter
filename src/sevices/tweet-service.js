const {TweetRepository,HashtagRepository}= require('../repository/index')
class tweetService{
  constructor(){
    this.tweetRepository= new TweetRepository();
    this.hashtagRepository= new HashtagRepository();
  }
  async create(data){
   
    const content=data.content;
    let tags= content.match(/#[a-zA-Z0-9_]+/g);
    
   tags= tags.map((ele)=>{
      return ele.substring(1);
     
    }).map(tag => {
      return tag.toLowerCase()
    })
     console.log(tags);
    const tweet= await this.tweetRepository.create(data);
    
    let response= (await this.hashtagRepository.findByName(tags));
   
    let titleOfPresentTag=response;
    let res=[];
    titleOfPresentTag.forEach(tag=>{
      res.push(tag.title);
       tag.title
    });
    console.log(titleOfPresentTag);
    let newtag=tags.filter(tag=> !res.includes(tag))
   

    newtag= newtag.map((tag)=>{
      return {title:tag,

        tweets:[tweet.id]
      };
    })
    console.log(newtag);

    const newhashtag= await this.hashtagRepository.bulkCreate(newtag);

       response.forEach(tag=>{
        
        tag.tweets.push(tweet.id);
        tag.save();
      })


    return tweet;
  }






}
module.exports= tweetService;