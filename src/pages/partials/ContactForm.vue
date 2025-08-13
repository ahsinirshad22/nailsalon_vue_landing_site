<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { sendContactEmail } from '@/utils/email'

const { t } = useI18n()

const form = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const submitting = ref(false)
const success = ref(false)
const error = ref('')

function validateName() {
	return form.name.trim().length > 0
}
function validateEmail() {
	return /.+@.+\..+/.test(form.email)
}
function validateMessage() {
	return form.message.trim().length >= 10
}

const errors = {
	name: () => (!validateName() && touched.name ? t('contact.errors.name') : ''),
	email: () => (!validateEmail() && touched.email ? t('contact.errors.email') : ''),
	message: () => (!validateMessage() && touched.message ? t('contact.errors.message') : ''),
}

async function onSubmit() {
	touched.name = true
	touched.email = true
	touched.message = true
	if (!validateName() || !validateEmail() || !validateMessage()) return
	
	submitting.value = true
	error.value = ''
	
	try {
		const result = await sendContactEmail(form)
		
		if (result.success) {
			success.value = true
			Object.assign(form, { name: '', email: '', message: '' })
			touched.name = touched.email = touched.message = false
		} else {
			error.value = result.error || 'Failed to send message. Please try again.'
		}
	} catch (err) {
		error.value = 'An unexpected error occurred. Please try again.'
		console.error('Form submission error:', err)
	} finally {
		submitting.value = false
	}
}
</script>

<template>
	<form @submit.prevent="onSubmit" class="mt-6 space-y-4">
		<div>
			<label for="name" class="block text-sm font-medium">{{ t('contact.name') }}</label>
			<input
				id="name"
				type="text"
				v-model="form.name"
				@blur="touched.name = true"
				class="mt-1 block w-full rounded-md border-secondary/30 focus:border-accent focus:ring-accent"
				:aria-invalid="!!errors.name()"
				:aria-describedby="errors.name() ? 'name-error' : undefined"
			/>
			<p v-if="errors.name()" id="name-error" class="mt-1 text-sm text-red-600">{{ errors.name() }}</p>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium">{{ t('contact.email') }}</label>
			<input
				id="email"
				type="email"
				v-model="form.email"
				@blur="touched.email = true"
				class="mt-1 block w-full rounded-md border-secondary/30 focus:border-accent focus:ring-accent"
				:aria-invalid="!!errors.email()"
				:aria-describedby="errors.email() ? 'email-error' : undefined"
			/>
			<p v-if="errors.email()" id="email-error" class="mt-1 text-sm text-red-600">{{ errors.email() }}</p>
		</div>
		<div>
			<label for="message" class="block text-sm font-medium">{{ t('contact.message') }}</label>
			<textarea
				id="message"
				rows="4"
				v-model="form.message"
				@blur="touched.message = true"
				class="mt-1 block w-full rounded-md border-secondary/30 focus:border-accent focus:ring-accent"
				:aria-invalid="!!errors.message()"
				:aria-describedby="errors.message() ? 'message-error' : undefined"
			></textarea>
			<p v-if="errors.message()" id="message-error" class="mt-1 text-sm text-red-600">{{ errors.message() }}</p>
		</div>
		<div class="pt-2">
			<button type="submit" class="btn-accent" :disabled="submitting">
				<span v-if="submitting">Sending...</span>
				<span v-else>{{ t('contact.submit') }}</span>
			</button>
			<p v-if="success" class="mt-3 text-green-600">{{ t('contact.success') }}</p>
			<p v-if="error" class="mt-3 text-red-600">{{ error }}</p>
		</div>
	</form>
</template> 