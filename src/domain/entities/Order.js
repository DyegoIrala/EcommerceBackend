class Order {
  constructor({ id, userId, items, totalAmount, status, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.items = items; // array de objetos { productId, quantity, price }
    this.totalAmount = totalAmount;
    this.status = status || 'pending'; // 'pending', 'paid', 'shipped', etc.
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Order;