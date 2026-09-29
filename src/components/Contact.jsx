import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-4 h-4" />;
      case 'linkedin':
        return <FaLinkedin className="w-4 h-4" />;
      default:
        return <FaXTwitter className="w-4 h-4" />;
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch for collaborative opportunities, full-stack systems engineering, and technical discussions."
        />

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column */}
          <div className="cyber-card p-6 sm:p-8 space-y-6 border border-[rgba(255,31,61,0.25)]">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
                {contact.heading}
              </h3>
              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Whether you have an upcoming full-stack project, an AI integration requirement, or want to discuss modern distributed architecture—feel free to drop a message.
              </p>
            </div>

            {/* Rows for email, phone, location (red icon squares) */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_12px_rgba(255,31,61,0.2)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-medium text-zinc-200 hover:text-[#ff1f3d] transition-colors truncate block"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_12px_rgba(255,31,61,0.2)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium text-zinc-200 hover:text-[#ff1f3d] transition-colors truncate block"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_12px_rgba(255,31,61,0.2)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Location</span>
                  <span className="text-sm font-medium text-zinc-200 truncate block">
                    {contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-[rgba(255,31,61,0.15)]">
              <span className="text-xs font-mono text-zinc-500 uppercase block mb-3">
                Social Profiles & Networks
              </span>
              <div className="flex items-center gap-3">
                {contact.socials.map((social, sIdx) => (
                  <a
                    key={sIdx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#050203] border border-[rgba(255,31,61,0.3)] flex items-center justify-center text-zinc-300 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_14px_rgba(255,31,61,0.35)] transition-all"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="cyber-card p-6 sm:p-8 border border-[rgba(255,31,61,0.25)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5 font-medium">
                  Name <span className="text-[#ff1f3d]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-[#0b0507] border border-[rgba(255,31,61,0.25)] focus:border-[#ff1f3d] focus:ring-1 focus:ring-[#ff1f3d] outline-none rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-600 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5 font-medium">
                  Email <span className="text-[#ff1f3d]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-[#0b0507] border border-[rgba(255,31,61,0.25)] focus:border-[#ff1f3d] focus:ring-1 focus:ring-[#ff1f3d] outline-none rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-600 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5 font-medium">
                  Subject <span className="text-zinc-600 text-xs font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  className="w-full bg-[#0b0507] border border-[rgba(255,31,61,0.25)] focus:border-[#ff1f3d] focus:ring-1 focus:ring-[#ff1f3d] outline-none rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-600 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5 font-medium">
                  Message <span className="text-[#ff1f3d]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full bg-[#0b0507] border border-[rgba(255,31,61,0.25)] focus:border-[#ff1f3d] focus:ring-1 focus:ring-[#ff1f3d] outline-none rounded-lg px-3.5 py-2.5 text-white text-sm placeholder:text-zinc-600 transition-all resize-none"
                />
              </div>

              {/* Inline Success Notice */}
              {submitted && (
                <div className="p-3 rounded-lg bg-[rgba(255,31,61,0.1)] border border-[#ff1f3d] flex items-center gap-2.5 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff1f3d] shrink-0 drop-shadow-[0_0_6px_#ff1f3d]" />
                  <span>Thanks! Your message was sent.</span>
                </div>
              )}

              {/* Submit button "Send Message" in solid red (#ff1f3d), rounded-lg */}
              <button
                type="submit"
                className="w-full bg-[#ff1f3d] hover:bg-[#e01431] text-white font-medium px-5 py-3 rounded-lg shadow-[0_0_20px_rgba(255,31,61,0.35)] hover:shadow-[0_0_28px_rgba(255,31,61,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
