// import UserLayout from '@/layouts/UserLayout';

// import Login from '@/pages/user/login';
// import Register from '@/pages/user/register';
import Home from "../pages/home";
import UserList from "../pages/list/UserList";
import WorkList from "../pages/list/WorkList";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import TableList from "../pages/list/tableList";



export default [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/user',
                component: Login,
                routes: [
                    {
                        path: '/user/login',
                        component: Login,
                    },
                    {
                        path: '/user/register',
                        component: Register,
                    },
                ],
            },
            {
                path: '/home',
                component: UserList,
                routes: [
                    {
                        path: '/home/index',
                        name: '首页',
                        component: Home,
                    },
                    {
                        path: '/home/list',
                        name: 'list',
                        component: UserList,
                        routes: [
                            {
                                path: '/home/list/UserList',
                                name: 'UserList',
                                component: UserList,
                            },
                            {
                                path: '/home/list/WorkList',
                                name: 'WorkList',
                                component: WorkList,
                            },
                            {
                                path: '/home/list/TableList',
                                name: 'TableList',
                                component: TableList,
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
