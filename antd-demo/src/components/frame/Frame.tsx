
import React, {Component} from "react";
import {Layout, Menu, Breadcrumb} from 'antd';
import './Frame.scss';
import {adminRoutes, Route} from '../../routers/Router'
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {StaticContext, match} from "react-router";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

interface FrameProps extends RouteComponentProps {
    menus: any
}

interface FrameState {
    iconComponents: any[]
}

class Frame extends Component<FrameProps, FrameState> {

    constructor(props: FrameProps) {
        super(props);
        this.state = {
            iconComponents: []
        }
    }

    test = (e: any) => {
        this.props.history.push(e.key);
    }

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


    render() {
        return (

            <Layout>
                <Header className="header qf-header">
                    <div className="qf-logo">
                        <img src='/images/logo.png'/>
                    </div>

                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.props.location.pathname]}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                        >
                            {
                                this.props.menus.map((r: Route) => {
                                        return (
                                            <Menu.Item key={r.pathName} onClick={this.test}>
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