import {
    DashBoard,
    Article,
    ArticleEdit,
    NotFound,
    Login,
    Settings
} from '../views'


export const mainRouter = [
    {
        pathName : '/404',
        component: NotFound
    },
    {
        pathName : '/login',
        component: Login
    }
];

export const adminRouter = [
    {
        pathName : '/admin/dashboard',
        component: DashBoard
    },
    {
        pathName : '/admin/settings',
        component: Settings
    },
    {
        pathName : '/admin/article',
        component: Article,
        exact: true
    },
    {
        pathName : '/admin/article/edit/:id',
        component: ArticleEdit
    }
];
