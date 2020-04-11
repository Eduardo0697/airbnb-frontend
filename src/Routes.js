import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home'
import Explore from "./views/Explore";
import Error404 from "./views/Error404";
import Login from "./views/SignIn";
import SignUp from "./views/SignUp";
import UserProfile from "./views/UserProfile";
function Routes(){
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/properties" component={Explore}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/profile" component={UserProfile}/>
                <Route path="/about">
                    <Redirect to="/"/>
                </Route>
                <Route path="*" component={Error404}/>
            </Switch>
        </>
    );
}

export default  Routes;