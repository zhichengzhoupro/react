import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from "./store";
import Hello from "./Hello";
import MobxTest from "./14_mobx";
import ToDoList from "./15_ToDoList";
import BlogList from "./component/BlogList/BlogList";
import MovieComponent from '@/07_classComponent'
import CmtList from '@/08_classOuterComponent'
import CssComponent from '@/09_stylecss'
import CssComponent2 from '@/09_stylecss_2'
import {ContextComponent, CounterProvider} from '@/10_context'
import ReduxTestComponent from './12_redux_应用'
import {Route, NavLink as Link, Redirect, Switch } from "react-router-dom";
import Article from "./component/Article";
import User from "./component/user";
import ArticleDetail from "./component/Article/ArticleDetail";
import NotFound from "./views/NotFound";

const user = {
    'name': 'zhicheng',
    'age': 20
}

class App extends Component {
    render() {
        return (
            <CounterProvider>
                <Provider store={store}>
                    123
                    <Hello user={user}/>
                    <hr/>
                    <div>
                        <ul>
                            <li> <Link to={"/user"}>user</Link> </li>
                            <li><Link to={"/article"}>article</Link></li>
                            <li><Link to={"/render"}>article</Link></li>
                        </ul>
                    </div>
                    <Switch>
                        <Route component={Article} path={"/article"} exact></Route>
                        <Route component={User} path={"/user"} exact></Route>
                        <Route component={ArticleDetail} path={'/article/:id'} exact></Route>
                        <Route component={NotFound} path={'/404'} exact></Route>
                        <Route render={(routeProps) => { return <div>render</div>}} path={'/render'} exact></Route>
                        <Redirect to={"/"} from={"/"} exact></Redirect>
                        <Redirect to={"/404"} ></Redirect>
                    </Switch>
                    <hr/>
                    <MovieComponent name="gong fu" actor={user}></MovieComponent>
                    <CmtList></CmtList>
                    <CssComponent/>
                    <CssComponent2></CssComponent2>
                    <ContextComponent></ContextComponent>
                    <ReduxTestComponent></ReduxTestComponent>
                    <MobxTest></MobxTest>
                    <ToDoList></ToDoList>
                    <BlogList></BlogList>




                </Provider>
            </CounterProvider>
        );
    }
}

export default App;