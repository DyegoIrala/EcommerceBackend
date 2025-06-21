const OrderRepository = require('../../domain/repositories/OrderRepository');
const OrderModel = require('../database/models/OrderModel');
const Order = require('../../domain/entities/Order');

class MongoOrderRepository extends OrderRepository {
    async create(orderData){
        const orderDoc = new OrderModel(orderData);
        const saved = await orderDoc.save();
        return new Order({ ...saved.toObject(), id: saved._id });
    }
    async findById(id) {
        const doc = await OrderModel.findById(id);
        return doc? new Order({...doc.toObject(), id: doc._id }) : null;
    }

    async fidByUserId(userId) {
        const docs = await OrderModel.find({ userId});
        return docs.map(doc => new Order({ ...doc.toObject(), id: doc._id }));
    }

    async updateStatus(id, status){
        const updated = await OrderModel.findByIdAndUpdate(id, { status }, { new: true });
        return updated ? new Order({ ...updated.toObject(), id: updated._id }) : null;
    }

    async findAll() {
  const docs = await OrderModel.find();
  return docs.map(doc => new Order({ ...doc.toObject(), id: doc._id }));
}
}

module.exports = MongoOrderRepository;