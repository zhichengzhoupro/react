import React, {Component} from 'react';
import {Card, List, Avatar, Badge, Button} from "antd";
import {connect} from "react-redux";

interface NotifcationProps {
    list?: any[]
}


class Notification extends Component<NotifcationProps> {

    constructor(props: NotifcationProps) {
        super(props);
    }

    render() {
        return (
            <Card
                title="Notifications Center"
            >
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.list}
                    renderItem={item => (
                        <List.Item
                            extra={item.isRed ? null : <Button>Mark As Read</Button>}
                            >
                            <List.Item.Meta
                                title={<Badge dot={!item.isRed}>item.title</Badge>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

const mapToProps: any = (state: any) => {

    const {
        isLoading = true,
        list = []
    } = state.Notification
    return ({
        isLoading,
        list
    })


}

export default connect(mapToProps)(Notification);