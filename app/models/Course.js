const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//slug gennerator
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    slug:{type:String,slug:"name",unique:true},
    video:String,
    level:String,
  },{timestamps:true});

  module.exports= mongoose.model("Course",Course);