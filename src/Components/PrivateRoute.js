import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../Contexts/AuthContext';

function PrivateRoute({children}) {
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute
