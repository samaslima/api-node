const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./routes/index');
const product = require('./routes/product');

const app = express();

// Conexão com o banco
mongoose.connect('mongodb://localhost/productdb');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/products', product);

module.exports = app;