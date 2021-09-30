// Import modules
const
    express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    compression = require('compression'),
    mongoSanitize = require('express-mongo-sanitize'),
    rateLimit = require('express-rate-limit'),
    xss = require('xss-clean'),

    categoryRouter = require('./routes/categoryRoutes'),
    serviceRouter = require('./routes/serviceRoutes'),
    packageRouter = require('./routes/packageRoutes'),
    userRouter = require('./routes/userRoutes'),
    productRouter = require('./routes/productRoutes'),
    bookingRouter = require('./routes/bookingRoutes'),
    AppError = require('./utils/appError'),
    errorController = require('./controllers/errorController');

// Main application
const app = express();

// Allow other domains to access the API
// app.use(cors({ origin: 'http://localhost:8000', credentials: true }));
app.use(cors({ origin: 'https://indiaohyes.netlify.app', credentials: true }));

// Set security HTTP headers
app.use(helmet());

// Limit requests from same IP
app.use('/api', rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
}));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Compress responses
app.use(compression());

// Parse JSON into req.body
app.use(express.json());

// Parse cookies into req.cookies
app.use(cookieParser());

// Get access to session storage at req.session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Serving static files
app.use(express.static('./public'));

// Log requests
process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

// Mounting routers
app.use('/api/categories', categoryRouter);
app.use('/api/services', serviceRouter);
app.use('/api/packages', packageRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/bookings', bookingRouter);

// 404
app.all('*', (req, res, next) => next(new AppError('Not found', 404)));

// Handle all errors
app.use(errorController);

// Export reference to main application
module.exports = app;