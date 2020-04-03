import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";

class ImmutableButton
    extends Component {
    render() {
        return (

            <Button onClick={this.props.click}>{this.props.children}</Button>

        );
    }
}

const mapStoreToProps = (store) => {
    return {

    }
}

const mapActionToProps =  {

}

export default connect(mapStoreToProps, mapActionToProps)(ImmutableButton);