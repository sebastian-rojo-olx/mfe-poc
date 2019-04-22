import React from 'react';
import { Link } from 'react-router-dom';

export default () =>(
    <div>
        <p>This page is owned by Micro Frontend 1</p>
        <p>Links to other pages</p>
        <Link to="/items">Items</Link>
    </div>

)

