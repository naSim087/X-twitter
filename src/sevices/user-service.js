const {UserRepository}= require('../repository/index')

class UserService{
  constructor(){
    this.userRepository= new UserRepository();
  }
  async signup(data){
    const user =await this.userRepository.create(data);
    return user;
  }
  async getUserByEmail(email){
    // console.log(email);
    const response = await this.userRepository.findBy(email);
    return response;
  }
}

module.exports= UserService