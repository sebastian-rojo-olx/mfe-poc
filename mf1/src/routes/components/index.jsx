import React from 'react';
import { Route } from 'react-router-dom'
import { Inlet } from 'react-conduit';
import ItemButton from '../../components/itemButton';

const mf1ButtonOnSearch = () => (<Inlet label={"entryPointSearch"}><ItemButton/></Inlet>);


export default () => (
    <React.Fragment>
        <Route exact path="/search" component={mf1ButtonOnSearch}/>
    </React.Fragment>
)
