<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const props = defineProps({
	items: { type: Array, required: true }
})

const index = ref(0)
function next() {
	index.value = (index.value + 1) % props.items.length
}
function prev() {
	index.value = (index.value - 1 + props.items.length) % props.items.length
}

onMounted(() => {
	AOS.init({ duration: 600, once: true })
})
</script>

<template>
	<div class="relative" data-aos="fade-up">
		<div class="p-6 rounded-xl border border-secondary/20 bg-white dark:bg-darkbg/60 min-h-[160px]">
			<blockquote class="text-lg italic text-gray-800 dark:text-gray-100">“{{ items[index].quote }}”</blockquote>
			<p class="mt-3 text-secondary">— {{ items[index].name }}</p>
		</div>
		<div class="flex justify-between mt-4">
			<button class="btn-secondary text-sm" @click="prev">‹</button>
			<button class="btn-secondary text-sm" @click="next">›</button>
		</div>
	</div>
</template> 