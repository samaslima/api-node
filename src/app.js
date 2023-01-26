const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Models
const Product = require('./models/product-model');

// Rotas
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