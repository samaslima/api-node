const mongoose = require('mongoose');
const Product = mongoose.model('Product');


exports.get = findAll = ('/', (req, res, next) => {
    Product.find({ active: true }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

exports.getBySlug = findBySlug = ('/:slug', (req, res, next) => {
    Product.findOne({ slug: req.params.slug, active: true }, 'title description price slug tags')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

exports.getById = findById = ('/:id', (req, res, next) => {
    Product.findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

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
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                slug: req.body.slug,
                price: req.body.price
            }
        })
        .then(x => {
            res.status(201).send({ message: 'Produto atualizado com sucesso!'});
        })
        .catch(e => {
            res.status(400).send({ 
                message: 'Falha ao atualizar o produto', 
                data: e
            });
        });
});

exports.delete = remove = ('/', (req, res, next) => {
    res.status(200).send(req.body);
});