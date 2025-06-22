const ReviewModel = require('../database/models/ReviewModel');
const Review = require('../../domain/entities/Review');

class MongoReviewRepository {
  async save(reviewData) {
    const doc = new ReviewModel(reviewData);
    await doc.save();
    return new Review(doc.toObject());
  }

  async findByProductId(productId) {
    const docs = await ReviewModel.find({ productId }).sort({ createdAt: -1 });
    return docs.map(doc => new Review(doc.toObject()));
  }
}

module.exports = MongoReviewRepository;