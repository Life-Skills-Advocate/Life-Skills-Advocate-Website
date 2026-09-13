'use client';

import React, { useState } from 'react';
import { Form } from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

interface ServiceInquiryFormProps {
  serviceName?: string;
  onSuccess?: () => void;
}

export function ServiceInquiryForm({ serviceName, onSuccess }: ServiceInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceName || '',
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
      const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
      if (!endpoint) {
        console.warn('API endpoint not configured');
        setSubmitStatus('success');
        onSuccess?.();
        return;
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'service-inquiry',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: serviceName || '',
          message: '',
        });
        onSuccess?.();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone"
          type="tel"
          name="phone"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
        />

        {!serviceName && (
          <Input
            label="Service of Interest"
            type="text"
            name="service"
            placeholder="Which service interests you?"
            value={formData.service}
            onChange={handleInputChange}
            fullWidth
          />
        )}
      </div>

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us more about your interest in this service..."
        required
        rows={6}
        value={formData.message}
        onChange={handleInputChange}
        fullWidth
      />

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-green-800">
            Thank you! Your inquiry has been sent. We'll contact you soon to discuss how we can help.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-800">
            There was an error submitting your inquiry. Please try again or contact us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        fullWidth
      >
        Send Inquiry
      </Button>

      <p className="text-sm text-gray-600 text-center">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </Form>
  );
}

export default ServiceInquiryForm;
