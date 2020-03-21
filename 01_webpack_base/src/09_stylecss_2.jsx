import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示
import cssObj from '@/test.css';

export default class CssComponent2 extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className='testdiv'>
            hello i with my style
        </div>
    }
}