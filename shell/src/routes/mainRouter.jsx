import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import flattenChildren from 'react-flatten-children';
import Micro from './mf1';
import { Outlet } from 'react-conduit';

export default class MainRouter extends React.Component{

    render() {
        const { routes } = this.props;

        return (
            <BrowserRouter>
                <Switch>
                    { flattenChildren(
                        Object.keys(routes).map(appName => (
                            routes[appName].Pages()
                        ))
                    )
                    }
                </Switch>
                {
                    flattenChildren(
                        Object.keys(routes).map(appName => (
                            routes[appName].Components()
                        ))
                    )
                }
                <Outlet label={"test123"} />
            </BrowserRouter>
        );
    }
}
