import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../../pages/home';
import Items from '../../pages/items';


export default () => (
    <React.Fragment>
        <Route exact path="/" component={Home}/>
    </React.Fragment>
)
