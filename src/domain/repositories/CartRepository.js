class CartRepository{
    async getCart(userId) {
        throw new Error("Method not implemented.");
    };
    async addItemToCart(userId, item) {
        throw new Error("Method not implemented.");
    };
    async createCart(userId) {
        throw new Error("Method not implemented.");
    }
    async updateCart(userId, cart) {
        throw new Error("Method not implemented.");
    }
    async deleteCart(userId) {
        throw new Error("Method not implemented.");
    }
     
    async removeItemFromCart(userId, itemId) {
        throw new Error("Method not implemented.");
    };
    async clearCart(userId) {
        throw new Error("Method not implemented.");
    };
}

module.exports = CartRepository;
// De esta manera exportamos la clase CartRepository para que pueda ser utilizada en otros archivos
