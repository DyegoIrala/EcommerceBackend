class Product{
    constructor({name, description, price, stock, category, imageUrl}) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}

module.exports = Product; 

// De esta manera exportamos la clase Product para que pueda ser utilizada en otros archivos
// Ejemplo de uso:  const Product = require('./Product');
// const product = new Product('Laptop', 'High performance laptop', 1200, 10, 'Electronics', 'http://example.com/laptop.jpg');