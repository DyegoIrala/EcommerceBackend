

class AddProductStock {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }

    /**
     * Add produts in the stock 
     * @param {string} productId
     * @param {number} quantity 
     * @returns {object}
     */
    async execute(productId, quantity) {
        if (!productId || typeof quantity !== 'number' || quantity <= 0) {
            throw new Error('Parámetros inválidos: productId o quantity');
        }

        return await this.stockRepository.increaseStock(productId, quantity);
    }
}

module.exports = AddProductStock;