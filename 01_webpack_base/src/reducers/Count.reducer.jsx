import immutable from 'immutable'

const initialState = immutable.fromJS({
    counter : 20
})

export default (state = initialState, action) => {
    switch (action.type) {
        case '17_increment_counter' :
            return state.updateIn(['counter'], (v) => v + 1 )
            break;
        case '17_decrement_counter' :
            return state.updateIn(['counter'], (v) => v - 1 )
            break;
        default:
            return state;
    }
}