const { Router } = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = Router();

router.get('/', /*authenticateToken,*/ getProducts);
router.get('/:id', /*authenticateToken,*/ getProductById);
router.post('/', /*authenticateToken,*/ createProduct);
router.put('/:id', /*authenticateToken,*/ updateProduct);
router.delete('/:id', /*authenticateToken,*/ deleteProduct);

module.exports = router;