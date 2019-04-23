import React from 'react';
import { Link } from 'react-router-dom';

export default () =>(
    <div>
        <p>This page is owned by Micro Frontend 2</p>
        <p>Links to other pages</p>
        <Link to="/search">Search</Link>
        <br/>
        <Link to="/items">Items</Link>
    </div>

)

