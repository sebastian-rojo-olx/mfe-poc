import React from 'react';
import { Link } from 'react-router-dom';
import {Outlet} from 'react-conduit';

export default () =>(
    <div>
        <p>This page is owned by Micro Frontend 1</p>
        <Link to="/">Go back to home</Link>

        <Outlet label="globalButton3"/>
    </div>

)

