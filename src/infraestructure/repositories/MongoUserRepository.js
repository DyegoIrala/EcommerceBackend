const UserModel = require('../database/models/UserModel');

class MongoUserRepository {
  async findByUsername(username) {
    return UserModel.findOne({ username }).lean().exec();
  }

   /**
   * Crea y guarda un nuevo usuario en Mongo.
   * @param {{ username: string, password: string, roles?: string[] }} userData
   * @returns {Promise<Object>} documento creado en la base de datos
   * @throws {Error} si ocurre un error al guardar el usuario
   */
  async create({ username,email, password, roles = ['user'] }) {
    const user = new UserModel({ username, email, password, roles });
    return user.save();
  }

}

module.exports = MongoUserRepository;