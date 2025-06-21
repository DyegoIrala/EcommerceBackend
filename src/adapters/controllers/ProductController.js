const CreateProduct = require('../../application/useCases/CreateProduct');
const ProductDTO = require('../../application/dtos/ProductDTO');

// We control the flow of data betwen the aplication layer and the HTTP layer
// ProductController.js

class ProductController {
  constructor(productRepository) {
    this.createProduct = new CreateProduct(productRepository);
    this.productRepository = productRepository;
  }

  async create(req, res) {
    try {
      console.log('>>> Request body:', req.body);
      const product = await this.createProduct.execute(req.body);
      res.status(201).json(new ProductDTO(product));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const products = await this.productRepository.getAll();
      res.status(200).json(products);
    } catch (err) {
    console.error('Error retrieving products:', err);
      res.status(500).json({ message: 'Error retrieving products',error: err.message });
    }
  }

}

module.exports = ProductController;