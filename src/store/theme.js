import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'nailsalon_theme'

export const useThemeStore = defineStore('theme', () => {
	const preferred = ref(typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null)
	const theme = ref(preferred.value === 'dark' || preferred.value === 'light' ? preferred.value : 'light')

	watchEffect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', theme.value === 'dark')
		}
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, theme.value)
		}
	})

	function toggleTheme() {
		theme.value = theme.value === 'dark' ? 'light' : 'dark'
	}

	return { theme, toggleTheme }
}) 