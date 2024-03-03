import React from 'react';

const Store = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/store/products/', {cache: "no-cache"});
    const products = await res.json();
    console.log(products)
    return (
        <>
            <h1>Products</h1>
            <ul>
                {products.results.map(product =>
                    <li key={product.id}>
                        <img width='128' src={product.image} alt="Product Image"/>
                        {product.name} ${product.price}
                    </li>)}
            </ul>
        </>
    );
};

export default Store;
