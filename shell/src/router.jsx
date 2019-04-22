import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import flattenChildren from 'react-flatten-children'


export default ({routes}) => {
    debugger;
    return (
        <Router>
            <Switch>
                {flattenChildren(
                    Object.keys(routes).map(appName => (
                        routes[appName].Pages()
                    ))
                )
                }
            </Switch>
            {flattenChildren(
                Object.keys(routes).map(appName => (
                    routes[appName].Components()
                ))
            )
            }
        </Router>
    );
}
