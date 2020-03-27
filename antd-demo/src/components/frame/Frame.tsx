
import React, {Component} from "react";
import {Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge} from 'antd';
import './Frame.scss';
import {adminRoutes, Route} from '../../routers/Router'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import { DownOutlined } from "@ant-design/icons";

const {Header, Content, Sider} = Layout;




interface FrameProps extends RouteComponentProps {
    menus: any
}

interface FrameState {
    iconComponents: any[],
    defaultSelectedMenuRoute: string
}

class Frame extends Component<FrameProps, FrameState> {

    onDropDown = (key: any) => {
        this.props.history.push(key.key);
    };

     menu = (
        <Menu onClick={this.onDropDown}>
            <Menu.Item
                key={"/admin/notification"}
            >
                <Badge dot>
                    Notification Center
                </Badge>
            </Menu.Item>
            <Menu.Item
                key={"/admin/settings"}
            >
                Personnal Setting
            </Menu.Item>
            <Menu.Item>
                Disconnect
            </Menu.Item>
        </Menu>
    );

    constructor(props: FrameProps) {
        super(props);
        this.state = {
            iconComponents: [],
            /*
             为按钮设置默认的高亮
             defaultSelectedKeys
            * */
            defaultSelectedMenuRoute: props.location.pathname.split('/').slice(0, 3).join('/')

        }
    }



    /*
        这里是用来跳转
    */
    navigate = (e: any) => {
        console.log('nav' , e)
        this.props.history.push(e.key);
    };

    componentDidMount(): void {
        this.props.menus.map((r: Route) => {
            const {iconComponent} = r;
            iconComponent().then((resp: any) => {
                this.setState(state => {
                    const iconComponents = state.iconComponents.concat({
                        pathname: r.pathName,
                        component: resp.default
                    });
                    return {
                        iconComponents
                    };
                })
            })
        })

    }

    componentDidUpdate(prevProps: Readonly<FrameProps>, prevState: Readonly<FrameState>, snapshot?: any): void {

        if (this.props.location !== prevProps.location) {
            this.setState({
                defaultSelectedMenuRoute: this.props.location.pathname
            });
        }
    }


    render() {
        return (

            <Layout>
                <Header className="header qf-header">
                    <div className="qf-logo">
                        <img src='/images/logo.png'/>
                    </div>
                    <div className={"weclome-menu-container"}>
                        <Dropdown overlay={this.menu} trigger={["click", "hover"] }>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span>Welcome Zhicheng Zhou </span>
                                <Badge count={10} offset={[10,-10]}>
                                    <DownOutlined />
                                </Badge>
                            </a>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.state.defaultSelectedMenuRoute]}
                            style={{height: '100%', borderRight: 0}}
                        >
                            {
                                this.props.menus.map((r: Route) => {
                                        return (
                                            <Menu.Item key={r.pathName} onClick={this.navigate}>
                                                {/*
                                                    这里是导入那些icon
                                                */}

                                                {
                                                    this.state.iconComponents.find(ic => ic.pathname === r.pathName) ?
                                                        this.state.iconComponents.find(ic => ic.pathname === r.pathName).component.render() : ''
                                                }
                                                {r.title}
                                            </Menu.Item>
                                        )
                                    }
                                )
                            }

                        </Menu>


                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            {
                                this.props.location.pathname.split("/").filter(p => p !== "").map(path => {
                                    return <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
                                })
                            }
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                                {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
export default withRouter(Frame);