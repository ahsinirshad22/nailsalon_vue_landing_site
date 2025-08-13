<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const updated = '2025-01-01'
</script>

<template>
	<DefaultLayout>
		<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate dark:prose-invert">
			<h1>{{ t('legal.privacyTitle') }}</h1>
			<p><strong>{{ t('legal.updated') }}:</strong> {{ updated }}</p>
			<p>{{ t('legal.lorem') }}</p>
			<h2>Information We Collect</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>How We Use Information</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>Your Rights</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>Contact</h2>
			<p>{{ t('contact.companyEmail') }}</p>
		</section>
	</DefaultLayout>
</template> 