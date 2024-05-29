<template>
	<u-button type="primary" size="large" @click="handleLoginBtn">Login</u-button>
</template>

<script setup lang="ts">
const { login } = useAuthStore();

function handleLoginBtn() {
	login('Admin', 'admin123');
}
</script>
