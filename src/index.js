const express = require('express');
const config = require('./config');

// Product Repositories and Controllers
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const ProductController = require('./adapters/controllers/ProductController');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');


// Order Repositories and Controllers
const MongoOrderRepository = require('./infraestructure/repositories/MongoOrderRepository');
const OrderController = require('./adapters/controllers/OrderController');
// const MySQLOrderRepository = require('./infraestructure/repositories/MySQLOrderRepository');

//User Repositories and Controllers
const MongoUserRepository = require('./infraestructure/repositories/MongoUserRepository');
const PasswordHasher = require('./infraestructure/services/PasswordHasher');
const TokenGenerator = require('./infraestructure/services/TokenGenerator');
const SignIn = require('./application/useCases/SignIn');
const SignUp = require('./application/useCases/SignUp');


//Cupon Repositories and Controllers
const MongoCuponRepository = require('./infraestructure/repositories/MongoCuponRepository');
const CreateCupon = require('./application/useCases/CreateCupon');
const CuponController = require('./adapters/controllers/CuponController'); 

//Cart Repositories and Controllers
const MongoCartRepository = require('./infraestructure/repositories/MongoCartRepository');
const CartController = require('./adapters/controllers/CartController');
const cartRoutes = require('./adapters/routes/cartRoutes');
const cartRepo = new MongoCartRepository();
const cartController = new CartController(cartRepo);


//Review Repositores and Controllers
const MongoReviewRepository = require('./infraestructure/repositories/MongoReviewRepository');
const ReviewController = require('./adapters/controllers/ReviewController');
const reviewRoutes = require('./adapters/routes/reviewRoutes');
const reviewRepository = new MongoReviewRepository();
const reviewController = new ReviewController(reviewRepository);


const {verifyToken} = require('./adapters/middlewares/authJwt');
const productRoutes = require('./adapters/routes/productRoutes');
const orderRoutes = require('./adapters/routes/orderRoutes');
const authRoutes = require('./adapters/routes/authRoutes');
const userRoutes = require('./adapters/routes/userRoutes');
const cuponRoutes = require('./adapters/routes/cuponRoutes');





const app = express();
const port = config.port;  

// MiddleWwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Dependecies
const dbType = config.DB_TYPE || 'mongodb';
let productRepository;
let orderRepository;

console.log('>> DB_TYPE:', dbType);

if (dbType === 'mysql'){
    productRepository = new MySQLProductRepository();
    // orderRepository = new MySQLOrderRepository();
} else{
    productRepository = new MongoProductRepository();
    orderRepository = new MongoOrderRepository();
    
    
}

// --Setup Auth --
const userRepo       = new MongoUserRepository();
const passwordHasher = new PasswordHasher();
const tokenGen       = new TokenGenerator();
const signInUseCase  = new SignIn(userRepo, passwordHasher, tokenGen);
app.use('/api/v1/auth', authRoutes(signInUseCase));

// ——— SETUP SIGNUP ———
const signUpUseCase = new SignUp(userRepo, passwordHasher);
app.use('/api/v1/users',express.json(),userRoutes(signUpUseCase));


// Initialize ProductController with the appropriate repository
const productController = new ProductController(productRepository);
const orderController = new OrderController(orderRepository)
const cuponRepository = new MongoCuponRepository();
const createCuponUseCase = new CreateCupon(cuponRepository);
const cuponController = new CuponController(createCuponUseCase);






//Routes
app.use('/api/v1/products', verifyToken, productRoutes(productController));
app.use('/api/v1/orders', verifyToken, orderRoutes(orderController));
app.use('/api/v1/cupones', verifyToken, cuponRoutes(cuponController));
app.use('/api/v1/cart', cartRoutes(cartController));
app.use('/api/v1/reviews', reviewRoutes(reviewController));



//Error Handling

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({message:'Something went wrong on the server!'});
})

// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port http://localhost:${port}`);
});