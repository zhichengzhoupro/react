# REACT HOOKS

## 新特性
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
* 这样我们就不再区分有状态组件和无状态组件
* 注意 方法的首字母要大写 eslint会报错 不认为这是一个组件
## 规则
### 使用特性提供的useState方法
```javascript 1.6
import React, { useState, Fragment} from 'react';

function Example() {
    const [count, setCount] = useState(0) // 这个是ES6的新特性 数组结构的写法
}
```
这个是数组结构的写法 它实际等于
```javascript 1.6
 let _state = useState(0)
 let count = _state[0]
 let setCount = _state[1]
```
*  必须像下面这样去申明不能有if
```javascript 1.6
const [name, setName] = useState('zhicheng')
const [age, setAge] = useState(20)
const [sex, setSex] = useState('male')
const [job, setJob] = useState('developper')
```
### 使用useEffect代替生命周期函数
useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕
```javascript 1.6
    useEffect(() => {
        console.log(`useEffect => you clicked ${count}`)
    })
```
* 相当于使用这个方法代替了componentDidMount 和 componentDidUpdate 两个方法


```javascript 1.8
useEffect(() => {
        console.log('useEffect => this is page d acceuil')

        return ()=> {
            console.log('index : componentWillUnmount')
        }
    }, []);
```
*  这里的 return ()=> {
                  console.log('index : componentWillUnmount')
              } 方法实现了Unmount，第二个参数是一个空数组 表示不依赖于任何钩子，所以钩子
* 
              
```javascript 1.8
 useEffect(()=> {
        console.log(`on Count componentDidMount => ${count}`);
        return ()=> {
            console.log('Example 5 on count : componentUnmount')
        }
    }, [isOnline]);
```    
* 以上代码可以精确到某一个钩子的副作用
### 使用useContext 上下文 代替props
#### 1. 首先使用create￿Context 创建一个上下文
```javascript 1.8
import React, {createContext, Fragment, useContext, useReducer} from 'react';


const Context = createContext();

```
#### 2. 在子组件中 使用useContext去接受上下文
```javascript 1.8
const DisplayText = () => {
    let count = useContext(Context);
    return (
        <h2>I've received {count} from parent</h2>
    )

};
```
#### 3. 在父组件中使用 ContextProvider 向子组件传递
```javascript 1.8
    <Context.Provider value={count}>
        <DisplayText/>
    </Context.Provider>
```

### 使用useReducer和Context 达到Redux的部分效果
#### 1. 创建Context 上下文
```javascript 1.8
export const ColorContext = createContext({});
```
#### 2. 我们做一个组件 使用reduser 并且用上面创建的好的context 把state 和 dispatch给暴露出去
```javascript 1.8
export const Color = (props) => {

    const [color, dispatch] = useReducer(reducer, {color: 'blue'})

    return (
        <ColorContext.Provider value={{color, dispatch}}>{props.children}</ColorContext.Provider>
    )
};
```
#### 3. 用上面的组件作为父组件
```javascript 1.8
    <Color>
        <ShowArea/>
        <ButtonChangeColor color={'yellow'}>change to Yellow</ButtonChangeColor>
        <ButtonChangeColor color={'red'}>change to Red</ButtonChangeColor>
    </Color>
```
#### 4. 在子组件里面 可以使用useContext 接受state或者dispatch
```javascript 1.8
const ButtonChangeColor = (props) => {
    const {dispatch} = useContext(ColorContext);
    return(
        <button onClick={() => dispatch({type: UPDATE_COLOR,color: props.color})}>{props.children}</button>
    )
};
```

### 性能问题 userMemo
#### 1. 在react中 如何解决子组件不自动更新的问题 一般采用shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }
##### 2. 在函数式组件当中我们可以才用更加细颗粒化的监听办法 使用useMemo
```javascript 1.8
 const actionXiaohong = useMemo(()=>{changeXiaohong(name)}, [name]);
```
* 只监听name这一个

### 获得Dom元素 useRef
#### 1.
      
              
