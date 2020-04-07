import React, {createContext, Fragment, useContext, useReducer} from 'react';
import ButtonChangeColor from "./ButtonChangeColor";
import ShowArea from "./ShowArea";
import {ColorContext, Color} from "./color";

const Example7 = () => {
    return (
        <Fragment>
            <Color>
                <ShowArea/>
                <ButtonChangeColor color={'yellow'}>change to Yellow</ButtonChangeColor>
                <ButtonChangeColor color={'red'}>change to Red</ButtonChangeColor>
            </Color>
        </Fragment>
    )
}

export default Example7;