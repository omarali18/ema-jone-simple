import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = (props) => {
    const { img, name, seller, price, stock, star, quantity } = props.cart
    const { removeItem } = props
    const features = props.cart.features;
    const addToCartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <div className="config">
                    <div className="condition">
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => removeItem(props.cart)}>{addToCartIcon} Remove</button>
                    </div>
                    <div className="Features-container">

                        <div className="Features">
                            <h3>Features</h3>
                            {
                                features.map(feature => <table>
                                    <tr>
                                        <td>{feature.description} :- </td>
                                        <td>{feature.value}</td>
                                    </tr>
                                </table>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;