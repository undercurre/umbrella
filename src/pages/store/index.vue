<template>
	<div>
		<h3 class="text-left">Using Store</h3>
		<h3 class="text-left">目前支持2.0.33的pinia</h3>
		<p class="text-50px">Count: {{ counter.count }}</p>
		<p class="text-50px">Double Count: {{ counter.doubleCount }}</p>
		<button @click="counter.increment">Increment</button>
	</div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores'; // 导入你的 store 文件路径

// 使用 useCounterStore() 获取 store 实例
const counter = useCounterStore();
</script>
