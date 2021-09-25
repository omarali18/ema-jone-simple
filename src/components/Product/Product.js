import React from 'react';
import "./Priduct.css"

const Product = (props) => {
    const { img, name, seller } = props.product
    const [one] = props.product.features;
    console.log(one);

    // console.log(props.product);
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h6>{name}</h6>
                <div className="config">
                    <div>
                        <p>by : {seller}</p>
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