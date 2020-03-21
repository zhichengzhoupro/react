// 假设 main.js 还是我们的入口文件
import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示



// 创建虚拟DOM
// const div = React.createElement('div', { id : 'mydiv', title: 'this is a div'}, 'this is a div');

// 调用render渲染

let testVar = 10;

const arrstr = ['zhicheng', 'fangfang', 'zhouzhou', 'zhou yining'];
const nameArr = [];
arrstr.forEach(item => {
    const temp = <h5>{item}</h5>;
    nameArr.push(temp);

});
/*
 注释
 */
const div = <div className='classTest'>hello div {testVar}from js lalalal </div>;

const arrayDiv =

ReactDOM.render(
    <div>

        {div}
        {nameArr}
    </div>

    , document.getElementById('app'));


