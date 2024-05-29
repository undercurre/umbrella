import { createSSRApp } from 'vue';
// @ts-ignore
import uView from 'vk-uview-ui';
import App from './App.vue';
import { setupStore } from './stores';
import { setupI18n } from './locales';
export function createApp() {
	const app = createSSRApp(App);
	setupStore(app);
	setupI18n(app);
	// 使用 uView UI
	app.use(uView);
	return {
		app
	};
}
