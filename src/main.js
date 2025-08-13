import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './tailwind.css'

import en from '@/locales/en.json'
import vi from '@/locales/vi.json'

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('nailsalon_lang') : null
const i18n = createI18n({
	legacy: false,
	locale: savedLocale || 'en',
	fallbackLocale: 'en',
	messages: { en, vi },
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

// SEO meta per route
function setMetaTag(attr, key, content) {
	let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
	if (!tag) {
		tag = document.createElement('meta')
		tag.setAttribute(attr, key)
		document.head.appendChild(tag)
	}
	tag.setAttribute('content', content)
}
router.afterEach((to) => {
	const t = i18n.global.t
	const title = t(to.meta?.titleKey || 'nav.home') + ' — NailSalon.Club'
	document.title = title
	const desc = t(to.meta?.descKey || 'about.text')
	setMetaTag('name', 'description', desc)
	setMetaTag('property', 'og:title', title)
	setMetaTag('property', 'og:description', desc)
})

// Sync html lang attribute
watch(
	() => i18n.global.locale.value,
	(lang) => {
		if (typeof document !== 'undefined') {
			document.documentElement.setAttribute('lang', lang)
		}
	},
	{ immediate: true }
)

app.mount('#app')
