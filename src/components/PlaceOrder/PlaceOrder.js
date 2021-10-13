import React from 'react';
import { useHistory } from 'react-router';

const PlaceOrder = () => {

    const history = useHistory()

    const handleBackToHome = (key) => {
        history.push(key)
    }
    return (
        <div>
            <h1>This is plase order</h1>
            <button onClick={() => handleBackToHome("/shop")}>Back to home page</button>
        </div>
    );
};

export default PlaceOrder;