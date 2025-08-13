<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const updated = '2025-01-01'
</script>

<template>
	<DefaultLayout>
		<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate dark:prose-invert">
			<h1>{{ t('legal.termsTitle') }}</h1>
			<p><strong>{{ t('legal.updated') }}:</strong> {{ updated }}</p>
			<h2>Agreement to Terms</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>User Responsibilities</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>Limitation of Liability</h2>
			<p>{{ t('legal.lorem') }}</p>
			<h2>Contact</h2>
			<p>{{ t('contact.companyEmail') }}</p>
		</section>
	</DefaultLayout>
</template> 