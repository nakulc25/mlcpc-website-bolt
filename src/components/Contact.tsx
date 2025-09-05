import React, { useState } from 'react';
import { Clock, CheckCircle, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../config/siteConfig';
import { 
  sanitizeInput, 
  isValidEmail,
  isValidName,
  isValidMessage,
  contactFormRateLimiter,
  isValidExternalUrl
} from '../utils/security';
import { logger } from '../utils/logger';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    urgent: false
  });

  const handleScheduleClick = () => {
    if (siteConfig.booking.enabled && 
        siteConfig.booking.calendlyUrl && 
        isValidExternalUrl(siteConfig.booking.calendlyUrl)) {
      window.open(siteConfig.booking.calendlyUrl, '_blank');
    } else {
      // Fallback to contact section, which is this component.
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!isValidName(formData.name)) {
      errors.name = 'Name must contain only letters, spaces, hyphens, and apostrophes (1-100 characters)';
    }
    
    if (!isValidEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!isValidMessage(formData.message)) {
      errors.message = 'Message must be between 10 and 5000 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Please correct the errors below and try again.'
      });
      return;
    }
    
    // Rate limiting check
    if (!contactFormRateLimiter.isAllowed('contact-form')) {
      setFormStatus({
        type: 'error',
        message: 'Too many attempts. Please wait 5 minutes before trying again.'
      });
      return;
    }
    
    setFormStatus({ type: 'loading', message: 'Sending message...' });
    
    try {
      // Sanitize all inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
        urgent: formData.urgent
      };
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        message: sanitizedData.message,
        to_email: siteConfig.email.toEmail,
        urgent: sanitizedData.urgent ? 'Yes - URGENT' : 'No',
        subject: sanitizedData.urgent 
          ? `URGENT: New Contact Form Submission from ${sanitizedData.name}`
          : `New Contact Form Submission from ${sanitizedData.name}`
      };

      // Send email using EmailJS
      await emailjs.send(
        siteConfig.email.serviceId,
        siteConfig.email.templateId,
        templateParams,
        siteConfig.email.publicKey
      );

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        urgent: false
      });
      
      // Clear errors
      setFormErrors({});
      
    } catch (error) {
      logger.error('Failed to send contact form email', error as Error, {
        formData: { name: sanitizedData.name, email: sanitizedData.email, urgent: sanitizedData.urgent }
      });
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Clear specific field error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const resetStatus = () => {
    setFormStatus({ type: 'idle', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Get in touch</h2>
            
            {/* Status Message */}
            {formStatus.type !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                formStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : formStatus.type === 'error'
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}>
                {formStatus.type === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                {formStatus.type === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0"></div>}
                <span>{formStatus.message}</span>
                {formStatus.type !== 'loading' && (
                  <button 
                    onClick={resetStatus}
                    className="ml-auto text-sm underline hover:no-underline"
                  >
                    Dismiss
                  </button>
                )}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${
                    formErrors.name ? 'border-red-500' : 'border-yellow-500'
                  }`}
                  disabled={formStatus.type === 'loading'}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${
                    formErrors.email ? 'border-red-500' : 'border-yellow-500'
                  }`}
                  disabled={formStatus.type === 'loading'}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-vertical ${
                    formErrors.message ? 'border-red-500' : 'border-yellow-500'
                  }`}
                  disabled={formStatus.type === 'loading'}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                )}
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="urgent"
                  name="urgent"
                  checked={formData.urgent}
                  onChange={handleChange}
                  className="w-4 h-4 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
                  disabled={formStatus.type === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Urgent Consultation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-emerald-700 text-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Looking for consultation?</h3>
              </div>

              
              <div className="space-y-4">

                <div className="mt-6">
                  <button 
                    onClick={handleScheduleClick}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg text-center text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <p className="text-lg font-semibold">Free {siteConfig.consultation.freeMinutes}-minute Consultation</p>
                  </button>
                </div>

                
                <div className="text-sm text-emerald-100">
                  <p>{siteConfig.consultation.description}</p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;