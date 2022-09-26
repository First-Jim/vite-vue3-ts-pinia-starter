import { MockMethod } from 'vite-plugin-mock';
export default [
	{
		url: '/api/admin/index/login',
		method: 'post',
		response: ({ query }) => {
			return {
				code: 1,
				msg: '登录成功！',
				time: 1663944715,
				data: {
					userinfo: {
						id: 1,
						username: 'admin',
						nickname: 'Admin',
						avatar: 'https://demo.buildadmin.com/static/images/avatar.png',
						lastlogintime: '2022-09-23 22:51:55',
						token: '37a13264-6f3c-41bc-b9b6-7cc518520bf5',
						refreshToken: '',
					},
					routePath: '/admin',
				},
			};
		},
	},
] as MockMethod[];
