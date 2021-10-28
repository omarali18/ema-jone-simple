import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Display.css"

const Display = () => {
    const [products, setProducts] = useState([])
    const { cart, setCart } = useCart()
    const [searchProducts, setSearchProduct] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.product)
                setSearchProduct(data.product)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)

            })
    }, [page]);
    const addBtnHandler = (product) => {
        const exists = cart.find(pd => pd.key === product.key)
        let newProduct = []
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1;
            newProduct = [...rest, product]
        }
        else {
            product.quantity = 1;
            newProduct = [...cart, product]
        }
        setCart(newProduct);

        //Add to local Storage
        addToDb(product.key)
    }

    const searchFiealdhandle = (e) => {
        const searchText = e.target.value

        const metchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchProduct(metchedProduct)
    }


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
                        />
                        )}

                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                className={(number === page) ? "selected" : ""}
                                key={number}
                                onClick={() => { setPage(number) }}
                            >{number + 1}</button>)
                        }
                    </div>
                </div>
                <div className="card-container">
                    <Cart cart={cart} >
                        <Link to="/review"><button>Review your order</button></Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Display;