import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_path = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        
        setIsLoading(true)
        signInUsingGoogle()

        .then(result => {
            history.push(redirect_path);
        })
        .finally(() => setIsLoading(false));
    }
    return (
        <div>
           <h2>Please Sign In</h2> 
           <Button variant="outline-warning" onClick={handleGoogleLogin}>Google Sign In</Button>
        </div>
    );
};

export default Login;