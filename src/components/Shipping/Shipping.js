import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import "./Shipping.css"

const Shipping = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { loginUser } = useAuth()
    const onSubmit = data => {
        const storageCart = getStoredCart()
        data.order = storageCart;
        console.log(data);

        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    alert("Order process successfully")
                    clearTheCart()
                    reset()
                }
            })
    };

    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={loginUser.displayName} {...register("name")} />

                <input defaultValue={loginUser.email} {...register("email", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}

                <input placeholder="zip code" {...register("address")} />
                <input placeholder="city" {...register("ciry")} />
                <input placeholder="country" {...register("country")} />




                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;