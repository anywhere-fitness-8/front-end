import React from 'react';
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({component: Component, ...rest }){
    return(
        <Route {...rest} render={() => {
            if(window.localStorage.getItem('token')) {
                return <Component />;
            }else{
                return <Redirect to='/login'/>;
            }
        }}/>
    )
}