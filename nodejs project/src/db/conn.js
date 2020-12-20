const mongoose = require("mongoose");
const NewUser = require("../models/Product_Schema");

mongoose.connect("mongodb://localhost:27017/ProductItems", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

