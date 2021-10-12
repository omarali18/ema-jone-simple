import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Priduct.css"
import Rating from 'react-rating';

const Product = (props) => {
    // const [feature, setFeature] = useState({})
    const { img, name, seller, price, stock, star } = props.product
    const addToCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const features = props.product.features
    if (features) {
        for (const feature of features) {
            // console.log(feature.description);
            // setFeature(feature)
        }
    }

    // console.log(feature);
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
                    <div className="Features-container">
                        <div className="rating-container">
                            <Rating
                                className="rating"
                                initialRating={star}
                                emptySymbol="far fa-star empty-icon"
                                fullSymbol="fas fa-star empty-icon"
                                readonly
                            ></Rating>
                        </div>
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

export default Product;