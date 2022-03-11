const Product = require('../models/product');
const Cart = require('../models/cart');
const Order = require('../models/order');

exports.getfoodProducts = (req, res, next) => {
    const products = Product.findfood();
   
    res.render('index', { name: 'uncle Dishe', prods: products, path: '/', pageTitle: 'Home' });
};

exports.getBeverageProducts = (req, res, next) => {
    const products = Product.findbeverage();
   
    res.render('index', { name: 'uncle Dishe', prods: products, path: '/', pageTitle: 'Beverage' });
};

exports.getdessertProducts = (req, res, next) => {
    const products = Product.finddessert();
   
    res.render('index', { name: 'uncle Dishe', prods: products, path: '/', pageTitle: 'Dessert' });
};


exports.getProductDetail = (req, res, next) => {
    const products = Product.findById(req.params.prodId);
    res.render('product-detail', { prod: products[0], pageTitle: 'Product Detail', path: '/', name: 'uncle Dishe' });
}

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.id)[0];
    Cart.save(addedProduct);
 
}

exports.getCart = (req, res, next) => {
    res.render('cart', { cart: Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'uncle Dishe' })
}

exports.deleteInCart = (req, res, next) => {
    Cart.delete(req.body.prodId);
    res.redirect('/cart');
}

exports.addtoOrder =(req, res, next) => {
    const addedProduct = Cart.getCart();
    const total = Cart.gettotal();
    Order.save(addedProduct,total);
}

exports.getOrder = (req, res, next) => {
  
  
    res.render('order', { order: Order.getorder(), pageTitle: 'Orderdetail', path: '/order', name: 'uncle Dishe' })
}