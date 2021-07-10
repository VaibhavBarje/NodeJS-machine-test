const mongoose = require("mongoose");

const create_Product = new mongoose.Schema({
    categoryId: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    }
})




const Cre_product = new mongoose.model("ProductInfo", create_Product);
module.exports = Cre_product;







