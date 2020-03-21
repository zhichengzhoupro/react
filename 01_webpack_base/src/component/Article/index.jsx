import React, {Component} from 'react';
import {connect} from 'react-redux';
import ArticleDetail from "./ArticleDetail";

import { Route, NavLink} from "react-router-dom";
function mapStateToProps(state) {
    return {};
}

class Article extends Component {
    render() {
        return (
            <div>
                <NavLink to={'/article/1'}> article 1</NavLink>
                <NavLink to={'/article/2'}> article 2</NavLink>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Article);