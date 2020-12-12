const mongoose = require("mongoose");

const newUsers = new mongoose.Schema({
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

// now need to create a collection

const User = new mongoose.model("User",newUsers);

module.exports = User;