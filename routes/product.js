import { Router } from 'express';

const express = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('Lista de todos los productos');
});
router.get('/id:', (req, res) => {
  const {id} = req.params;
  res.send('producto con id ${id}');
});

module.exports = router;
export default router;