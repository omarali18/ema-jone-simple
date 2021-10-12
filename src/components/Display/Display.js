import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Display.css"

const Display = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [searchProducts, setSearchProduct] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProduct(data)
            })
    }, []);
    const addBtnHandler = (product) => {
        let addProduct = [...cart, product]
        setCart(addProduct);

        //Add to local Storage
        addToDb(product.key)
    }

    const searchFiealdhandle = (e) => {
        const searchText = e.target.value

        const metchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProduct(metchedProduct)
    }

    useEffect(() => {
        const getStoreItem = getStoredCart()
        if (products.length) {
            const cullectProduct = []
            for (const key in getStoreItem) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = getStoreItem[key]
                    addedProduct.quantity = quantity
                    cullectProduct.push(addedProduct)
                }
            }
            setCart(cullectProduct);
        }
    }, [products])

    return (
        <div>
            <div className="search">
                <input onChange={searchFiealdhandle} type="text" placeholder="Type here to search" name="" id="" />
                <i className="fas fa-shopping-cart"></i>
                <span>{cart.length}</span>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        searchProducts.map(product => <Product
                            product={product}
                            key={product.key}
                            addBtnHandler={addBtnHandler}
                        />)}

                </div>
                <div className="card-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Display;