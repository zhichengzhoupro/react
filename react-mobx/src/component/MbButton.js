import React, {Component} from "react";

class MbButton extends Component{

    render() {
        return(
            <button onClick={this.props.click}>{this.props.children}</button>
        );
    }
}

export default MbButton;