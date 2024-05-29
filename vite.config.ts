import { defineConfig } from 'vite';
import preset from './preset/preset';
import pxToViewport from 'postcss-px-to-viewport-8-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'~': path.resolve(process.cwd()),
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	plugins: [...preset],
	css: {
		postcss: {
			plugins: [
				pxToViewport({
					viewportWidth: 375,
					unitPrecision: 6,
					unitToConvert: 'px',
					propList: ['*']
				}),
				postcssPresetEnv({
					stage: 3 // 使用的 CSS 语法阶段
				})
			]
		}
	},
	build: {
		target: 'es6',
		cssTarget: 'chrome61' // https://cn.vitejs.dev/config/build-options.html#build-csstarget
	},
	optimizeDeps: {
		exclude: ['vue-demi']
	},
	test: {
		environment: 'jsdom',
		singleThread: true,
		globals: true,
		exclude: [...configDefaults.exclude, 'e2e/*'],
		root: fileURLToPath(new URL('./', import.meta.url)),
		transformMode: {
			web: [/\.[jt]sx$/]
		}
	}
});
