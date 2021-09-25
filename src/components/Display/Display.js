import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Display.css"

const Display = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const addBtnHandler = (product) => {
        let addProduct = [...cart, product]
        setCart(addProduct);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                    product={product}
                    key={product.key}
                    addBtnHandler={addBtnHandler}
                />)}

            </div>
            <div className="card-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Display;