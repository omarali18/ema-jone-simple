import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';

const OrderReciew = () => {
    const { products, setProducts } = useProducts()
    const { cart, setCart } = useCart(products)
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">

                </div>
                <div className="card-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default OrderReciew;