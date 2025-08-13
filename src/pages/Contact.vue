<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ContactForm from '@/pages/partials/ContactForm.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
	<DefaultLayout>
		<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<h1 class="text-3xl font-semibold">{{ t('contact.title') }}</h1>
			<p class="text-secondary">{{ t('contact.subtitle') }}</p>

			<div class="mt-8 grid lg:grid-cols-2 gap-10">
				<div>
					<ContactForm />
				</div>
				<div class="space-y-4">
					<div class="rounded-xl border border-secondary/20 p-6 bg-white dark:bg-darkbg/60">
						<h2 class="font-semibold mb-2">{{ t('nav.contact') }}</h2>
						<p class="text-secondary">{{ t('contact.address') }}</p>
						<p class="text-secondary">{{ t('contact.phone') }}</p>
						<p class="text-secondary">{{ t('contact.companyEmail') }}</p>
					</div>
					<div class="rounded-xl overflow-hidden border border-secondary/20 h-64">
						<iframe
							title="Google Map"
							width="100%"
							height="100%"
							style="border:0"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.1234567890123!2d-97.34567890123456!3d32.87654321098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7b8b9c1a2b3c%3A0x4d5e6f7g8h9i0j1k!2s8653%20N%20Beach%20St%2C%20Fort%20Worth%2C%20TX%2076244!5e0!3m2!1sen!2sus!4v1703123456789"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	</DefaultLayout>
</template> 