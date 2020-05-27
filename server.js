const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
// Routes files
const bootcamps = require('./routes/bootcamps');

// Load env cars
dotenv.config({ path: './config/config.env' });

const app = express();



app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);




const PORT = process.env.PORT || 5000;

app.listen((PORT), () => {
    console.log(`App listening on port ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});