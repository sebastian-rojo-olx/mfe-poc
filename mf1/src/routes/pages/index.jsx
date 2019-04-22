import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../pages/home';
import Items from '../../pages/items';


export default () => (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/items" component={Items}/>
    </Router>
)
