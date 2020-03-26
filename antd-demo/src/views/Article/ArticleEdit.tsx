import React, {Component} from 'react';
import {Button, Card, Checkbox, DatePicker, Form, Input, InputNumber} from "antd";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getArticleById} from "../../services/service";
import {FormProps} from "antd/es/form";
import FormItem from "antd/es/form/FormItem";
import moment from "moment";

type state = {
    title: string
}
type context = {

}
type MatchParams = {
    id: string;
}


interface ArticleEditProps extends RouteComponentProps<MatchParams, context, state> , FormProps{

}


interface ArticleState {
    titleHelp?: string
    validateStatus?: any
}

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
};
const tailLayout = {
    wrapperCol: { offset: 2, span: 12 },
};

const dateFormat = 'YYYY/MM/DD';

class ArticleEdit extends Component<ArticleEditProps, ArticleState> {

    constructor(articleEditProps: ArticleEditProps) {
        super(articleEditProps);
        this.state = {
            titleHelp : 'test',
            validateStatus: 'success'
        }
    }

    componentDidMount(): void {
        getArticleById(this.props.match.params.id).then((Response) => {

        });
    }

    private handleSubmit = () => {

    }

    private  onFinish = (values: any) => {
        console.log('Success:', values);
    };

    private  onFinishFailed = (errorInfo :any) => {
        console.log('Failed:', errorInfo);
    };

    private validateUserName = (_: any, value: string) => {
        if(value && value.indexOf('@') === -1) {
            this.setState({
                titleHelp: 'Should contain @',
                validateStatus: 'error'
            })
        } else  {
            this.setState({
                validateStatus: 'success'
            });
         return Promise.resolve();
        }

    }

    private onDateChange = () => {

    }

    render() {


        return (

            <Card
                title={this.props.location.state ? this.props.location.state.title : 'Edit Article'}
                extra={<Button type={"primary"}> EXIT </Button>}
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    {...layout}

                >
                    <Form.Item
                        label="title"
                        name="title"
                        validateStatus={this.state.validateStatus}
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please input Article title!'
                                },

                                {
                                    validator: this.validateUserName
                                }

                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="author"
                        name="author"
                        rules={
                            [
                                {
                                    required: true,
                                    message: 'Please input Article author!'
                                }
                            ]
                        }
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="amount"
                        name="amount"
                        rules={
                            []
                        }
                    >
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Create At"
                        name="createAt"
                        rules={
                            []
                        }
                    >
                        <DatePicker showTime placeholder={"select time"}  onChange={this.onDateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Content"
                        name="content"
                        rules={
                            []
                        }
                    >
                        <Input.TextArea allowClear={true} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}

export default withRouter(ArticleEdit);