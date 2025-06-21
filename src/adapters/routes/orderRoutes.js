const express =require('express');


module.exports = (orderController) => {
    const router = express.Router();
    router.get('/', (req,res)=>orderController.getAll(req,res));
    router.post('/', (req,res)=>orderController.create(req,res));
    return router;
};
