<script setup>
import { useI18n } from 'vue-i18n'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import TestimonialCarousel from '@/components/TestimonialCarousel.vue'

const { t, tm } = useI18n()
</script>

<template>
	<DefaultLayout>
		<!-- Hero -->
		<section class="relative overflow-hidden">
			<div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-white to-secondary/5 dark:from-white/5 dark:via-darkbg dark:to-secondary/10"></div>
			<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
				<div class="max-w-2xl">
					<h1 class="text-4xl sm:text-5xl font-bold leading-tight">{{ t('hero.title') }}</h1>
					<p class="mt-4 text-lg text-secondary max-w-xl">{{ t('hero.subtitle') }}</p>
					<div class="mt-8 flex items-center gap-4">
						<a href="#pricing" class="btn-accent">{{ t('hero.ctaPrimary') }}</a>
						<a href="#about" class="btn-secondary">{{ t('hero.ctaSecondary') }}</a>
					</div>
				</div>
			</div>
		</section>

		<!-- About -->
		<section id="about" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold">{{ t('about.title') }}</h2>
			<p class="mt-3 text-secondary max-w-3xl">{{ t('about.text') }}</p>
		</section>

		<!-- How It Works -->
		<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold">{{ t('howItWorks.title') }}</h2>
			<div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<div v-for="(s, i) in tm('howItWorks.steps')" :key="i" class="rounded-xl p-6 border border-secondary/20 bg-white dark:bg-darkbg/60">
					<div class="text-2xl font-bold text-accent">{{ i + 1 }}</div>
					<h3 class="mt-3 font-semibold">{{ s.title }}</h3>
					<p class="mt-2 text-secondary">{{ s.text }}</p>
				</div>
			</div>
		</section>

		<!-- Features -->
		<section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold">{{ t('features.title') }}</h2>
			<div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<FeatureCard v-for="(f, i) in tm('features.items')" :key="i" :title="f.title" :text="f.text" />
			</div>
		</section>

		<!-- Testimonials -->
		<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold text-center">{{ t('testimonials.title') }}</h2>
			<div class="mt-8">
				<TestimonialCarousel :items="tm('testimonials.items')" />
			</div>
		</section>

		<!-- Pricing -->
		<section id="pricing" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold">{{ t('pricing.title') }}</h2>
			<div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<div
					v-for="(p, i) in tm('pricing.plans')"
					:key="i"
					class="rounded-xl border border-secondary/20 p-6 bg-white dark:bg-darkbg/60 flex flex-col"
				>
					<h3 class="text-xl font-semibold">{{ p.name }}</h3>
					<p class="mt-2 text-3xl font-bold text-accent">{{ p.price }}</p>
					<ul class="mt-4 space-y-2 text-secondary flex-1">
						<li v-for="(feat, j) in p.features" :key="j">• {{ feat }}</li>
					</ul>
					<button class="btn-accent mt-6">{{ t('pricing.cta') }}</button>
				</div>
			</div>
		</section>

		<!-- Contact form -->
		<section class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
			<h2 class="text-2xl font-semibold">{{ t('contact.title') }}</h2>
			<p class="text-secondary">{{ t('contact.subtitle') }}</p>
			<ContactForm />
		</section>
	</DefaultLayout>
</template>

<script>
import ContactForm from '@/pages/partials/ContactForm.vue'
export default {
	components: { ContactForm },
}
</script> 