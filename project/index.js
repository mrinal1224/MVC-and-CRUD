const mongoose = require("mongoose");
const express = require('express')

const app = express()

const PORT = 8082

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



app.listen(PORT , ()=>{
    console.log("Server Started")
})