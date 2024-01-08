const SqlModel = require('./lib/sql/MyModel.js');
const MongoModel = require('./lib/mongo/MyModel.js');

const SqlInstance = (model) => {
  return new SqlModel(model);
};

const MongoInstance = (model) => {
  return new MongoModel(model);
};

module.exports = {SqlInstance,MongoInstance};
