const mongoose = require('mongoose');


//mongoose schema for user

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: String,
    },
    quantity_available: {
        type: String,
    },
    posted_time: {
        type: String,
        default: Date.now()
    },
})




const Product = mongoose.model('Product', productSchema);

module.exports = Product;