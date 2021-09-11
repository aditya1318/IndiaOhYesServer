// Import modules
const
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),

    categoryRouter = require('./routes/categoryRoutes'),
    serviceRouter = require('./routes/serviceRoutes'),
    packageRouter = require('./routes/packageRoutes'),
    AppError = require('./utils/appError'),
    errorController = require('./controllers/errorController');

// Main application
const app = express();

// Allow other domains to access the API
app.use(cors({ origin: 'http://localhost:8000', credentials: true }));

// Parse JSON into req.body
app.use(express.json());

// Serving static files
app.use(express.static('./public'));

// Log requests
process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

// Mounting routers
app.use('/api/categories', categoryRouter);
app.use('/api/services', serviceRouter);
app.use('/api/packages', packageRouter);

// 404
app.all('*', (req, res, next) => next(new AppError('Not found', 404)));

// Handle all errors
app.use(errorController);

// Export reference to main application
module.exports = app;