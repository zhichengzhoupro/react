import React, {createContext, Fragment, useContext, useReducer} from 'react';
import {ColorContext} from "./color";

const ShowArea =() => {
    const {color} = useContext(ColorContext);
    return(
        <div style={{color: color.color}}> 字体为BLUE</div>
    )
};

export default ShowArea;
