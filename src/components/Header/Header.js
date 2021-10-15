import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import "./Header.css"

const Header = () => {

    const { loginUser, logOut } = useAuth()
    console.log(loginUser);
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    !loginUser.displayName ? <Link to="/login">Sign In</Link> : <span>
                        <small className="userName">{loginUser.displayName} <i class="fas fa-user"></i></small>
                        <Link onClick={logOut} to="/shop"> Sign Out</Link>
                    </span>
                }
            </nav>
        </div>
    );
};

export default Header;