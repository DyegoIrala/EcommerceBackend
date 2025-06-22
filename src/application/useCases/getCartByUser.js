class GetCartByUser {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(userId) {
    return await this.cartRepository.findByUserId(userId);
  }
}

module.exports = GetCartByUser;