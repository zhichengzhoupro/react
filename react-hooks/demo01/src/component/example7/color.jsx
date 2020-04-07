import React, {createContext, Fragment, useContext, useReducer} from 'react';

export const ColorContext = createContext({});

export const UPDATE_COLOR = "UPDATE_COLOR";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return {
                color: action.color
            };
        default:
            return state;
    }
}

export const Color = (props) => {

    const [color, dispatch] = useReducer(reducer, {color: 'blue'})

    return (
        <ColorContext.Provider value={{color, dispatch}}>{props.children}</ColorContext.Provider>
    )
};