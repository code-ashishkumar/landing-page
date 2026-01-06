'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />
      <main className="bg-white pt-[110px] pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="text-xs font-semibold tracking-widest uppercase mb-3 text-primary">
              Contact Us
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">Let's Talk</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Have questions about Praxis? Want to see how we can help your students succeed? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-sm text-gray-600">support@praxis.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                    <p className="text-sm text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Book a Demo</h3>
                    <p className="text-sm text-gray-600">See Praxis in action with a personalized walkthrough</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>Office Hours:</strong><br />
                  Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-gray-50 p-6 rounded-xl  shadow-sm"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none bg-white"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-purpleDark transition shadow-lg shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>


        </div>
      </main>
      <Footer />
    </>
  );
}
