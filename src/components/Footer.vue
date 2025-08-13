<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
	<footer class="mt-20 border-t border-secondary/20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
			<p class="text-sm text-secondary">© {{ year }} {{ t('footer.company') }}. {{ t('footer.rights') }}</p>
			<nav class="flex items-center gap-4 text-sm">
				<RouterLink to="/privacy-policy" class="hover:text-primary">{{ t('nav.privacy') }}</RouterLink>
				<RouterLink to="/terms" class="hover:text-primary">{{ t('nav.terms') }}</RouterLink>
			</nav>
		</div>
	</footer>
</template> 