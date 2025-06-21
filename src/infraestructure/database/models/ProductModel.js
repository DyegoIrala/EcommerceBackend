const mongoose = require('../mongoose');

//This is a Mongoose schema for a Product model.
// This is a kind of template that defines the structure of a product document in the MongoDB database.
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  imageUrl: { type: String, default: 'no-image.jpg' },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);