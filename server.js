const express = require('express');
const dotenv = require('dotenv');

// Load env cars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen((PORT), () => {
    console.log(`App listening on port ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});