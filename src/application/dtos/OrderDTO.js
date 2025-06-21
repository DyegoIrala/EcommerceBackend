
class OrderDTO {
  constructor(order) {
    this.id = order.id;
    this.userId = order.userId;
    this.items = order.items.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
      subtotal: item.quantity * item.price
    }));
    this.totalAmount = order.totalAmount;
    this.status = order.status;
    this.createdAt = order.createdAt.toISOString();
  }
}

module.exports = OrderDTO;