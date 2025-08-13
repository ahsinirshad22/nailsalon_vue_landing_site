<script setup>
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/store/language'

const { locale } = useI18n()
const languageStore = useLanguageStore()

function changeLanguage(next) {
	locale.value = next
	languageStore.setLocale(next)
}
</script>

<template>
	<div class="inline-flex items-center gap-2">
		<button
			class="px-3 py-1 rounded-md border text-sm"
			:class="locale === 'en' ? 'bg-primary text-white border-primary' : 'border-secondary text-secondary'"
			aria-label="English"
			@click="changeLanguage('en')"
		>
			🇺🇸 EN
		</button>
		<button
			class="px-3 py-1 rounded-md border text-sm"
			:class="locale === 'vi' ? 'bg-primary text-white border-primary' : 'border-secondary text-secondary'"
			aria-label="Vietnamese"
			@click="changeLanguage('vi')"
		>
			🇻🇳 VI
		</button>
	</div>
</template> 