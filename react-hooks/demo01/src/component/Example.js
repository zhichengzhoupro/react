import React, {Component, Fragment} from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    onClick = () => {
        this.setState({
            count: this.state.count+1
        });
    }

    render() {
        return (
            <Fragment>
                You click {this.state.count} times. <br/>
                <button onClick={this.onClick}> click On me</button>
            </Fragment>
        );
    }
}

export default Example;