const mongoose = require('../mongoose');



const itemSchema = new mongoose.Schema({
    productId:{ type:String , required: true},
    quantity: { type: Number, required: true},
    price: { type: Number, required: true},
});

const orderSchema = new mongoose.Schema({
    userId:{ type:String, required: true},
    items: [itemSchema],
    totalAmount:{ type: Number, required: true},
    status: {type:String, default: 'pending'},
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Order', orderSchema);