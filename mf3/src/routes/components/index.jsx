import React from 'react';
import { Route } from 'react-router-dom'
import ItemButton from '../../components/itemButton';
import { Inlet } from 'react-conduit';

const mf3ButtonOnSearch = () => (<Inlet label={"entryPointSearch"}><ItemButton/></Inlet>);
const mf3ButtonGlobal = () => (<Inlet label={"globalButton3"}><ItemButton/></Inlet>);


export default () => (
    <React.Fragment>
        <Route path="/" component={mf3ButtonGlobal}/>
        <Route exact path="/search" component={mf3ButtonOnSearch}/>
        <Route exact path="/items" component={mf3ButtonOnSearch}/>
    </React.Fragment>
)
