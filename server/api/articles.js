// const router = require('express').Router();
// const Article = require('../config/models/article');

// router.get('/articles', function(req, res) {
//   Article.find({}, function(err, articles){
//     res.json(articles);
//   });
// });

// router.post('/article', function(req, res) {
//   var article = new Article();
//   article.title = req.body.title;
//   article.url = req.body.url;
//   article.save(function(err, article) {
//     if (err) throw err;
//     res.json({ id: article._id });
//   });
// });

// router.delete('article/:id', function (req, res) {
//   Article.findById(req.params.id, function (err, article) {
//     if (err) throw err;
//     article.remove();
//   });
// });

// module.exports = router;
const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
  .get(articleController.searchAll)
  .post(articleController.create);


router.route("/:id")
  .delete(articleController.remove);

module.exports = router;
