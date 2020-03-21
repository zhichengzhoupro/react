// 假设 main.js 还是我们的入口文件
import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示

// 第一种创建组件的方式 第一个字幕必须大写
function Hello(props) {

    // 如果在一个组件中return 一个null 表示次组件是空的 什么都不渲染
    // return null;
    //在组件中必须返回一个合法的虚拟DOM元素

    console.log(props);
    return <div>hello {props.user.name}, he has {props.user.age}</div>
}

const user = {
    name : 'zhicheng',
    age : 20
}

ReactDOM.render(
    <div>
123
                <Hello user={user}/>
    </div>

    , document.getElementById('app'));


