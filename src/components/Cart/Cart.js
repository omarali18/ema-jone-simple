import React from 'react';
import useProducts from '../../hooks/useProducts';
import "./Cart.css"

const Cart = (props) => {
    // console.log("card is ", props.cart);
    const { cart } = props;
    // const { cart } = useProducts()
    // console.log("card", cart);
    let total = 0;
    let itemOrder = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity
        itemOrder = itemOrder + product.quantity

    }

    const Handling = total * .03
    const beforeTax = total + Handling;
    const tax = beforeTax * .05;
    const orderTotal = beforeTax + tax;
    // console.log(total);
    //==================================================
    /* const { itemOrder, total, Handling, beforeTax, tax, orderTotal } = useProducts()*/

    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items ordered : {itemOrder}</h5>
            <br />
            <p>Items price: <span className="id1">${total.toFixed(2)}</span></p>
            <p>Shipping & Handling: <span className="id2">${Handling.toFixed(2)}</span></p>
            <p>Total before tax: <span className="id3">${beforeTax.toFixed(2)}</span></p>
            <p>Estimated Tax: <span className="id4">${tax.toFixed(2)}</span></p>
            <p id="total">Order Total: <span className="id5" id="total">${orderTotal.toFixed(2)}</span></p>
            <div>
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;