import {
    DashBoard,
    Article,
    ArticleEdit,
    NotFound,
    Login,
    Settings
} from '../views'


export const mainRoutes = [
    {
        pathName : '/404',
        component: NotFound
    },
    {
        pathName : '/login',
        component: Login
    }
];

export const adminRoutes: Route[] = [
    {
        pathName : '/admin/dashboard',
        component: DashBoard,
        title: "DashBoard",
        iconComponent: () =>  import('@ant-design/icons/DashboardOutlined'),
        isNav: true,
        exact: false
    },
    {
        pathName : '/admin/article',
        component: Article,
        exact: true,
        title: "Articles",
        iconComponent: () =>  import('@ant-design/icons/UnorderedListOutlined'),
        isNav: true
    },
    {
        pathName : '/admin/article/edit/:id',
        component: ArticleEdit,
        isNav :false,
        exact: false,
        title: '',
        iconComponent:''
    },
    {
        pathName : '/admin/settings',
        component: Settings,
        title: "Settings",
        iconComponent: () =>  import('@ant-design/icons/SettingOutlined'),
        isNav: true,
        exact: false
    },
];

export interface Route {
    pathName : string;
    component: any;
    title: string,
    iconComponent: any;
    isNav: boolean;
    exact: boolean;
}
