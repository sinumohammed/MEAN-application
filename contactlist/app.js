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
mongoose.connect(config.db.url);

// var db = mongoose.connection;
// db.on('connected', console.error.bind(console, 'connected to db:'));
// db.on('error', console.error.bind(console, 'connection error:'));

// on connection
mongoose.connection.on('connected', () => {
    console.log(`connected to db:${config.db.url}`);
})
// on error
mongoose.connection.on('error', (err) => {
    console.log('Error in connection', err);
})

// using middleware - cors
app.use(cors());

// morgan for log 
app.use(morgan('combined'));

// body-parserr
app.use(bodyparser.json());

//static files - serving build front end app , that are copied into public folder from dist client folder
app.use(express.static(path.join(__dirname,'public')));

// add routes
app.use('/api', route);

app.listen(config.port, () => {
    console.log(`Server started at port: ${config.port}`);
})