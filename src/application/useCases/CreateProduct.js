const Product = require('../../domain/entities/Product'); //Trae la entidad Product

class CreateProduct {
    constructor(productRepository){
        this.productRepository = productRepository;
    }

    async execute(productData) {
        const product = new Product(productData);
        return await this.productRepository.create(product);
}
}

module.exports = CreateProduct;  