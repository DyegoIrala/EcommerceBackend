const express =require('express');
const isAdmin = require('../middlewares/isAdmin');


module.exports = (productController) => {
    const router = express.Router();
    router.get('/', (req,res)=>productController.getAll(req,res));
    router.post('/',isAdmin, (req,res)=>productController.create(req,res));
    return router;
};