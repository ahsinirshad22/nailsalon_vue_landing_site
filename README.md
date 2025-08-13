# NailSalon.Club Landing Page

A modern, responsive Vue.js 3 landing page for NailSalon.Club with multilingual support (English/Vietnamese), dark mode, and contact form email functionality.

## Features

- 🌐 **Multilingual**: English and Vietnamese support
- 🌙 **Dark/Light Mode**: Toggle with localStorage persistence
- 📱 **Responsive**: Mobile-first design
- 📧 **Contact Form**: Email functionality via SMTP
- ⚡ **Fast**: Built with Vite and Vue 3
- 🎨 **Modern UI**: Tailwind CSS with custom design system

## Email Setup

### Option 1: EmailJS (Frontend Only)

1. **Sign up for EmailJS**:
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Create Email Service**:
   - Add your email provider (Gmail, Outlook, etc.)
   - Configure SMTP settings

3. **Create Email Template**:
   - Create a new email template
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

4. **Update Configuration**:
   - Edit `src/utils/email.js`
   - Replace placeholder values:
     ```javascript
     const EMAILJS_CONFIG = {
       serviceId: 'YOUR_EMAILJS_SERVICE_ID',
       templateId: 'YOUR_EMAILJS_TEMPLATE_ID', 
       publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
     }
     ```

### Option 2: Backend API (Recommended for Production)

1. **Install Dependencies**:
   ```bash
   npm install nodemailer
   ```

2. **Environment Variables**:
   Create `.env` file:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Gmail Setup** (if using Gmail):
   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in SMTP_PASS

4. **Update Frontend**:
   - In `src/utils/email.js`, uncomment the `sendContactEmailToAPI` function
   - Update the API endpoint URL if needed

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable Vue components
├── layouts/            # Page layouts
├── locales/            # i18n translation files
├── pages/              # Page components
├── store/              # Pinia state management
├── utils/              # Utility functions (email, etc.)
└── router/             # Vue Router configuration
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary`: Black (#000000)
- `accent`: Gold (#D4A373)
- `secondary`: Gray (#6B7280)

### Content
- Update translations in `src/locales/en.json` and `src/locales/vi.json`
- Modify contact information in translation files
- Update Google Maps embed URL in `src/pages/Contact.vue`

### Logo
Place your logo as `public/logo.png` and it will be automatically used in the navbar.

## Deployment

### Vercel/Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### With Backend API
1. Deploy backend API separately
2. Update API endpoint in `src/utils/email.js`
3. Configure CORS on backend if needed

## License

Private - All rights reserved.
