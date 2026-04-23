const express=require('express');
const app =express();
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors');
const connectDatabase=require('./Config/ConnectDatabase');
dotenv.config({path: path.join(__dirname,'Config','config.env')})
const products=require('./Routes/product');
const order=require('./Routes/order');

app.use(express.json());//req date transfer to body
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',order);

connectDatabase();


app.listen(process.env.PORT,() =>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});
