import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_m05pp42', // Replace with your EmailJS service ID
  templateId: 'template_mycmbao', // Replace with your EmailJS template ID
  publicKey: 'IG0Uz6hk3bF19dSBq', // Replace with your EmailJS public key
}

export async function sendContactEmail(formData) {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: `New Contact Form Submission from ${formData.name}`,
      },
      EMAILJS_CONFIG.publicKey
    )
    
    return { success: true, data: response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error.message }
  }
}

// Alternative: Simple fetch to your own backend API
export async function sendContactEmailToAPI(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to: 'luan@nailsalon.club',
        subject: `New Contact Form Submission from ${formData.name}`,
      }),
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API email sending failed:', error)
    return { success: false, error: error.message }
  }
} 