<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
	<div class="min-h-screen bg-lightbg text-gray-900 dark:bg-darkbg dark:text-gray-100">
		<Navbar />
		<main class="pt-16">
			<slot />
		</main>
		<Footer />
	</div>
</template> 