const express = require('express');

const router = express.Router();
const Product = require('../Models/Product');
const auth = require('../Middlewae/Auth');

router.post('/api/add_product',auth,async (req,res)=>{
    try {
        const product = new Product(req.body);
        product.user_id = req.user._id;
        await product.save();
        res.status(200).json({'message':"success"})

    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get('/api/get_all_products',async (req,res)=>{
    try {
        Product.find().then(value=>{
            res.status(200).json(value);
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

router.get('/api/get_product',auth,async (req,res)=>{
    try {
        Product.find({user_id:req.user._id}).then(value=>{
            res.status(200).json(value);
        })
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;