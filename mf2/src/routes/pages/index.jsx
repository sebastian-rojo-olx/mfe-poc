import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../../pages/home';
import Search from '../../pages/search';


export default () => (
    <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
    </React.Fragment>
)
