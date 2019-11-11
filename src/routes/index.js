import React from 'react';
import App from '../containers/App';
import { Route, Switch } from 'react-router-dom';
import Container from '../containers/Container/Container';
import NotFound from '../components/NotFound/NotFound';

export default (
    <App>
        <Switch>
            <Route path="/" exact component={Container} />
            <Route component={NotFound} />
        </Switch>
    </App>
);
