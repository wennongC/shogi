import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './HomePage';
import Game from './Game';

export default class App extends React.Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/game" exact component={Game} />
              <Route path="/*" exact>
                <Redirect to="/home" />
              </Route>
            </Switch>
          </Router>
        );
    }
}