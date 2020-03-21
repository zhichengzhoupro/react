import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {mainRouter} from './routers/Router'
import { createBrowserHistory } from 'history';
import Admin from "./views/admin/Admin";

const history = createBrowserHistory();

function App() {
  return (
      <Fragment>
          <Router>
              <Switch>
                  <Route path={'/admin'}  render={(routeProps) => {
                      return <Admin {...routeProps}></Admin>
                  }}></Route>
                  {
                      mainRouter.map(route => {
                          return <Route path={route.pathName} component={route.component}></Route>})
                  }
                  <Redirect to="/admin" from="/" exact></Redirect>
                  <Redirect to="/404"></Redirect>
              </Switch>
          </Router>
      </Fragment>

  );
}

export default App;
