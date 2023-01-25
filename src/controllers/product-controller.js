exports.post = create = ('/', (req, res, next) => {
    res.status(201).send(req.body);
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