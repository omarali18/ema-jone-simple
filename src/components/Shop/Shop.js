import React from 'react';
import Display from '../Display/Display';
import "./Shop.css"

const Shop = () => {
    return (
        <div>
            <div className="search">
                <input type="text" placeholder="Type here to search" name="" id="" />
                <i className="fas fa-shopping-cart"></i>
                <span>0</span>
            </div>
            <Display />

        </div>
    );
};

export default Shop;