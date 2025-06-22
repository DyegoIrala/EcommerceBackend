const express = require('express');

module.exports = function(cartController) {
  const router = express.Router();

  router.post('/add', (req, res) => cartController.addProduct(req, res));
  router.get('/', (req, res) => cartController.getCart(req, res));

  return router;
};