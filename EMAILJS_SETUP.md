# EmailJS Setup Guide for Static Build

This project now uses EmailJS instead of Resend for email functionality, making it compatible with static builds.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### 3. Create Email Templates
Create two templates in EmailJS dashboard:

#### Contact Form Template:
- Template Name: "Contact Form"
- Template variables: `{{to_name}}`, `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}`, `{{reply_to}}`
- Note down your **Template ID**

#### Quote Form Template:
- Template Name: "Quote Request"
- Template variables: `{{to_name}}`, `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{address}}`, `{{services}}`, `{{property_type}}`, `{{project_size}}`, `{{timeline}}`, `{{budget}}`, `{{details}}`, `{{reply_to}}`
- Note down your **Template ID**

### 4. Get Public Key
1. In EmailJS dashboard, go to "Account"
2. Find your **Public Key**

### 5. Environment Variables
Create a `.env.local` file with your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT=your_contact_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_QUOTE=your_quote_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Build and Deploy
The project now supports static builds:

```bash
pnpm run build
```

All forms will work on your static site without server-side functionality.

## Benefits
- ✅ Works with static hosting (Netlify, Vercel, GitHub Pages)
- ✅ No server required
- ✅ Free tier available (200 emails/month)
- ✅ Easy to set up and maintain
- ✅ Client-side email sending