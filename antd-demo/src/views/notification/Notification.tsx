import React, {Component} from 'react';
import {Card} from "antd";

class Notification extends Component {

    data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];

    render() {
        return (
            <Card
                title="Notifications Center"
            >

            </Card>
        );
    }
}

export default Notification;