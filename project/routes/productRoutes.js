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
  
  app.get("/api/products/:id", async (req, res) => {
    let products = await ProductModel.find(req.params.id);
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
  