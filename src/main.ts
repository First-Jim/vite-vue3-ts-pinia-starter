import { createApp } from 'vue';
import App from './App.vue';
import store from '@/stores';
import router from '@/router';
import { loadLang } from '@/lang/index';
import { registerIcons } from '@/utils/common';
import 'tailwindcss/tailwind.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/styles/index.scss';

async function start() {
	const app = createApp(App);

	app.use(router);
	// 挂载pinia
	app.use(store);

	// 全局语言包加载
	const i18n = await loadLang(app);

	app.use(ElementPlus, { i18n: i18n.global.t });

	// 全局注册
	registerIcons(app); // icons

	app.mount('#app');
}
start();
