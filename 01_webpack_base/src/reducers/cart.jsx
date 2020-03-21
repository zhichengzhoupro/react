import * as ActionType from '../actions/action.type.jsx'


const initState = [
    {
        id: 1,
        title: 'Apple',
        price: 888,
        amount: 10
    },
    {
        id: 2,
        title: 'orange',
        price: 888,
        amount: 20
    }
];



export  default (state = initState, action) => {
    switch (action.type) {
        case ActionType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if(item.id == action.payload.id) {
                    console.log(item.amount);
                    item.amount += 1;
                }
                return item;
            });
            break;
        case ActionType.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if(item.id == action.payload.id) {
                    item.amount -= 1;
                }
                return item;
            });
            break;
        default:
            return state
    }
}