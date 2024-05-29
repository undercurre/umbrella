<template>
	<div>
		<div class="flex justify-between items-center h-100px">
			<u-switch v-model="testBool"></u-switch>
			<span>useBoolean</span>
			<span>{{ testBool }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useBoolean } from '../../hooks';

const { bool: testBool } = useBoolean(false);
</script>
