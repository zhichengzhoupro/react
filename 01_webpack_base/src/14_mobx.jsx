import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ButtonComponent from "./component/ButtonComponent";
import ResultDisplay from "./component/ResultDisplay";

function mapStateToProps(state) {
    return {};
}

export default class MobxTest extends Component
{
    render()
    {
        return (
            <Fragment>
                <ButtonComponent>-</ButtonComponent>
                <ResultDisplay>10</ResultDisplay>
                <ButtonComponent>+</ButtonComponent>
            </Fragment>
        );
    }
}
