import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { loginUser } = useAuth()
    const onSubmit = data => console.log(data);

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