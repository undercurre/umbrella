<template>
	<div>
		<p>Random Number: {{ randomNum }}</p>
		<p>[10, 20, 30, 40, 50]Array Sum: {{ arraySum }}</p>
	</div>
</template>

<script lang="ts" setup>
import _ from 'lodash-es';

// Setup data
const randomNum = ref(_.random(1, 100));

const numbers = [10, 20, 30, 40, 50];
const arraySum = ref(_.sum(numbers));
</script>
