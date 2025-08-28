// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_qqpl37i',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_nbc5v8j',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'mZTo8XjlKkIAA_boW'
};

// For development/testing, you can temporarily hardcode your credentials here:
// export const emailjsConfig = {
//   serviceId: 'service_qqpl37i',
//   templateId: 'template_nbc5v8j',
//   publicKey: 'mZTo8XjlKkIAA_boW'
// }; 