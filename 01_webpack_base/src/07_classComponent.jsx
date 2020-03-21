import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示


// 如果要使用class定义组件  必须让自己继承 React.Component
export default class MovieComponent extends React.Component {


    constructor() {
        super();

        // 就相当于Vue中的data(){return {}}
        // state 是可读可写
        this.state = {
            msg :  ' 我是 movie 组件'

        }
    }

    // render 函数的作用是渲染当前组件所对应的虚拟DOM 元素
    // 在class关键字创建的组件中 如果想使用外界传进来的props参数 不需要接受 直接通过this.props.xxx 访问
    //props 都是只读的
    render() {

        this.state.msg =  this.state.msg + '修改啦';
        return <div>
            this is movie component '{this.props.name}'.

            Actor : {this.props.actor.name} , age : {this.props.actor.age}

            <h3>{this.state.msg}</h3>
        </div>
    }

}

