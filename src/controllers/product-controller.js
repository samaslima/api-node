const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');


exports.get = findAll = ('/', async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha na requisição',
            data: error
        });
    }
})

exports.getBySlug = findBySlug = ('/:slug', async(req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha na requisição',
            data: error
        });
    }
})

exports.getById = findById = ('/:id', async(req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({
            message: 'Falha na requisição',
            data: error
        });
    }
})

exports.post = create = ('/', async(req, res, next) => {
    try {
        var data = await repository.post(req.body);
        res.status(201).send({ message: 'Produto cadastrado com sucesso!'});
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o produto', 
            data: error
        });
    }
});

exports.put = update = ('/:id', async(req, res, next) => {
    try {
        var data = await repository.put(req.params.id, req.body); 
        res.status(201).send({ message: 'Produto atualizado com sucesso!'});
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao atualizar o produto', 
            data: error
        });
    }
});

exports.delete = remove = ('/', async(req, res, next) => {
    try {
        var data = await repository.delete(req.body.id);
        res.status(200).send({ message: 'Produto removido com sucesso!'});
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao remover o produto', 
            data: error
        });
    }
});