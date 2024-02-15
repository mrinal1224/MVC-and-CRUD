const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 8082;

const DBurl =
  "mongodb+srv://mrinal1224:3QaBm9lf1iZ5RUWt@cluster0.kxyq8el.mongodb.net/Ecommerce?retryWrites=true&w=majority";

mongoose
  .connect(DBurl)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("Connection Unsuccesful");
  });

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

// Add a product

app.post("/api/products", async (req, res) => {
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

app.get("/api/products", async (req, res) => {
  let products = await ProductModel.find();
  res.send(products);
});

// Update Product

app.put("/api/products/:id", async (req, res) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
  });
  res.send(updatedProduct);
});

// Delete Product

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

app.listen(PORT, () => {
  console.log("Server Started");
});
