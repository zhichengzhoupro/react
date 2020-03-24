import React, {Component} from 'react';
import {Button, Card, Table} from "antd";
import {getArticles} from "../../services/service";

interface ArticleProps {

}

interface ArticleState {
    dataSource:  any[],
    columns:  any[],
    total: number
}

class Article extends Component<ArticleProps, ArticleState>{

    constructor(props: any) {
        super(props);
        this.state = {
            dataSource : [],
            columns : [

            ],
            total: 0
        }
    }


    componentDidMount(): void {
        this.getArticles();
    }

    private getArticles() {
        getArticles({}).then((resp: any) => {
            const columnKeys = Object.keys(resp.list[0]);
            const columns = columnKeys.map( (ck:string) => {
                return {
                    title: ck,
                    dataIndex: ck,
                    key: ck,
                }
            })
            this.setState({
                dataSource: resp.list,
                columns: columns,
                total: resp.total
            })
        })
    }

    render() {

        return (
            <div className="site-card-border-less-wrapper">
                <Card
                    extra={<Button>Export Excel</Button>}
                    title="Article List"
                    bordered={false} >
                    <Table dataSource={this.state.dataSource} columns={this.state.columns} rowKey='id' pagination={{total: this.state.total}}/>;
                </Card>
            </div>
        );
    }
}

export default Article;

