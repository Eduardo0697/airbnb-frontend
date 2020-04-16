import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home'
import Explore from "./views/Explore";
import Error404 from "./views/Error404";
import Login from "./views/SignIn";
import SignUp from "./views/SignUp";
import UserProfile from "./views/UserProfile";
import AddProperty from "./views/AddProperty";
import UpdateProperty from "./views/UpdateProperty";
import Property from "./views/Property";
import User from "./views/User";
import UpdateProfile from "./views/UpdateProfile";



function Logout() {
    sessionStorage.removeItem('userToken');
    return <Redirect to="/" />
}
function Routes(){
    return(
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/properties" component={Explore}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/update/profile" component={UpdateProfile}/>
                <Route exact path="/user/:id" component={User}/>

                <Route exact path="/property/:id" component={Property}/>
                <Route exact path="/add/property" component={AddProperty}/>
                <Route exact path="/update/property/:id" component={UpdateProperty}/>

                <Route exact path="/logout" component={Logout}/>
                <Route exact path="/about">
                    <Redirect to="/"/>
                </Route>
                <Route path="*" component={Error404}/>
            </Switch>
        </>
    );
}

export default  Routes;