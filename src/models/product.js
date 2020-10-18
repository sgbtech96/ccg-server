const mongoose = require("mongoose");
const product = mongoose.model("product", {
    name: String,
    description: String,
    markedPrice: Number,
    specialPrice: Number,
    imageURL: String,
});

module.exports = product;