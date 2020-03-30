import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Form, Input, Row, Spin} from "antd";
import './login.scss'
import ActionsDispatcher from "../../actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

interface LoginProps {
    isSignIn: boolean,
    signInDispatch: any
    isSignInLoading?: boolean
}

class Login extends Component<LoginProps> {

    layout = {
        labelCol: {span: 3, offset: 4},
        wrapperCol: {span: 10},
    };
    tailLayout = {
        wrapperCol: {offset: 7, span: 4},
    };

    onFinish = (values: any) => {
        this.props.signInDispatch(values)
    };

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            this.props.isSignIn ?
                <Redirect to={"/"}></Redirect> :


                <div className={"qf-login-form-container"}>
                    <Row>

                        <Col span={12} offset={6} className={"qf-login-form-col"}>
                            <Card
                                title={"Login"}
                            >
                                <Spin spinning={this.props.isSignInLoading}>
                                    <Form
                                        {...this.layout}
                                        name="basic"
                                        initialValues={{remember: true}}
                                        onFinish={this.onFinish}
                                        onFinishFailed={this.onFinishFailed}
                                        className={"login-form"}
                                    >
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[{required: true, message: 'Please input your username!'}]}
                                        >
                                            <Input/>
                                        </Form.Item>

                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[{required: true, message: 'Please input your password!'}]}
                                        >
                                            <Input.Password/>
                                        </Form.Item>

                                        <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                                            <Checkbox>Remember me</Checkbox>
                                        </Form.Item>

                                        <Form.Item {...this.tailLayout}>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </Spin>
                            </Card>
                        </Col>
                    </Row>
                </div>

        );
    }
}

const mapToProps: any = (store: any) => {
    return {
        isSignIn: store.Authentification.isSignIn,
        isSignInLoading: store.Authentification.isSignInLoading
    }
}

const mapDispatchProps = {
    signInDispatch: ActionsDispatcher.authAction_signIn,

}


export default connect(mapToProps, mapDispatchProps)(Login);