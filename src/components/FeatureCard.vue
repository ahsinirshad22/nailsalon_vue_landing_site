<script setup>
import { defineProps } from 'vue'

const props = defineProps({
	title: { type: String, required: true },
	text: { type: String, required: true },
	icon: { type: String, required: false, default: '💅' },
})
</script>

<template>
	<div class="rounded-xl border border-secondary/20 p-6 bg-white dark:bg-darkbg/60 shadow-sm hover:shadow-md transition">
		<div class="text-3xl mb-3 text-accent">{{ icon }}</div>
		<h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ title }}</h3>
		<p class="mt-2 text-secondary">{{ text }}</p>
	</div>
</template> 