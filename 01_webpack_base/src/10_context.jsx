import React from 'react'; // 创建组件 虚拟DOM 生命周期
import ReactDOM from 'react-dom'; // 专门进行DOM操作 将DOM进行展示

class CountBtn extends React.Component {
    render() {
        return <Consumer>
            {
                ({onIncreaseCount, onDecreaseCount}) => {
                    function xxx() {

                    }

                    let handler = this.props.type === 'dcrement' ? onDecreaseCount : onIncreaseCount;
                    return <button onClick={handler}>{this.props.children}</button>
                }

        }

        </Consumer>
    }

}
class Counter extends React.Component {
    render() {
        return <Consumer>
            {
                ({count}) => {

                    return <span>{count}</span>
                }
            }

        </Consumer>
    }

}

const {Consumer , Provider } = React.createContext();

export  class CounterProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            count : 10000,

        }
    }
    render() {
        return <Provider value={{
            count : this.state.count,
            x: 1,
            onIncreaseCount : this.increaseCount,
            onDecreaseCount : this.decreaseCount
        }}>
            {this.props.children}
        </Provider>
    }

    increaseCount = () =>{
        this.setState({
            count : this.state.count +1
        })
    }

    decreaseCount = () => {
        this.setState({
            count : this.state.count - 1
        })
    }
}



export class ContextComponent extends React.Component {

    render() {

        return <React.Fragment>
            <CountBtn type="dcrement">-</CountBtn>
            <Counter></Counter>
            <CountBtn type="increment">+</CountBtn>

        </React.Fragment>
    }
}