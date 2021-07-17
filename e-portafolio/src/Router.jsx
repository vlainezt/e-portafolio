import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

export const Router = () => {

    return (
        <BrowserRouter>
            <div className="scroll-up-btn">
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
            <Navbar></Navbar>

            <Switch>
                <Route exact path="/" component={Home}></Route>
            
            </Switch>
        </BrowserRouter>
    )
}