const express=require('express');
const { getproduct, getsingleproduct } = require('../Controllers/productController');
const router=express.Router();

router.route('/products').get(getproduct);
router.route('/product/:id').get(getsingleproduct);

module.exports=router;


