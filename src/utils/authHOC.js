import React from 'react';
import { Redirect } from 'react-router-dom';
import authenticate from './authenticate';

export default function (WrappedComponent) {
    return function (props) {
        const { isAuthenticated } = authenticate();
        console.log('Autenticado:',isAuthenticated);
        return isAuthenticated
            ? <WrappedComponent {...props} />
            : <Redirect to="/" />
    }
};
