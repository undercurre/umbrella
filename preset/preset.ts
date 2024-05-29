import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import { UniUseAutoImports } from '@uni-helper/uni-use';
// import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginHybridMock from 'vite-plugin-hybrid-mock';

export default [
	uni(),
	vitePluginHybridMock(),
	// vueJsx(),
	AutoImport({
		imports: ['vue', 'pinia', 'vue-i18n', '@vueuse/core', UniUseAutoImports],
		dts: './types/auto-imports.d.ts',
		dirs: ['src/pages/**/*', 'src/components/**/*', 'src/stores/**/*'],
		eslintrc: {
			enabled: true
		},
		resolvers: []
	}),
	Components({
		dts: './types/components.d.ts',
		types: [],
		resolvers: []
	}),
	Unocss({
		mode: 'vue-scoped'
	}),
];
