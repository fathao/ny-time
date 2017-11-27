var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: String,
  url: String,
  publish: String,
});

module.exports = mongoose.model("Article", articleSchema);
