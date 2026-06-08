import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Mail Me', value: 'madusankadilan226@gmail.com' },
    { icon: Phone, label: 'Call Me', value: '+94 77 4630 350' },
    { icon: MapPin, label: 'Location', value: 'Matara, Sri Lanka' },
  ];

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#060d1f] border-t border-slate-800/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Let&apos;s work together.
            </h2>
            <p className="text-slate-400 text-sm md:text-base mb-10 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#0c1428] border border-slate-800/80"
                >
                  <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm md:text-base font-semibold text-white break-all">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-[#0c1428] border border-slate-800/80 p-6 md:p-8"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <MessageSquare size={18} className="text-blue-400" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={showSuccess}
                    className="w-full bg-[#060d1f] border border-slate-700/80 rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={showSuccess}
                    className="w-full bg-[#060d1f] border border-slate-700/80 rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all disabled:opacity-50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={showSuccess}
                  className="w-full bg-[#060d1f] border border-slate-700/80 rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all disabled:opacity-50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={showSuccess}
                  className="w-full bg-[#060d1f] border border-slate-700/80 rounded-xl p-3 text-sm text-white placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/40 outline-none transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={showSuccess}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Send Message <Send size={16} />
              </button>

              {showSuccess && (
                <p className="text-emerald-400 font-semibold text-center text-sm">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
