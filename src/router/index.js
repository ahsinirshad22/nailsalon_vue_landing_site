import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contact from '@/pages/Contact.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
import Terms from '@/pages/Terms.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', name: 'home', component: Home, meta: { titleKey: 'nav.home', descKey: 'about.text' } },
		{ path: '/contact', name: 'contact', component: Contact, meta: { titleKey: 'nav.contact', descKey: 'contact.subtitle' } },
		{ path: '/privacy-policy', name: 'privacy', component: PrivacyPolicy, meta: { titleKey: 'nav.privacy', descKey: 'legal.lorem' } },
		{ path: '/terms', name: 'terms', component: Terms, meta: { titleKey: 'nav.terms', descKey: 'legal.lorem' } },
	],
	scrollBehavior() {
		return { top: 0 }
	},
})

export default router
