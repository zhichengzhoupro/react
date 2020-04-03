import React, {Component, Fragment} from 'react';
import ImmutableButton from "./17_immutable_button";
import ImmutableShowText from "./17_immutable_show_text";
import {increment, decrement} from "./actions/count.action.creator";
import {connect} from "react-redux";

class ImmutableExample
    extends Component {
    render() {
        return (
            <Fragment>
                <ImmutableButton click={this.props.decrement}>-</ImmutableButton>
                <ImmutableShowText />
                <ImmutableButton click={this.props.increment}>+</ImmutableButton>
            </Fragment>
        );
    }
}

const mapActionDispatchToProps = {
    increment,
    decrement
}

export default connect(null, mapActionDispatchToProps)(ImmutableExample);