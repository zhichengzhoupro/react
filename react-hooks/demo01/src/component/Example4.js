import React, {Component, Fragment} from 'react';

class Example4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }

    componentDidMount() {
        console.log(`Example 4 componentDidMount => you clicked ${this.state.count}`)
    }

    componentDidUpdate = () => {
        console.log(`Example 4 componentDidUpdate => you clicked ${this.state.count}`)
    };

    render() {
        return (
            <Fragment>
                You click {this.state.count} times. <br/>
                <button onClick={this.addCount}> click On me</button>
            </Fragment>
        );
    }

    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

}

export default Example4;