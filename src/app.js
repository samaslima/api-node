const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const product = require('./routes/product');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlenconded({ extended: false }));

app.use('/', index);
app.use('/products', product);

module.exports = app;