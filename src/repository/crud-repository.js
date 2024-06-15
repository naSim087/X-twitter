class crudRepository{
    constructor(model){
      this.model=model;
    }
    async create(data){
      try {
        const result = await this.model.create(data);
        return result;
      } catch (error) {
        throw error;
      }
    }
    async destroy(id){
      try {
        const result = await this.model.findByIdAndDelete(id);
        return result;
      } catch (error) {
        throw error;
      }
    }
    async get(id){
      try {
        const result = await this.model.findById(id);
        return result;
      } catch (error) {
        throw error;
      }
    }
    async getAll(id){
      try {
        const result = await this.model.find(id);
        return result;
      } catch (error) {
        throw error;
      }
    }
    async update(id,data){
      try {
        const result = await this.model.findByIdAndUpdate(id,data,{new:true});
        return result;
      } catch (error) {
        throw error;
      }
    }
};
module.exports=crudRepository