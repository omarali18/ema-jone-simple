import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Priduct.css"
import Rating from 'react-rating';

const Product = (props) => {
    const { img, name, seller, price, stock, star } = props.product
    const addToCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    console.log(props.product);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h6>{name}</h6>
                <div className="config">
                    <div className="condition">
                        <p>by : {seller}</p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.addBtnHandler(props.product)}>{addToCartIcon} add to cart</button>
                    </div>
                    <div>
                        <div>
                            <Rating
                                className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star empty-icon"
                                fullSymbol="fas fa-star empty-icon"
                                readonly
                            ></Rating>
                        </div>
                        <h3>Features</h3>
                        <p>ekhan theke suru</p>
                        <ul>
                            {/* <li>{description}: {value}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;