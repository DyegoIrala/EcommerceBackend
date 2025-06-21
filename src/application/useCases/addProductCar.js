


module.exports = async function addProductToCart({ cartRepository, productRepository }) {
  return async function ({ userId, productId, quantity }) {
    const product = await productRepository.getById(productId);
    if (!product) throw new Error('Producto no encontrado');
    if (product.stock < quantity) throw new Error('Stock insuficiente');

    const cart = await cartRepository.getByUserId(userId);
    cart.addItem(product, quantity);

    await cartRepository.save(cart);
    return cart;
  };
};