const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getfoodProducts);

router.get('/products/:prodId', shopController.getProductDetail);

router.get('/beverage', shopController.getBeverageProducts)

router.get('/dessert', shopController.getdessertProducts)

router.post('/add-to-cart', shopController.addToCart);

router.get('/cart', shopController.getCart);

router.get('/order', shopController.getOrder);

router.post('/add-to-order',shopController.addtoOrder)

router.post('/delete-cart', shopController.deleteInCart);

router.get('/error-demo', (req, res, next) => {
    throw new Error('This is to test Error handling in express');
});

module.exports = router;