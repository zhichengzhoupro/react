import * as React from 'react'
import ReactDOM from 'react-dom';
import CartList from "./component/CartList"; // 专门进行DOM操作 将DOM进行展示
import store from "./store/index"


export default class  ReduxReactTestComponent extends React.Component {

    render() {
        return <CartList></CartList>
            ;
    }

}

