import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示


export default class CmtComment extends React.Component {

    constructor() {
        super()
    }

    render() {
        return <div>
            <h2>id: {this.props.id} / name : {this.props.user}</h2>
            <p>comment: {this.props.content}</p>

        </div>
    }
}
