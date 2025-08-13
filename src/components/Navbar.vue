<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import Logo from '@/components/Logo.vue'

const isScrolled = ref(false)
const route = useRoute()
const { t } = useI18n()

onMounted(() => {
	const onScroll = () => {
		isScrolled.value = window.scrollY > 10
	}
	window.addEventListener('scroll', onScroll, { passive: true })
	onScroll()
})
</script>

<template>
	<header
		class="fixed top-0 inset-x-0 z-50 transition-all"
		:class="isScrolled || route.path !== '/' ? 'bg-white/90 dark:bg-darkbg/90 backdrop-blur border-b border-secondary/20' : 'bg-transparent'"
	>

		<nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
			<RouterLink to="/" class="text-xl font-semibold text-primary dark:text-white"><Logo></Logo></RouterLink>
			<div class="hidden md:flex items-center gap-6">
				<RouterLink to="/" class="hover:text-primary dark:hover:text-white">{{ t('nav.home') }}</RouterLink>
				<RouterLink to="/contact" class="hover:text-primary dark:hover:text-white">{{ t('nav.contact') }}</RouterLink>
				<RouterLink to="/privacy-policy" class="hover:text-primary dark:hover:text-white">{{ t('nav.privacy') }}</RouterLink>
				<RouterLink to="/terms" class="hover:text-primary dark:hover:text-white">{{ t('nav.terms') }}</RouterLink>
			</div>
			<div class="flex items-center gap-3">
				<LanguageSwitcher />
				<ThemeToggle />
				<RouterLink to="/contact" class="btn-accent hidden sm:inline-flex">{{ t('nav.getStarted') }}</RouterLink>
			</div>
		</nav>
	</header>
</template> 