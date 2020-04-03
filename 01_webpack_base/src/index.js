// 假设 main.js 还是我们的入口文件
import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示
import '@/05class_基本使用'
import '@/06class_继承'
import '@/06class_继承公共的方法'


import {HashRouter as Router, Route} from "react-router-dom";
import App from "./App";




ReactDOM.render(
    <React.Fragment>
        <Router>
            <Route component={App} path={"/"}></Route>
        </Router>
        <Button></Button>
    </React.Fragment>

    , document.getElementById('app'));


