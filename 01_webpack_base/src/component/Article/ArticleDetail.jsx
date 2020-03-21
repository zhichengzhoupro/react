import React, {Component} from 'react';

class ArticleDetail extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div>
                detail {this.props.match.params.id}
            </div>
        );
    }
}

export default ArticleDetail;