import { RouteRecordRaw } from 'vue-router';

const pageTitle = (name: string): string => {
	return `pagesTitle.${name}`;
};

/*
 * 静态路由
 */
const staticRoutes: Array<RouteRecordRaw> = [
	{
		// 首页
		path: '/',
		name: '/',
		component: () => import('@/pages/frontend/index.vue'),
		meta: {
			title: pageTitle('home'),
		},
	},
	{
		// 登录页
		path: '/user/login',
		name: 'userLogin',
		component: () => import('@/pages/frontend/user/login.vue'),
		meta: {
			title: pageTitle('userLogin'),
		},
	},
	{
		path: '/:path(.*)*',
		redirect: '/404',
	},
	{
		// 404
		path: '/404',
		name: 'notFound',
		component: () => import('@/pages/common/error/404.vue'),
		meta: {
			title: pageTitle('notFound'), // 页面不存在
		},
	},
	{
		// 后台找不到页面了-可能是路由未加载上
		path: '/admin:path(.*)*',
		redirect: (to) => {
			return {
				name: 'adminMainLoading',
				query: { url: to.path, query: JSON.stringify(to.query) },
			};
		},
	},
	{
		// 会员中心找不到页面了
		path: '/user:path(.*)*',
		redirect: (to) => {
			return {
				name: 'userMainLoading',
				query: { url: to.path, query: JSON.stringify(to.query) },
			};
		},
	},
	{
		// 无权限访问
		path: '/401',
		name: 'noPower',
		component: () => import('@/pages/common/error/401.vue'),
		meta: {
			title: pageTitle('noPower'),
		},
	},
];

/*
 * 会员中心基础静态路由
 */
const memberCenterBaseRoute: RouteRecordRaw = {
	path: '/user',
	name: 'user',
	component: () => import('@/layouts/frontend/user.vue'),
	redirect: '/user/loading',
	meta: {
		title: pageTitle('User'),
	},
	children: [
		{
			path: 'loading',
			name: 'userMainLoading',
			component: () => import('@/layouts/common/components/loading.vue'),
			meta: {
				title: pageTitle('Loading'),
			},
		},
	],
};

export { staticRoutes, memberCenterBaseRoute };
