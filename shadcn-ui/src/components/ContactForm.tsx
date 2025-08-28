import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "@/config/emailjs";

import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Check if EmailJS is properly configured
      if (emailjsConfig.serviceId === 'your_service_id_here' || 
          emailjsConfig.templateId === 'your_template_id_here' || 
          emailjsConfig.publicKey === 'your_public_key_here') {
        
        // Fallback to mailto if EmailJS is not configured
        console.warn('EmailJS not configured, falling back to mailto');
        
        toast({
          title: "Opening Email Client",
          description: "Please complete the email in your default email application.",
        });

        const subject = encodeURIComponent(`Portfolio Contact: ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:osama.azhar963@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
        
        setIsSubmitting(false);
        return;
      }

      // EmailJS Integration
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: formData.message,
        to_email: 'osama.azhar963@gmail.com',
        reply_to: formData.email
      };

      console.log('Sending email with EmailJS...', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        // Don't log sensitive data
      });

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('EmailJS response:', response);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      });
      
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      setErrors({});
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "There was an issue sending your message. Please try again or contact me directly via email.",
        variant: "destructive"
      });

      // Fallback to mailto on error
      setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:osama.azhar963@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink);
      }, 1000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in discussing quality assurance strategies, automation frameworks, 
              or potential collaboration opportunities. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href="mailto:osama.azhar963@gmail.com" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  osama.azhar963@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href="tel:+923369216911" className="hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  +923369216911
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span className="dark:text-gray-300">Rawalpindi, Pakistan</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Quick Response Guarantee
              </h4>
              <p className="text-blue-600 dark:text-blue-400 text-sm">
                I typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>

            {/* EmailJS Status Indicator */}
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-green-700 dark:text-green-400 text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                {emailjsConfig.serviceId !== 'your_service_id_here' 
                  ? 'Messages sent directly to inbox' 
                  : 'Setup required - Currently using email client fallback'}
              </p>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium dark:text-gray-300">First Name *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`mt-1 ${errors.firstName ? 'border-red-500' : ''}`}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium dark:text-gray-300">Last Name *</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                        <AlertCircle className="h-3 w-3" />
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium dark:text-gray-300">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john.doe@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium dark:text-gray-300">Message *</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`mt-1 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell me about your project, timeline, and specific QA requirements..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-red-500">
                      <AlertCircle className="h-3 w-3" />
                      {errors.message}
                    </div>
                  )}
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    className="w-full flex items-center gap-2" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button" 
                    size="lg" 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://calendly.com/osama-azhar963', '_blank')}
                  >
                    Schedule a Call
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}