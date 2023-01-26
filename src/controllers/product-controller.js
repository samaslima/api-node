const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = create = ('/', (req, res, next) => {
    const product = new Product(req.body);

    product.save()
        .then(x => {
            res.status(201).send({ message: 'Produto cadastrado com sucesso!'});
        })
        .catch(e => {
            res.status(400).send({ 
                message: 'Falha ao cadastrar o produto', 
                data: e
            });
        });
});

exports.put = update = ('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(201).send({
        id: id,
        item: req.body
    });
});

exports.delete = remove = ('/', (req, res, next) => {
    res.status(200).send(req.body);
});