import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示

export default class CssComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div style={{color : 'red', width :'300px', height : '300px', fontSize: '25px', backgroundColor: 'green', margin : '0 auto'}}>
            hello i with my style
        </div>
    }
}