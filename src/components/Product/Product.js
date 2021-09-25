import React from 'react';
import "./Priduct.css"

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product

    // console.log(props);
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
                        <button onClick={() => props.addBtnHandler(props.product)}>add to cart</button>
                    </div>
                    <div>
                        <h3>Features</h3>
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