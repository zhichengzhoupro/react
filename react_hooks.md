# REACT HOOKS

## 新特性
Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
* 这样我们就不再区分有状态组件和无状态组件
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

```javascript 1.6
    useEffect(() => {
        console.log(`useEffect => you clicked ${count}`)
    })
```
* 相当于使用这个方法代替了componentDidMount 和 componentDidUpdate 两个方法