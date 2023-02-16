const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const response = await Product.find({ 
        active: true 
    }, 'title price slug');

    return response;
}

exports.getBySlug = async(slug) => {
    const response = await Product.findOne({ 
        slug: slug, 
        active: true 
    }, 'title description price slug tags');

    return response;
}

exports.getById = async(id) => {
    const response = await Product.findById(id);

    return response;
}

exports.post = async(data) => {
    const product = new Product(data);

    await product.save();
}

exports.put = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                slug: data.slug,
                price: data.price
            }
        });
}

exports.delete = async(id) => {
    await Product.findByIdAndRemove(id);
}