var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create new schema, song Schema S3S1 TC
  //keys used to define properties and their schema types
var NuggetSchema = new Schema({
  date: String,
  trackNumber: String
});

var Nuggets = mongoose.model('Nugget', NuggetSchema);

module.exports = Nugget;
