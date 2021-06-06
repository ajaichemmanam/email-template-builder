import React, { Component } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import EmailBuilder from '../EmailBuilder/EmailBuilder'

const TemplateGallery = (props) => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={match.path} exact={true}>
                <div>
                    <h1>My Designs</h1>

                    <p><Link to={`${match.url}/new`}>New Design</Link></p>
                </div>
            </Route>
            <Route path={`${match.path}/new`} exact={true}>
                <EmailBuilder />
            </Route>
            <Route path={`${match.path}/edit/:designId`} exact={true}>
                <EmailBuilder />
            </Route>
        </Switch>
    );
};

export default TemplateGallery;