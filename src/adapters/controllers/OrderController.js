// adapters/controllers/OrderController.js
const CreateOrder = require('../../application/useCases/CreateOrder');
const OrderDTO = require('../../application/dtos/OrderDTO');

class OrderController {
  constructor(orderRepository) {
    this.createOrder = new CreateOrder(orderRepository);
    this.orderRepository = orderRepository;
  }

  async create(req, res) {
    try {
      const order = await this.createOrder.execute(req.body);
      res.status(201).json(new OrderDTO(order));
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const orders = await this.orderRepository.findAll();
      res.status(200).json(orders.map(order => new OrderDTO(order)));
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = OrderController;