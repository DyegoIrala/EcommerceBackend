

class ReviewController {
  constructor(reviewRepository) {
    this.createReview = new (require('../../application/useCases/CreateReview'))(reviewRepository);
    this.getReviewsByProduct = new (require('../../application/useCases/GetReviewsByProduct'))(reviewRepository);
  }

  async create(req, res) {
    try {
      const review = await this.createReview.execute(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getByProduct(req, res) {
    try {
      const productId = req.params.productId;
      const reviews = await this.getReviewsByProduct.execute(productId);
      res.json(reviews);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ReviewController;