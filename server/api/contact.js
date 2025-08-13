// Example backend API endpoint for sending emails via SMTP
// This would be used with a Node.js/Express backend

import nodemailer from 'nodemailer'

// SMTP Configuration
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
  port: process.env.SMTP_PORT, // e.g., 587
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // your email password or app password
  },
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, message, to, subject } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: to || 'luan@nailsalon.club',
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from NailSalon.Club contact form</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        Sent from NailSalon.Club contact form
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Email sent:', info.messageId)
    
    res.status(200).json({ 
      success: true, 
      messageId: info.messageId,
      message: 'Email sent successfully' 
    })
    
  } catch (error) {
    console.error('Email sending failed:', error)
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    })
  }
} 