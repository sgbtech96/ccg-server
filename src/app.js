const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./db");
const product = require("./models/product");
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`server is up and running on port ${PORT}`);
})
app.get("/products", async (req, res) => {
  try {
    const allProducts = await product.find({});
    res.send(allProducts);
  } catch (e) {
    console.log(e);
    res.send("some error occured");
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.send("product added");
  } catch (e) {
    console.log(e);
    res.send("some error occured");
  }
});

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
