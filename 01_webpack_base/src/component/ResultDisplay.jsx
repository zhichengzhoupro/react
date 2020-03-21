import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

export default class ResultDisplay extends Component {
    render() {
        return (
            <span>
                {this.props.children}
            </span>
        );
    }
}
