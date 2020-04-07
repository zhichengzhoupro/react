import React, {useContext} from 'react';
import {ColorContext, UPDATE_COLOR} from "./color";

const ButtonChangeColor = (props) => {
    const {dispatch} = useContext(ColorContext);
    return(
        <button onClick={() => dispatch({type: UPDATE_COLOR,color: props.color})}>{props.children}</button>
    )
};

export default ButtonChangeColor;