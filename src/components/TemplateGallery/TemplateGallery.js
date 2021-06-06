import React, { Component } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import EmailBuilder from '../EmailBuilder/EmailBuilder'

import data from '../../assets/collection.json'

const TemplateGallery = (props) => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact={true}>
                <div>
                    <h1>My Designs</h1>

                    <p><Link to={`${match.url}new`}>New Design</Link></p>
                </div>
                {data.templates.length ? data.templates.map((el, i, array) => {
                    return (
                        <div key={i}>

                            <p><Link to={{ pathname: `${match.url}edit/${el.id}`, state: el }}>{i + 1}. {el.name}</Link></p>
                        </div>
                    )
                }) : <div> No Templates Available</div>}
            </Route>
            <Route path={`${match.path}/new`} exact={true} render={(props) => {
                return <EmailBuilder {...props} edit={false} />
            }} />


            <Route path={`${match.path}/edit/:designId`} exact={true} render={(props) => {
                return <EmailBuilder {...props} edit={true} templateData={props.location.state} />
            }} />
        </Switch>

    );
};

export default TemplateGallery;