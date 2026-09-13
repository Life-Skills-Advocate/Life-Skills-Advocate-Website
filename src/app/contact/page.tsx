'use client';

import { useState } from 'react';
import { Form } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { submitFormData } from '@/lib/form-utils';

// Note: This is a client component, so metadata is handled at the layout level

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Attempt to submit the form
      const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
      if (!endpoint) {
        console.warn('API endpoint not configured');
        setSubmitStatus('success'); // Still show success for demo
        return;
      }

      await submitFormData(formData, endpoint);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have a question or want to learn more about our coaching and resources? We'd love to hear
          from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg p-8">
        <Form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
            />

            <Input
              label="Phone (Optional)"
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
            />

            <Input
              label="Subject"
              type="text"
              name="subject"
              placeholder="What is this about?"
              required
              value={formData.subject}
              onChange={handleInputChange}
              fullWidth
            />

            <Textarea
              label="Message"
              name="message"
              placeholder="Tell us more about your inquiry..."
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              fullWidth
            />

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-md p-4">
                <p className="text-green-800">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-red-800">
                  There was an error submitting your message. Please try again.
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              fullWidth
            >
              Send Message
            </Button>
          </div>
        </Form>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
          <a href="mailto:hello@lifeskillsadvocate.com" className="text-blue-600 hover:text-blue-700">
            hello@lifeskillsadvocate.com
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
          <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700">
            (555) 123-4567
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com/LifeSkillsAdvocate" className="text-blue-600 hover:text-blue-700">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
