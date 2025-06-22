class GetReviewsByProduct {
  constructor(reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  async execute(productId) {
    return await this.reviewRepository.findByProductId(productId);
  }
}

module.exports = GetReviewsByProduct;