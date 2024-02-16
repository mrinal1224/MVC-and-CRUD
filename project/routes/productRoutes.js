const express = require("express");
const ProductModel = require("../models/product");
const {
  getAllProducts,
  deleteProduct,
  createProduct,
  UpdateProduct,
} = require("../controllers/productControllers");

const router = express.Router();

router.post("/", createProduct);

// get all products

router.get("/", getAllProducts);

// Update Product

router.put("/:id", UpdateProduct);

// Delete Product

router.delete("/:id", deleteProduct);

module.exports = router;
