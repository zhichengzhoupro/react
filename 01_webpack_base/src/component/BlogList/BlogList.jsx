import React, {Component} from 'react';
import {connect} from 'react-redux';
import BlogItem from "./BlogItem";
import {fetchBlogList} from "../../actions/ActionCreators"

function mapStateToProps(state) {
    return {
        blogList : state.blog.list,
        isLoading: state.blog.isLoading,
        errorMessage: state.blog.errorMessage
    };
}

class BlogList extends Component {

    componentDidMount() {
        this.props.fetchBlogList();
    }

    render() {
       const {blogList, isLoading, errorMessage} = this.props
        return (
            isLoading ?
                <div>loading ...</div> :

                errorMessage ?
                    errorMessage :
                    <ul>
                        {


                            blogList.map(item  => {
                                return (<BlogItem key={item.id} {...item}></BlogItem>);
                            })
                        }
                    </ul>
        );
    }
}

export default connect(
    mapStateToProps, {
        fetchBlogList
    }
)(BlogList);