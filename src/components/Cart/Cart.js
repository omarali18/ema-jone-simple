import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
        // console.log(product);
    }
    const Handling = total * .03
    const beforeTax = total + Handling;
    const tax = beforeTax * .05;
    const orderTotal = beforeTax + tax;
    console.log(total);
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items ordered : {props.cart.length}</h5>
            <br />
            <p>Items price: <span>${total.toFixed(2)}</span></p>
            <p>Shipping & Handling: <span>${Handling.toFixed(2)}</span></p>
            <p>Total before tax: <span>${beforeTax.toFixed(2)}</span></p>
            <p>Estimated Tax: <span>${tax.toFixed(2)}</span></p>
            <p>Order Total: <span>${orderTotal.toFixed(2)}</span></p>
        </div>
    );
};

export default Cart;