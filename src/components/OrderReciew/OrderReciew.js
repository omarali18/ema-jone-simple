import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../utilities/fakedb';

const OrderReciew = () => {
    const { products, setProducts } = useProducts()
    const { cart, setCart } = useCart(products)
    console.log(cart);
    const removeItem = (removeItem) => {

        // const allRemoveProduct = []
        const removeProsuct = cart.filter(item => item.key !== removeItem.key)
        setCart(removeProsuct)

        deleteFromDb(removeItem.key)
    }
    // console.log(cart);
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
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default OrderReciew;