
import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {adminRoutes} from '../../routers/Router'
import {Frame} from "../../components";
import {connect} from "react-redux";


const menus = adminRoutes.filter(route => route.isNav === true );

interface AdminProps {
    isSignIn: boolean
}

class Admin extends Component<AdminProps> {
    render() {
        return (
             this.props.isSignIn ?
                <Frame menus={menus}>
                    <div>
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
                </Frame>
                :
                    <Redirect to={"/login"}></Redirect>

        );
    }
}

const mstp =(store: any) => {
    return {
        isSignIn :  store.Authentification.isSignIn
    }
}

export default connect(mstp)(Admin);