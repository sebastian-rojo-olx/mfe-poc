import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-conduit';

export default () =>(
    <div>
        <p>This page is owned by Micro Frontend 2</p>
        <br/>
        <Outlet label="entryPointSearch"/>
        <br/>
        <Link to="/">Go back to home</Link>
        <br/>
        <Outlet label="entryPointSearch"/>
    </div>

)

