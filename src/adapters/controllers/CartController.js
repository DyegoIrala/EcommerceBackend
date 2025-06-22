class CartController {
  constructor(cartRepository) {
    this.addProductToCart = new (require('../../application/useCases/addProductToCart'))(cartRepository);
    this.getCartByUser = new (require('../../application/useCases/getCartByUser'))(cartRepository);
  }

  async addProduct(req, res) {
    try {
      const { product, quantity } = req.body;

      const userId = req.userId; // ✅ JWT middleware lo define

      const result = await this.addProductToCart.execute(userId, product, quantity);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getCart(req, res) {
    try {
      const userId = req.userId; 

      const cart = await this.getCartByUser.execute(userId);
      res.json(cart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = CartController;