import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import addVideos from './pages/AddVideo';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register-video" component={addVideos} />
        </Switch>
    );
}

export default Routes;
