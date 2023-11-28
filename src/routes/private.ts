import { lazy } from 'react';

const Profile = lazy(() => import('../pages/Profile'));
const UserList = lazy(() => import('../modules/usersModule/pages/UserList'));
const UserCreate = lazy(() => import('../modules/usersModule/pages/UserCreate'));

/* mettre les routes protégées ici */
const coreRoutes = [
    {
        path: '/profile',
        title: 'Profile',
        component: Profile,
    },
    {
        path: '/users',
        title: 'Users - List',
        component: UserList,
    },
    {
        path: '/user-create',
        title: 'Users - Create new User',
        component: UserCreate,
    },
];

const privateRoutes = [...coreRoutes];
export default privateRoutes;
