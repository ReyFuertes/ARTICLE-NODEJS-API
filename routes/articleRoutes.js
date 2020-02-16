const express = require('express');
const router = express.Router();
const { deleteArticle, updateArticle, getArticles, createArticle, getArticle } = require('../controllers/articleController');
router
  .route('/')
  .get(getArticles)
  .post(createArticle);
router
  .route('/:id')
  .get(getArticle)
  .patch(updateArticle)
  .delete(deleteArticle)
module.exports = router;