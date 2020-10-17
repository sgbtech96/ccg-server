const mongoose = require("mongoose");
const product = mongoose.model("product", {
    name: String,
    description: String,
    imageURL: String,
});

module.exports = product;