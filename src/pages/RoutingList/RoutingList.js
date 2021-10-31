import React from 'react';
import { Route, Switch } from 'react-router';
import About from '../About/About';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import Forms from '../form/Forms';
import Form from '../form/Forms';
import Home from '../Home/Home';
import Login from '../Login/Login/Login';
import PrivateRoute from '../Login/Login/privateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';

const RoutingList = () => {
    return (
        <div>
            <Switch>
                <Route exact path = '/'> <Home/> </Route>
                <Route path = '/home'> <Home/> </Route>
                <Route path = '/contact'> <Contact/></Route>
                <Route path = '/about'> <About/> </Route>
                <Route path = '/login'> <Login/> </Route>

                <PrivateRoute path='/booking/:serviceId'><Booking/></PrivateRoute>
               
                <Route path='/form'><Forms></Forms></Route>
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};

export default RoutingList;