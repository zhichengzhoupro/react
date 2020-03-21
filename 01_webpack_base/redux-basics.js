const redux = require('redux');
const createStore = redux.createStore;

// 我们初始一个状态
const initialState = {
    counter : 0
}

//Reducer 是一个方法 用于改变状态
// 有两个参数 第一个是当前状态 第二个是行为 然后返回行为后的状态
//使用es6 可以让参数有一个 初值 很好， 如果没有参数的化
const rootReducer = (state = initialState, action) => {
    // 返回当前状态
    return state;
}

// store
const store = createStore(rootReducer);

console.log(store.getState());


//Dispatch Action
//这个store 要分发一个行为
// 行为的
store.dispatch()