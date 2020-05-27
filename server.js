const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env cars
dotenv.config({ path: './config/config.env' });

// Connect To Database
connectDB();
// Routes files
const bootcamps = require('./routes/bootcamps');

const app = express();


// Dev Loggin middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
// app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);


sdfsdfdsf

const PORT = process.env.PORT || 5000;

const server = app.listen((PORT), () => {
    console.log(`App listening on port ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server and exit process
    server.close(() => process.exit(1));
})