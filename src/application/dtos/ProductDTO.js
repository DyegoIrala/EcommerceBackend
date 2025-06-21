// DTO means Data Transfer Object, is a object that carries data between processes.
// src/application/dtos/ProductDTO.js

class ProductDTO{
    constructor(product){
        this.id = product._id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.stock = product.stock;
        this.category = product.category;
        this.imageUrl = product.imageUrl;
    }
}

module.exports = ProductDTO;   