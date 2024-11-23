const { Router } = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = Router();

router.get('/', /*authenticateToken,*/ getProducts);
router.get('/:id', /*authenticateToken,*/ getProductById);
router.post('/create', /*authenticateToken,*/ createProduct);
router.put('/update/:id', /*authenticateToken,*/ updateProduct);
router.delete('/delete/:id', /*authenticateToken,*/ deleteProduct);

module.exports = router;