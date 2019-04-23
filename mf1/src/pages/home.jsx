import React from 'react';
import { Link } from 'react-router-dom';
import { Inlet } from 'react-conduit';

export default () =>(
    <div>
        <p>This page is owned by Micro Frontend 1</p>
        <p>Links to other pages</p>
        <Link to="/items">Items</Link>
        <br/>
        <Link to="/search">Search</Link>
        <Inlet label={'test123'} >
                <p>ASfns adoifnasoid fnasoid nfasdinfasodjfn aos</p>
        </Inlet>
    </div>

)

