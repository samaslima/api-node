const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');


exports.get = findAll = ('/', (req, res, next) => {
    repository.get()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

exports.getBySlug = findBySlug = ('/:slug', (req, res, next) => {
    repository.getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

exports.getById = findById = ('/:id', (req, res, next) => {
    repository.getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(e);
        })
})

exports.post = create = ('/', (req, res, next) => {
    repository.post(req.body)
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
    repository.put(req.params.id, req.body) 
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
    repository.delete(req.body.id)
        .then(x => {
            res.status(200).send({ message: 'Produto removido com sucesso!'});
        })
        .catch(e => {
            res.status(400).send({ 
                message: 'Falha ao remover o produto', 
                data: e
            });
        });
});