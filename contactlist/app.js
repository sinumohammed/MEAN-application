// importing modules

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const config = require('./config');
const route = require('./router/route');
const app = express();

// connet to mongodb
mongoose.connect(config.db.url + config.db.collection);

// on connection
mongoose.connection.on('connected', () => {
    console.log('connected to db @27017');
})

mongoose.connection.on('error', (err) => {
    console.log('Error in connection', err);
})

// using middleware - cors
app.use(cors());

// morgan for log 
app.use(morgan('combined'));

// body-parserr
app.use(bodyparser.json());

// add routes
app.use('/api', route);

app.listen(config.port, () => {
    console.log(`Server started at port: ${config.port}`);
})