<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/store/theme'

const themeStore = useThemeStore()
const isDark = computed(() => themeStore.theme === 'dark')
function toggle() {
	themeStore.toggleTheme()
}
</script>

<template>
	<button
		class="px-3 py-1 rounded-md border text-sm border-secondary text-secondary hover:bg-secondary hover:text-white transition"
		:aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
		@click="toggle"
	>
		<span v-if="isDark">🌙</span>
		<span v-else>☀️</span>
	</button>
</template> 