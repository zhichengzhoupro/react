import React, {Component} from 'react';
import {observer} from "mobx-react";


@observer
class DisplayCounter extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component update')
    }

    render() {
        return (
            <span>{this.props.counterStore.count}</span>
        );
    }
}

export default DisplayCounter;