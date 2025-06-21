const pool = require('../database/mysqlConnection');

class MySQLProductRepository {
    async create(product){
        

        const {name,price,description} = product;
        const [result] = await pool.query(
            'INSERT INTO products (name, price, description) VALUES (?, ?, ?)',
            [name, price, description]
        );
        return { id: result.insertId, ...product };
    }

    async getAll() {
        const [rows] = await pool.query('SELECT * FROM products');
        return rows;
    }

}

module.exports = MySQLProductRepository;