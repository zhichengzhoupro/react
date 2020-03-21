import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

class User extends Component {
    render() {
        return (
            <div>
                user
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(User);