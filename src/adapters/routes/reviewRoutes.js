const express = require('express');

module.exports = function(reviewController) {
  const router = express.Router();

  router.post('/', (req, res) => reviewController.create(req, res));
  router.get('/product/:productId', (req, res) => reviewController.getByProduct(req, res));

  return router;
};