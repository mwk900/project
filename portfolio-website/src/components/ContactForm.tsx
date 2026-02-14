import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      // Netlify Forms submission
      const formBody = new URLSearchParams();
      formBody.append('form-name', 'contact');
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 px-6 rounded-xl border border-border-color"
        style={{ backgroundColor: 'var(--secondary-bg)' }}
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Sent!</h3>
        <p className="text-text-secondary">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 px-6 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent/10 transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      className="space-y-5"
    >
      {/* Hidden field for Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-lg border text-text-primary placeholder-text-secondary text-sm transition-colors focus:border-accent focus:ring-0 ${
            errors.name ? 'border-red-500' : 'border-border-color'
          }`}
          style={{ backgroundColor: 'var(--secondary-bg)' }}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-lg border text-text-primary placeholder-text-secondary text-sm transition-colors focus:border-accent focus:ring-0 ${
            errors.email ? 'border-red-500' : 'border-border-color'
          }`}
          style={{ backgroundColor: 'var(--secondary-bg)' }}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          placeholder="What's this about?"
          className={`w-full px-4 py-3 rounded-lg border text-text-primary placeholder-text-secondary text-sm transition-colors focus:border-accent focus:ring-0 ${
            errors.subject ? 'border-red-500' : 'border-border-color'
          }`}
          style={{ backgroundColor: 'var(--secondary-bg)' }}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell me about your project or idea..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border text-text-primary placeholder-text-secondary text-sm transition-colors focus:border-accent focus:ring-0 resize-y ${
            errors.message ? 'border-red-500' : 'border-border-color'
          }`}
          style={{ backgroundColor: 'var(--secondary-bg)' }}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 px-6 rounded-lg bg-accent text-sm font-semibold transition-all hover:scale-[1.02] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        style={{ color: 'var(--primary-bg)' }}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
              <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
