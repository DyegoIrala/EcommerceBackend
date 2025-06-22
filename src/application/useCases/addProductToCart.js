class AddProductToCart {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(userId, product, quantity) {
    let cart = await this.cartRepository.findByUserId(userId);
    if (!cart) {
      cart = this.cartRepository.createEmptyCart(userId);
    }
    cart.addItem(product, quantity);
    return await this.cartRepository.save(cart);
  }
}

module.exports = AddProductToCart;