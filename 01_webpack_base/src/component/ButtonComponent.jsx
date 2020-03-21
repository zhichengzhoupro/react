import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from "@material-ui/core";

function mapStateToProps(state) {
    return {};
}

export default class ButtonComponent extends Component {
    render() {
        return (
            <Button>{this.props.children}
            </Button>
        );
    }
}
