'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  interestedIn: string;
  experienceLevel: string;
  sessionFormat: string;
  goals: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    interestedIn: '',
    experienceLevel: '',
    sessionFormat: '',
    goals: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.interestedIn) {
      newErrors.interestedIn = 'Please select a service';
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select your experience level';
    }

    if (!formData.sessionFormat) {
      newErrors.sessionFormat = 'Please select a session format';
    }

    if (!formData.goals.trim()) {
      newErrors.goals = 'Please tell us about your goals';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Placeholder for form submission
      // In production, this would send to your backend/email service
      // Example integration points:
      // - Send to backend API: POST /api/contact
      // - Send to email service: SendGrid, Mailgun, Resend
      // - Send to CRM: HubSpot, Pipedrive
      // - Store in database: Firebase, Supabase, PostgreSQL
      console.log('Form data:', formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success state
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        interestedIn: '',
        experienceLevel: '',
        sessionFormat: '',
        goals: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-sage/20 border border-sage rounded-lg">
          <h3 className="font-semibold text-charcoal-brown mb-1">
            ✓ Thanks for reaching out!
          </h3>
          <p className="text-deep-olive">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-orange-100 border border-orange-300 rounded-lg">
          <h3 className="font-semibold text-charcoal-brown mb-1">
            Something went wrong
          </h3>
          <p className="text-deep-olive">
            Please try again or contact us directly. We're here to help!
          </p>
        </div>
      )}

      {/* Contact Information Section */}
      <div>
        <h2 className="text-2xl font-serif font-bold text-charcoal-brown mb-4">
          Your Information
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.name ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-600 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-600 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.phone ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-600 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Location / City *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Austin, TX or Remote"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.location ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? 'location-error' : undefined}
          />
          {errors.location && (
            <p id="location-error" className="text-red-600 text-sm mt-1">
              {errors.location}
            </p>
          )}
        </div>
      </div>

      {/* Service Preferences Section */}
      <div className="border-t border-warm-sand pt-6">
        <h2 className="text-2xl font-serif font-bold text-charcoal-brown mb-4">
          Your Preferences
        </h2>

        {/* Interested In */}
        <div className="mb-4">
          <label htmlFor="interestedIn" className="block text-sm font-semibold text-charcoal-brown mb-2">
            What are you interested in? *
          </label>
          <select
            id="interestedIn"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.interestedIn ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.interestedIn}
            aria-describedby={errors.interestedIn ? 'interestedIn-error' : undefined}
          >
            <option value="">Select a service...</option>
            <option value="Private Yoga Coaching">Private Yoga Coaching</option>
            <option value="Yoga for Golfers">Yoga for Golfers</option>
            <option value="Online Courses">Online Courses</option>
            <option value="Yoga Retreats">Yoga Retreats</option>
            <option value="Breathwork & Meditation">Breathwork & Meditation</option>
            <option value="Not Sure">Not Sure - Tell Me More!</option>
          </select>
          {errors.interestedIn && (
            <p id="interestedIn-error" className="text-red-600 text-sm mt-1">
              {errors.interestedIn}
            </p>
          )}
        </div>

        {/* Experience Level */}
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Yoga Experience Level *
          </label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.experienceLevel ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.experienceLevel}
            aria-describedby={errors.experienceLevel ? 'experienceLevel-error' : undefined}
          >
            <option value="">Select level...</option>
            <option value="Beginner">Beginner (No prior experience)</option>
            <option value="Some Experience">Some Experience (A few classes)</option>
            <option value="Intermediate">Intermediate (Regular practice)</option>
            <option value="Advanced">Advanced (Consistent practice)</option>
          </select>
          {errors.experienceLevel && (
            <p id="experienceLevel-error" className="text-red-600 text-sm mt-1">
              {errors.experienceLevel}
            </p>
          )}
        </div>

        {/* Session Format */}
        <div className="mb-4">
          <label htmlFor="sessionFormat" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Preferred Session Format *
          </label>
          <select
            id="sessionFormat"
            name="sessionFormat"
            value={formData.sessionFormat}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.sessionFormat ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.sessionFormat}
            aria-describedby={errors.sessionFormat ? 'sessionFormat-error' : undefined}
          >
            <option value="">Select format...</option>
            <option value="In-Person">In-Person (Local sessions)</option>
            <option value="Virtual">Virtual (Online via Zoom)</option>
            <option value="Hybrid">Hybrid (Mix of both)</option>
            <option value="Not Sure">Not Sure Yet</option>
          </select>
          {errors.sessionFormat && (
            <p id="sessionFormat-error" className="text-red-600 text-sm mt-1">
              {errors.sessionFormat}
            </p>
          )}
        </div>

        {/* Goals */}
        <div className="mb-4">
          <label htmlFor="goals" className="block text-sm font-semibold text-charcoal-brown mb-2">
            What are your main goals? *
          </label>
          <input
            type="text"
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="e.g., Improve flexibility, Better golf swing, Reduce stress, Build strength..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors ${
              errors.goals ? 'border-red-400 bg-red-50' : 'border-warm-sand bg-white'
            }`}
            aria-invalid={!!errors.goals}
            aria-describedby={errors.goals ? 'goals-error' : undefined}
          />
          {errors.goals && (
            <p id="goals-error" className="text-red-600 text-sm mt-1">
              {errors.goals}
            </p>
          )}
        </div>
      </div>

      {/* Message Section */}
      <div className="border-t border-warm-sand pt-6">
        <h2 className="text-2xl font-serif font-bold text-charcoal-brown mb-4">
          Additional Information
        </h2>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal-brown mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us anything else we should know about your yoga journey, constraints, or questions..."
            rows={5}
            className="w-full px-4 py-3 border border-warm-sand rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-clay transition-colors resize-none"
          />
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="border-t border-warm-sand pt-6">
        <p className="text-xs text-sage mb-6">
          We respect your privacy. Your information will only be used to contact you about your
          yoga coaching inquiry. We never share your data with third parties.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>

      {/* Additional CTA */}
      <div className="mt-12 p-6 bg-cream rounded-lg border border-warm-sand text-center">
        <h3 className="text-lg font-semibold text-charcoal-brown mb-2">
          Prefer to chat first?
        </h3>
        <p className="text-deep-olive mb-4">
          Feel free to explore our services or read more about Ali's background.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/about" className="btn btn-secondary">
            Learn About Ali
          </Link>
          <Link href="/yoga-for-golfers" className="btn btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </form>
  );
}