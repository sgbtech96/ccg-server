const mongoose = require("mongoose");
const product = mongoose.model("product", {
    pid: String,
    name: String,
    description: String,
    markedPrice: Number,
    specialPrice: Number,
    discount: Number,
    imageURL: String,
});

module.exports = product;