
class StockRepository {
    async getAll() {
        throw new Error("Method not implemented.");
    }

    async getByProductId(productId) {
        throw new Error("Method not implemented.");
    }

    async increaseStock(productId, quantity) {
        throw new Error("Method not implemented.");
    }

    async decreaseStock(productId, quantity) {
        throw new Error("Method not implemented.");
    }

    async setStock(productId, quantity) {
        throw new Error("Method not implemented.");
    }
}

module.exports = StockRepository;