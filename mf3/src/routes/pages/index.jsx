import React from 'react';
import { Route } from 'react-router-dom'
import Posting from '../../pages/posting';


export default () => (
    <React.Fragment>
        <Route exact path="/post" component={Posting}/>
    </React.Fragment>
)
