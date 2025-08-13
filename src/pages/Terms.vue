<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const updated = 'January 13, 2025'
</script>

<template>
	<DefaultLayout>
		<section class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate dark:prose-invert max-w-none">
			<div class="text-center mb-12">
				<h1 class="text-4xl font-bold mb-4">{{ t('legal.termsTitle') }}</h1>
				<p class="text-secondary">
					<strong>{{ t('legal.effectiveDate') }}:</strong> {{ updated }}
				</p>
			</div>

			<div class="space-y-8">
				<div>
					<p class="text-lg leading-relaxed">{{ t('legal.terms.intro') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.services') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.servicesText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.account') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.accountText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.use') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.useText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.payment') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.paymentText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.intellectual') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.intellectualText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.privacy') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.privacyText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.disclaimer') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.disclaimerText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.limitation') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.limitationText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.termination') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.terminationText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.governing') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.governingText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.terms.changes') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.changesText') }}</p>
				</div>

				<div class="border-t pt-8">
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.contact') }}</h2>
					<p class="leading-relaxed">{{ t('legal.terms.contactInfo') }}</p>
				</div>
			</div>
		</section>
	</DefaultLayout>
</template> 