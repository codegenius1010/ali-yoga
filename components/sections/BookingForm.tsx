'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';

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

const serviceOptions = [
  'Private Yoga Coaching',
  'Yoga for Golfers',
  'Online Courses',
  'Retreats',
  'Breathwork & Meditation',
];

const experienceOptions = [
  'Beginner',
  'Some experience',
  'Intermediate',
  'Advanced',
];

const sessionFormatOptions = [
  'In-person',
  'Online',
  'Either',
];

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

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.interestedIn) newErrors.interestedIn = 'Please select a service';
    if (!formData.experienceLevel) newErrors.experienceLevel = 'Please select your experience level';
    if (!formData.sessionFormat) newErrors.sessionFormat = 'Please select a session format';
    if (!formData.goals.trim()) newErrors.goals = 'Please tell us about your goals';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Placeholder for actual form submission
      // Replace this with your actual API endpoint
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        setTimeout(() => setSubmitStatus('idle'), 5000);
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
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-slide-up">
          <p className="font-semibold mb-1">Thank you for your inquiry!</p>
          <p className="text-sm">We'll be in touch within 24 hours to confirm your booking.</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && Object.keys(errors).length > 0 && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 animate-slide-up">
          <p className="font-semibold mb-1">Please fix the errors below:</p>
          <ul className="text-sm space-y-1">
            {Object.values(errors).map((error, i) => (
              <li key={i}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-charcoal-brown mb-2">
          Full Name <span className="text-soft-clay">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={errors.name ? 'border-red-500' : ''}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-charcoal-brown mb-2">
          Email <span className="text-soft-clay">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={errors.email ? 'border-red-500' : ''}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-brown mb-2">
          Phone <span className="text-soft-clay">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className={errors.phone ? 'border-red-500' : ''}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-charcoal-brown mb-2">
          Location (City, State)
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., Denver, Colorado"
        />
      </div>

      {/* Interested In */}
      <div>
        <label htmlFor="interestedIn" className="block text-sm font-semibold text-charcoal-brown mb-2">
          What are you interested in? <span className="text-soft-clay">*</span>
        </label>
        <select
          id="interestedIn"
          name="interestedIn"
          value={formData.interestedIn}
          onChange={handleChange}
          className={errors.interestedIn ? 'border-red-500' : ''}
          aria-invalid={!!errors.interestedIn}
          aria-describedby={errors.interestedIn ? 'interestedIn-error' : undefined}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interestedIn && (
          <p id="interestedIn-error" className="mt-1 text-sm text-red-600">
            {errors.interestedIn}
          </p>
        )}
      </div>

      {/* Experience Level */}
      <div>
        <label
          htmlFor="experienceLevel"
          className="block text-sm font-semibold text-charcoal-brown mb-2"
        >
          Your yoga experience <span className="text-soft-clay">*</span>
        </label>
        <select
          id="experienceLevel"
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className={errors.experienceLevel ? 'border-red-500' : ''}
          aria-invalid={!!errors.experienceLevel}
          aria-describedby={errors.experienceLevel ? 'experienceLevel-error' : undefined}
        >
          <option value="">Select your experience level</option>
          {experienceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.experienceLevel && (
          <p id="experienceLevel-error" className="mt-1 text-sm text-red-600">
            {errors.experienceLevel}
          </p>
        )}
      </div>

      {/* Session Format */}
      <div>
        <label
          htmlFor="sessionFormat"
          className="block text-sm font-semibold text-charcoal-brown mb-2"
        >
          Preferred session format <span className="text-soft-clay">*</span>
        </label>
        <select
          id="sessionFormat"
          name="sessionFormat"
          value={formData.sessionFormat}
          onChange={handleChange}
          className={errors.sessionFormat ? 'border-red-500' : ''}
          aria-invalid={!!errors.sessionFormat}
          aria-describedby={errors.sessionFormat ? 'sessionFormat-error' : undefined}
        >
          <option value="">Select a format</option>
          {sessionFormatOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.sessionFormat && (
          <p id="sessionFormat-error" className="mt-1 text-sm text-red-600">
            {errors.sessionFormat}
          </p>
        )}
      </div>

      {/* Goals */}
      <div>
        <label htmlFor="goals" className="block text-sm font-semibold text-charcoal-brown mb-2">
          What are your goals? <span className="text-soft-clay">*</span>
        </label>
        <textarea
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
          placeholder="Tell us what you hope to achieve..."
          rows={3}
          className={errors.goals ? 'border-red-500' : ''}
          aria-invalid={!!errors.goals}
          aria-describedby={errors.goals ? 'goals-error' : undefined}
        />
        {errors.goals && (
          <p id="goals-error" className="mt-1 text-sm text-red-600">
            {errors.goals}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal-brown mb-2">
          Additional message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything else you'd like us to know?"
          rows={3}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Book Your Session'}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-sage text-center">
        We respect your privacy. Your information will only be used to contact you about your booking.
      </p>
    </form>
  );
}
