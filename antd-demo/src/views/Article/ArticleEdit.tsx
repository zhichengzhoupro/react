import React, {Component} from 'react';
import {Button, Card, Checkbox, Form, Input} from "antd";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getArticleById} from "../../services/service";
import {FormProps} from "antd/es/form";
import FormItem from "antd/es/form/FormItem";

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

}
class ArticleEdit extends Component<ArticleEditProps, ArticleState> {

    constructor(articleEditProps: ArticleEditProps) {
        super(articleEditProps);
    }

    componentDidMount(): void {
        console.log(this.props);
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


    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };

        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        return (
            <Card
                title={this.props.location.state ? this.props.location.state.title : 'Edit Article'}
                extra={<Button type={"primary"}> 保存 </Button>}
            >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <FormItem
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </FormItem>

                    <FormItem
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </FormItem>

                    <FormItem {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </FormItem>

                    <FormItem {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        );
    }
}

export default withRouter(ArticleEdit);