import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { loginUser } = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginUser.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>

            }
        ></Route>
    );
};

export default PrivateRoute;