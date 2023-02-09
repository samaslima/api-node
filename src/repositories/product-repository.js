const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product.find({ active: true }, 'title price slug');
}

exports.getBySlug = (slug) => {
    return Product.findOne({ slug: slug, active: true }, 'title description price slug tags');
}

exports.getById = (id) => {
   return Product.findById(id);
}

exports.post = (data) => {
    const product = new Product(data);

    return product.save();
}

exports.put = (id, data) => {
    return Product
    .findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            slug: data.slug,
            price: data.price
        }
    });
}

exports.delete = (id) => {
    return Product.findByIdAndRemove(id);
}