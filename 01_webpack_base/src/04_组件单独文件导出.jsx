import React from 'react'; // 创建组件 虚拟DOM 生命周期

// 第一种创建组件的方式 第一个字幕必须大写
function Hello(props) {

    // 如果在一个组件中return 一个null 表示次组件是空的 什么都不渲染
    // return null;
    //在组件中必须返回一个合法的虚拟DOM元素

    console.log(props);
    return <div>hello {props.user.name}, he has {props.user.age}</div>
}

//把组件暴露出去
export  default Hello;