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
				<h1 class="text-4xl font-bold mb-4">{{ t('legal.privacyTitle') }}</h1>
				<p class="text-secondary">
					<strong>{{ t('legal.effectiveDate') }}:</strong> {{ updated }}
				</p>
			</div>

			<div class="space-y-8">
				<div>
					<p class="text-lg leading-relaxed">{{ t('legal.privacy.intro') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.collect') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.collectText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.use') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.useText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.share') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.shareText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.cookies') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.cookiesText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.security') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.securityText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.rights') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.rightsText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.children') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.childrenText') }}</p>
				</div>

				<div>
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.privacy.changes') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.changesText') }}</p>
				</div>

				<div class="border-t pt-8">
					<h2 class="text-2xl font-semibold mb-4">{{ t('legal.contact') }}</h2>
					<p class="leading-relaxed">{{ t('legal.privacy.contactInfo') }}</p>
				</div>
			</div>
		</section>
	</DefaultLayout>
</template> 