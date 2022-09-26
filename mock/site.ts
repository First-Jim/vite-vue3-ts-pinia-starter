import { MockMethod } from 'vite-plugin-mock';
export default [
	{
		url: '/api/get',
		method: 'get',
		response: ({ query }) => {
			return {
				code: 0,
				data: {
					name: 'vben',
				},
			};
		},
	},
	{
		url: '/api/index/index',
		method: 'get',
		response: ({ query }) => {
			return {
				code: 1,
				time: new Date().getTime(),
				msg: '',
				data: {
					site: {
						site_name: 'FunnyAdminSite',
						record_number: '皖ICP备19023451号-1',
						version: 'v1.0.0',
						cdn_url: 'https://steady-cactus-b8a8a3.netlify.app',
						upload: {
							maxsize: 10485760,
							savename: '/storage/{topic}/{year}{mon}{day}/{filesha1}{.suffix}',
							mimetype: 'jpg,png,bmp,jpeg,gif,webp,zip,rar,xls,xlsx,doc,docx,wav,mp4,mp3,pdf,txt',
							mode: 'local',
						},
					},
					open_member_center: true,
				},
			};
		},
	},
] as MockMethod[];
