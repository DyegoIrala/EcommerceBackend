class CreateReview {
  constructor(reviewRepository) {
    this.reviewRepository = reviewRepository;
  }

  async execute(reviewData) {
    
    if (!reviewData.rating || reviewData.rating < 1 || reviewData.rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }
    if (!reviewData.comment || reviewData.comment.trim() === '') {
      throw new Error('Comment is required');
    }
    return await this.reviewRepository.save(reviewData);
  }
}

module.exports = CreateReview;