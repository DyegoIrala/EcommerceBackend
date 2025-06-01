import express from 'express';
import productRouter from './routes/product.js'; // Importa el router de productos



const app = express();
const port = 3000;
const productRouter = express.Router();
app.use(express.json());
app.use('/products', productRouter); // Usa el router de productos en la ruta /products

app.get('/', (req, res) => {
  res.send('¡Bienvenidos al Ecommerce!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});