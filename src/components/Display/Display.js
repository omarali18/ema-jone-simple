import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Display.css"

const Display = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product product={product} key={product.key} />)}

            </div>
            <div className="card-container">
                <h3>Order Summary</h3>
                <h5>Items ordered : 0</h5>
            </div>
        </div>
    );
};

export default Display;