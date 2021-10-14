import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className="login-form">
            <div className="form-contianer">
                <h1>Sign In</h1>
                <form >
                    <input type="email" placeholder="Enter your Email" name="" id="" />
                    <br />
                    <input type="password" placeholder="Enter your PassWord" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to Ema John <Link to="/register">Create an Account.</Link> </p>
                <div>================Or===============</div>
                <div>
                    <button>Sign in With Google.</button>
                </div>
            </div>
        </div>
    );
};

export default Login;