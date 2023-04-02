const express = require('express');
const router = express.Router();



router.get('/products', async (req, res) => {
    return res.status(200).json({
        'message': 'read list of product with mongo db'
    })
});


router.get('/product', async (req, res) => {
    return res.status(200).json({
        'message': 'read products with id with mongo db'
    })
});


router.post('/addProduct', async (req, res) => {
    return res.status(200).json({
        'message': 'Create new product with mongo db'
    })
});


router.get('/deleteProduct', async (req, res) => {
    return res.status(200).json({
        'message': 'delete product with mongo db'
    })
});


module.exports = router;