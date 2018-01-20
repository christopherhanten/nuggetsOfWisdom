var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create new schema, song Schema S3S1 TC
  //keys used to define properties and their schema types
var UserNuggetSchema = new Schema({
  userNugget: String,
  });

var Nuggets = mongoose.model('UserNuggets', UserNuggetSchema);

module.exports = Nugget;
