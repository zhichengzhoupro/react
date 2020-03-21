import React, {Fragment} from 'react';
import './App.css';
import {HashRouter as router, Route, Router, Switch} from 'react-router-dom'
import {mainRouter} from './routers/Router'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
  return (
      <Fragment>
          <Router history={history}>
              <switch>
                  <Route path="/admin" render={(routerProps) => {return <App {...routerProps}/>}} />
                  {
                      mainRouter.map(router => {
                          return <Route path={route.pathName} component={route.component}></Route>
                      })
                  }
              </switch>
          </Router>
      </Fragment>

  );
}

export default App;
