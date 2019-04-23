import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import flattenChildren from 'react-flatten-children';


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
            </BrowserRouter>
        );
    }
}
