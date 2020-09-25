import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { MenuContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [, , , , , , loggedInUser, ] = useContext(MenuContext);
    console.log("latest email", loggedInUser.email);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivateRoute;