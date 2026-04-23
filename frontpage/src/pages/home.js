import { Fragment, useEffect, useState } from 'react';
import ProductCart from '../components/ProductCart';
import { useSearchParams } from 'react-router-dom';

export default function Home(){
    const [products,setProducts]=useState([]);
    const[searchparams,setsearchparams] = useSearchParams()

    useEffect(() =>{
    fetch(process.env.REACT_APP_API_URL + '/products?'+searchparams)
    //fetch('http://localhost:8000/api/v1/products')
    .then(res =>res.json())
    .then(res=>setProducts(res.products))
    //.catch(err=>console.error("problem",err));
    },[searchparams]);
    return <Fragment>
       
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product => <ProductCart product={product}/>)}
        </div>
        </section> 
    </Fragment>
}
