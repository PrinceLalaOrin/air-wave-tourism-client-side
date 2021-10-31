import React from 'react';
import { Spinner } from 'react-bootstrap';

import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {client , isLoading} = useAuth();
    if(isLoading){
        <Spinner animation="border" variant="info" />
    }
    return (
        <Route
        {...rest}
        render = {({location}) => client.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        />

        }
        >
            
        </Route>
    );
};

export default PrivateRoute;