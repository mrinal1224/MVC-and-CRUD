const express = require("express");

const { connectMongoDb } = require("./connection");
const productRoutes = require("./routes/productRoutes");
const PORT = 8082;

const DBurl =
  "mongodb+srv://mrinal1224:3QaBm9lf1iZ5RUWt@cluster0.kxyq8el.mongodb.net/Ecommerce?retryWrites=true&w=majority";
connectMongoDb(DBurl);

const app = express();
app.use(express.json());

app.use("/api/products/", productRoutes);

// Add a product

app.listen(PORT, () => {
  console.log("Server Started");
});
