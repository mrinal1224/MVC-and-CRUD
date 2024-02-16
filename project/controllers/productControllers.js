const ProductModel = require('../models/product')

async function getAllProducts(req , res){
    let products = await ProductModel.find();
    res.send(products);
}


async function createProduct(req , res){
    const product = new ProductModel({
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
      });
    
      await product.save();
      res.send(product);
}

async function UpdateProduct(req , res){
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });
    res.send(updatedProduct)
}

async function deleteProduct(req , res){
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
}

module.exports={
    getAllProducts,
    createProduct,
    UpdateProduct,
    deleteProduct
}


