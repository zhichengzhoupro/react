export const increment = () => {
    return (dispatch) => {
        dispatch({
            type: '17_increment_counter'
        })
    }
}

export const decrement = () => {
    return (dispatch) => {
        dispatch({
            type: '17_decrement_counter'
        })
    }
}