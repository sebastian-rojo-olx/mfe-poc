import React from 'react';
import {Link} from 'react-router-dom';
import {Outlet} from 'react-conduit';

export default () => (
    <div>
        <p>This page is owned by Micro Frontend 1</p>
        <p>Links to other pages</p>
        <Link to="/items">Items</Link>
        <br/>
        <Link to="/search">Search</Link>

        <Outlet label="globalButton3">
            Space for button from mf3
        </Outlet>
    </div>

)

