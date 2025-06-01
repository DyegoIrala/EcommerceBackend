const CreateProduct = require('../../application/useCases/CreateProduct');
const ProductDTO = require('../../application/dtos/ProductDTO');

class ProductController {
    contructor(productRepository){
        this.createProduct = new CreateProduct(productRepository);
    }

    async create(req, res){
        try{
            const product = await this.createProduct.execute(req.body);
            res.status(201).json(new ProductDTO(product));
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating product', error: error.message });
        }
    }
}

module.exports = ProductController;