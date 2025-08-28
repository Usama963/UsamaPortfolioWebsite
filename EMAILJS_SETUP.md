# EmailJS Setup Instructions

Follow these steps to get EmailJS working with your portfolio contact form:

## 📧 Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## ⚙️ Step 2: Add Email Service

1. In your EmailJS dashboard, click "Add New Service"
2. Choose **Gmail** as your email service
3. Click "Connect Account" and authenticate with your Gmail
4. Give your service a name like "Portfolio Contact"
5. **Copy the Service ID** (something like `service_xxxxxxx`)

## 📝 Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

### Template Settings:

- **Template Name**: Portfolio Contact Form
- **Subject**: Portfolio Contact: {{from_name}}

### Template Content:

```
New contact form submission from your portfolio:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy the Template ID** (something like `template_xxxxxxx`)

## 🔑 Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (something like `xxxxxxxx`)
3. Copy this key

## 🛠️ Step 5: Configure Your Project

### Option A: Environment Variables (Recommended)

Create a `.env.local` file in your `shadcn-ui` folder:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

### Option B: Direct Configuration (For Testing)

Edit `src/config/emailjs.ts` and replace the commented section:

```typescript
export const emailjsConfig = {
  serviceId: "service_xxxxxxx", // Your actual service ID
  templateId: "template_xxxxxxx", // Your actual template ID
  publicKey: "xxxxxxxx", // Your actual public key
};
```

## 🧪 Step 6: Test the Setup

1. Start your development server: `pnpm dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Gmail inbox for the message
5. The status indicator should show "EmailJS configured"

## 📧 Step 7: Email Template Variables

Make sure your EmailJS template uses these variables:

- `{{from_name}}` - Contact person's full name
- `{{from_email}}` - Contact person's email
- `{{message}}` - The message content
- `{{to_email}}` - Your email (osama.azhar963@gmail.com)

## 🎯 Step 8: Optional - Auto Reply Template

Create a second template for automatic replies to users:

### Auto Reply Template:

- **Subject**: Thank you for contacting Usama Azhar
- **Content**:

```
Hi {{from_name}},

Thank you for reaching out! I've received your message and will get back to you within 24 hours.

Best regards,
Usama Azhar
Senior SQA Automation Engineer

---
This is an automated response. Please do not reply to this email.
```

## 🚨 Troubleshooting

### Common Issues:

1. **"Failed to Send Message" Error**

   - Check your Service ID, Template ID, and Public Key
   - Ensure Gmail service is properly connected
   - Check browser console for detailed error messages

2. **Template Variables Not Working**

   - Ensure template uses exact variable names: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Variables are case-sensitive

3. **Emails Not Received**

   - Check your Gmail spam folder
   - Verify the email service connection in EmailJS dashboard
   - Test with a simple template first

4. **Rate Limiting**
   - Free plan allows 200 emails/month
   - Upgrade to paid plan if needed

## 📊 Features Included

✅ **Direct Gmail delivery** - Messages go straight to your inbox  
✅ **Fallback support** - Opens email client if EmailJS fails  
✅ **Error handling** - User-friendly error messages  
✅ **Status indicator** - Shows if EmailJS is configured  
✅ **Form validation** - Prevents spam and validates input  
✅ **Professional formatting** - Clean email templates

## 🔒 Security Notes

- Public Key is safe to expose in client-side code
- Service ID and Template ID are also safe
- Never expose your Private Key in client-side code
- EmailJS has built-in rate limiting and spam protection

## 💡 Next Steps

After setup:

1. Test the form thoroughly
2. Monitor emails in your EmailJS dashboard
3. Consider upgrading to paid plan for more features
4. Set up email filters in Gmail for better organization

---

**Need Help?**

- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact EmailJS Support: https://www.emailjs.com/contact/
