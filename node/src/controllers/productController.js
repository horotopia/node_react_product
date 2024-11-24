const product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const products = await product.find();
    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ message: "Missing product id" });
  }
  try {
    const productById = await product.findById(req.params.id);
    if (!productById) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(productById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  if (
    !req.body ||
    !req.body.name ||
    !req.body.type ||
    !req.body.price ||
    !req.body.rating ||
    !req.body.warranty_years ||
    typeof req.body.available !== "boolean"
  ) {
    return res.status(400).json({ message: "Missing product data" });
  }

  try {
    const newProduct = new product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  if (!req.params.id || !req.body) {
    return res.status(400).json({ message: "Missing product id or data" });
  }
  try {
    const productById = await product.findById(req.params.id);
    if (!productById) {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(204).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
