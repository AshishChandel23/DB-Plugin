module.exports = class MyModel {
  constructor(model) {
    this.model = model;
  }
  async addCollection(obj) {
    return await this.model.create(obj);
    //OR
    // const collection = new this.model(obj);
    // return await collection.save();
  }
  async getById(id) {
    return await this.model.findById(id);
  }
  async getOne(field) {
    return await this.model.findOne(field);
  }
  async updateById(updatedObj, id) {
    return await this.model.findByIdAndUpdate(
      id,
      {
        $set: updatedObj,
      },
      { new: true }
    );
  }
  async updateOne(updatedObj, field) {
    return await this.model.findOneAndUpdate(
      field,
      {
        $set: updatedObj,
      },
      { new: true }
    );
  }
  async delete(field) {
    //delete and return the deleted object
    return await this.model.findOneByDelete(field);
  }
  async deleteOne(field) {
    // return 1 or 0 on basis of successfull deletion
    return await this.model.deleteOne(field);
  }
  async deleteMany(field) {
    // return numbers of object basis of successfull deletions
    return await this.model.deleteMany(field);
  }
  async deleteById(id) {
    //delete and return the deleted object
    return await this.model.findByIdAndDelete(id);
  }
  async all() {
    return await this.model.find({});
  }
  async all(field) {
    return await this.model.find(field);
  }
}
