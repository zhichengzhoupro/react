// 假设 main.js 还是我们的入口文件
import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示

console.log('ok');

// 第一个参数是元素的名称
// 第二个参数是元素的属性
// 第三个参数是元素的子节点
// 参数 n 其他的子节点
// <h1 id="myhi">my first h1</h1>



const myh1 = React.createElement('h1', {
    id : 'myh1',
    title: 'this is h1'
}, 'my first h1');

const div = React.createElement('div', null , 'this is div', myh1);

// 参数1  要渲染的那个虚拟DOM元素
// 参数2  指定页面上一个容器


ReactDOM.render(div, document.getElementById('app'));



