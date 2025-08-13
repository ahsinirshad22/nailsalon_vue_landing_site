import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'nailsalon_lang'

export const useLanguageStore = defineStore('language', () => {
	const saved = ref(typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null)
	const locale = ref(saved.value || 'en')

	watchEffect(() => {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, locale.value)
		}
	})

	function setLocale(next) {
		locale.value = next
	}

	return { locale, setLocale }
}) 