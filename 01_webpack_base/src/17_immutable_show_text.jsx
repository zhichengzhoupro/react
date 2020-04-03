import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

class ImmutableShowText
    extends Component {
    render() {
        return (
            <Fragment>
                <span>{this.props.counter}</span>
            </Fragment>
        );
    }
}

const mapStoreToProps = (store) => {
    return {
        counter: store.count.get('counter')
    }
}

const mapActionToProps = {}

export default connect(mapStoreToProps, mapActionToProps)(ImmutableShowText);