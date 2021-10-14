import React from 'react';
import { Link } from 'react-router-dom';

const register = () => {
    return (
        <div className="login-form">
            <div className="form-contianer">
                <h1>Create an account.</h1>
                <form onSubmit="">
                    <input type="text" placeholder="Your Name" name="" id="" />
                    <br />
                    <input type="email" placeholder="Enter your Email" name="" id="" />
                    <br />
                    <input type="password" placeholder="Write your Password" name="" id="" />
                    <br />
                    <input type="submit" value="Subnit" />

                </form>

                <p>Already have an Account? <Link to="/login">Sign In</Link> </p>

                <div>================Or===============</div>
                <div>
                    <button>Sign in With Google.</button>
                </div>
            </div>
        </div>
    );
};

export default register;