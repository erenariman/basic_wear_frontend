import React from 'react';


const Store = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/store/products/');
    const products = await res.json();
    console.log(products);
    return (
        <>
            <h1>Products</h1>
            <ul>
                {products.results.map(product => <li key={product.id}>{product.name}</li>)}
            </ul>
        </>
    );
};

export default Store;