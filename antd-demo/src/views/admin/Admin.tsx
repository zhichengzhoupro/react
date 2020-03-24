
import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRoutes} from '../../routers/Router'
class Admin extends Component {
    render() {
        return (
            <div>
                <div>这里是 Admin 公共的部分</div>
                <Switch>
                    {
                        adminRoutes.map(route => {
                            return (
                                <Route
                                    key={route.pathName}
                                    path={route.pathName}
                                    exact={route.exact}
                                    render={
                                        (routeProps) => {
                                            return <route.component {...routeProps} />
                                        }
                                    }
                                ></Route>)
                        })
                    }
                    <Redirect to={adminRoutes[0].pathName} from='/admin' exact></Redirect>
                    <Redirect to="/404" ></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Admin;