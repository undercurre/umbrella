<template>
	<div>
		<div>当前环境：{{ envObj.VITE_SERVICE_ENV }}</div>
	</div>
</template>

<script setup lang="ts">
const envObj = import.meta.env;

// 在这里可以根据环境变量进行不同的操作
</script>
