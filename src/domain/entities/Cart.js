class Cart {
  constructor({ userId, items = [] }) {
    this.userId = userId;
    this.items = items; // [{ product, quantity }]
  }

  addItem(product, quantity) {
    const existing = this.items.find(item => item.product.toString() === product._id.toString());
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }
}

module.exports = Cart;