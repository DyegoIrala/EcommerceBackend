const CartModel = require('../database/models/CartModel');
const Cart = require('../../domain/entities/Cart');

class MongoCartRepository {
  async findByUserId(userId) {
    const doc = await CartModel.findOne({ userId }).populate('items.product');
    return doc ? new Cart(doc) : null;
  }

  createEmptyCart(userId) {
    return new Cart({ userId });
  }

  async save(cart) {
    const doc = await CartModel.findOneAndUpdate(
      { userId: cart.userId },
      { userId: cart.userId, items: cart.items },
      { new: true, upsert: true }
    );
    return new Cart(doc);
  }
}

module.exports = MongoCartRepository;