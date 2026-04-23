const orderModel=require('../models/orderModel');
const productModel=require('../models/productModel');

// create order  /api/v1/order
exports.createorder=async(req,res,next) => {
    //console.log(req.body,'DATA');
    const cartItems=req.body;
    //reduce total array value get in single value
    //acc accumulator previous value move to next step
    const amount=Number(cartItems.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
    const status='pending';
    const order=await orderModel.create({cartItems,amount,status})

    // update product Stock

    cartItems.forEach(async (item) => {
        const product= await productModel.findById(item.product._id);
        product.stock=product.stock - item.qty;
       await product.save();
    });

    res.json(
        {
            success: true,
            order
        }
    )
}