import React from 'react';
import { useHistory } from 'react-router';
import img from "../../images/giphy.gif";
import './PlaceOrder.css'

const PlaceOrder = () => {

    const history = useHistory()

    const handleBackToHome = (key) => {
        history.push(key)
    }
    return (
        <div className="place-order-container">
            <img src={img} alt="" />
            <br /><br /><br />
            <button onClick={() => handleBackToHome("/shop")}>Back to home page</button>
        </div>
    );
};

export default PlaceOrder;