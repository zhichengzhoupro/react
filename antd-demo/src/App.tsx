import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {mainRoutes} from './routers/Router'
import Admin from "./views/admin/Admin";
import {Frame} from "./components"
import {adminRoutes} from './routers/Router'

const menus = adminRoutes.filter(route => route.isNav === true );
function App() {
  return (
      <Fragment>
          <Router>
             <Frame menus={menus}>
                 <Switch>
                     <Route path={'/admin'}  render={(routeProps) => {
                         return <Admin {...routeProps}></Admin>
                     }}></Route>
                     {
                         mainRoutes.map(route => {
                             return <Route key={route.pathName} path={route.pathName} component={route.component}></Route>})
                     }
                     <Redirect to="/admin" from="/" exact></Redirect>
                     <Redirect to="/404"></Redirect>
                 </Switch>
             </Frame>
          </Router>
      </Fragment>

  );
}

export default App;
