import React, {Component} from 'react';
import {decrement, decrementAsync, increment} from "../actions/ActionCreators";
import store from "../store/index"
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

 class  CartList extends Component {

    constructor(props) {
        super();

        this.state = {
            cartList : props.cartList
        }
    }

    getState =()=> {
        this.setState({
            cartList: store.getState().cart
        });


    }

    componentDidMount() {

        //console.log('store.getState().cart', store.getState().cart);
       //store.subscribe(this.getState);
    }

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>商品名称</th>
                    <th>价格</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.cartList.map(item =>{ return (
                        <tr>
                            <td>{item.id} & {item.index}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={()=>{this.props.decrement(item.id)}}>-</button>
                                <button onClick={()=>{this.props.decrementAsync(item.id)}}>- async</button>
                                <span>{item.amount}</span>
                                <button onClick={()=>{this.props.increment(item.id)}}>+</button>
                            </td>
                            <td></td>
                        </tr>
                    )})
                }

                </tbody>
            </table>
        );
    }
}

const mapStateToprops = (state) => {

     return {
         cartList :  state.cart

     }
}

const mapDispatchToProps  = (dispatch) => {
     return {
         add : (id) => dispatch(increment(id)),
         remove: (id) => dispatch(decrement(id))
     }
}

const action = {
     decrement,
     increment,
    decrementAsync
}

//export default  connect(mapStateToprops, mapDispatchToProps)(CartList)
export default  connect(mapStateToprops, action)(CartList)