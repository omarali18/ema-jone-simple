import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb, getDb } from '../../utilities/fakedb';
import { Link, useHistory } from 'react-router-dom';

const OrderReciew = () => {
    const { cart, setCart } = useCart()
    const history = useHistory()
    const removeItem = (removeItem) => {

        const removeProsuct = cart.filter(item => item.key !== removeItem.key)
        setCart(removeProsuct)

        deleteFromDb(removeItem.key)
    }

    const checkDb = getDb()
    const handlePlaceOrder = (key) => {

        if (checkDb) {
            history.push(key)
        }
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(reviewCard => <ReviewItem
                            key={reviewCard.key}
                            cart={reviewCard}
                            removeItem={removeItem}
                        />)
                    }
                </div>
                <div className="card-container">
                    <Cart cart={cart} >

                        <button onClick={() => handlePlaceOrder("shipping")}>Proceed to shipping</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReciew;