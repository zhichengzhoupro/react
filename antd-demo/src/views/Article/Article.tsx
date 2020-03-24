import React, {Component} from 'react';
import {Button, Card, Table} from "antd";

class Article extends Component {
    state = {
         dataSource : [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ],

     columns : [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ]

    }
    render() {

        return (
            <div className="site-card-border-less-wrapper">
                <Card
                    extra={<Button>Export Excel</Button>}
                    title="Article List"
                    bordered={false} >
                    <Table dataSource={this.state.dataSource} columns={this.state.columns} />;
                </Card>
            </div>
        );
    }
}

export default Article;