import React, {Component} from 'react';

class ArticleDetail extends Component {
    render() {
        return (
            <div>
                detail {this.props.match.params.id}
            </div>
        );
    }
}

export default ArticleDetail;