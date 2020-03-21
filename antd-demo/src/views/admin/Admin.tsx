import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {adminRouter} from '../../routers/Router'
class Admin extends Component {
    render() {
        return (
            <div>
                <div>这里是公共的部分</div>
                <Switch>
                    {
                        adminRouter.map( route => {
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
                    <Redirect to={adminRouter[0].pathName} from='/admin' exact></Redirect>
                    <Redirect to="/404" ></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Admin;