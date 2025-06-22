class Review {
  constructor({ productId, userId, rating, comment, createdAt = new Date() }) {
    this.productId = productId; 
    this.userId = userId;       
    this.rating = rating;      
    this.comment = comment;     
    this.createdAt = createdAt; 
  }
}

module.exports = Review;