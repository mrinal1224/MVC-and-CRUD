const express = require('express')
const ProductModel = require('../models/product')

const router = express.Router()




router.post("/", async (req, res) => {
    const product = new ProductModel({
      name: req.body.name,
      brand: req.body.brand,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
    });
  
    await product.save();
    res.send(product);
  });
  
  // get all products
  
  router.get("/", async (req, res) => {
    let products = await ProductModel.find();
    res.send(products);
  });
  
  router.get("/:id", async (req, res) => {
    let products = await ProductModel.find(req.params.id);
    res.send(products);
  });
  
  // Update Product
  
  router.put("/:id", async (req, res) => {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.send(updatedProduct);
  });
  
  // Delete Product
  
  router.delete("/:id", async (req, res) => {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  });
  
  module.exports = router