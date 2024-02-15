const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = 8082;



// Add a product





app.listen(PORT, () => {
  console.log("Server Started");
});
