import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../../pages/home';
import Items from '../../pages/items';


export default () => (
    <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route exact path="/items" component={Items}/>
    </React.Fragment>
)
