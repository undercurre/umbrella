<template>
	<view>
		<navigator
			class="text-green text-12px py-10px px-20px"
			v-for="(v, idx) in pages"
			:key="idx"
			:url="v.url"
			>{{ v.title }}</navigator
		>
	</view>
</template>

<script lang="ts" setup>
const pages = reactive([
	{
		title: 'AutoImport Demo',
		url: '/pages/autoImport/index'
	},
	{
		title: 'Env Demo',
		url: '/pages/env/index'
	},
	{
		title: 'Fetch Demo',
		url: '/pages/fetch/index'
	},
	{
		title: 'I18n Demo',
		url: '/pages/i18n/index'
	},
	{
		title: 'Lodash Demo',
		url: '/pages/lodash/index'
	},
	{
		title: 'Standard Demo',
		url: '/pages/standard/index'
	},
	{
		title: 'Pinia Demo',
		url: '/pages/store/index'
	},
	{
		title: 'Scss Demo',
		url: '/pages/scss/index'
	},
	{
		title: 'Uniuse Demo',
		url: '/pages/uniuse/index'
	},
	{
		title: 'uView Demo',
		url: '/pages/uview/index'
	},
	{
		title: 'UnoCSS Demo',
		url: '/pages/unocss/index'
	},
	{
		title: 'Utils Demo',
		url: '/pages/utils/index'
	},
	{
		title: 'Hooks Demo',
		url: '/pages/hooks/index'
	},
	{
		title: 'Login Demo',
		url: '/pages/login/index'
	}
]);
</script>
