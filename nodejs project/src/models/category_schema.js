const mongoose = require("mongoose");

const create_category = new mongoose.Schema({
    cateName: {
        type: String,
        required: true
    },
    cateParent: {
        type: String,
        required: true
    }
})


const Cre_category = new mongoose.model("CategoryInfo", create_category);
module.exports = Cre_category;
