import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Temporarily display success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together.</h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-8 md:mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-bold opacity-60">Mail Me</div>
                  <div className="text-base sm:text-lg font-bold break-all">madusankadilan226@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-bold opacity-60">Call Me</div>
                  <div className="text-base sm:text-lg font-bold">+94 77 4630 350</div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-sm font-bold opacity-60">Location</div>
                  <div className="text-base sm:text-lg font-bold">Matara Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <MessageSquare className="text-primary w-5 h-5 sm:w-6 sm:h-6" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 opacity-70">Your Name</label>
                  <input
                    type="text" id="name" required
                    value={formData.name} onChange={handleChange}
                    disabled={showSuccess}
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 opacity-70">Your Email</label>
                  <input
                    type="email" id="email" required
                    value={formData.email} onChange={handleChange}
                    disabled={showSuccess}
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="youemail@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 opacity-70">Subject</label>
                <input
                  type="text" id="subject" required
                  value={formData.subject} onChange={handleChange}
                  disabled={showSuccess}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 opacity-70">Message</label>
                <textarea
                  id="message" rows="4" required
                  value={formData.message} onChange={handleChange}
                  disabled={showSuccess}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={showSuccess}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 sm:py-5 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 sm:gap-3 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-sm sm:text-base"
              >
                Send Message <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              {showSuccess && (
                <div className="text-emerald-600 dark:text-emerald-400 font-bold text-center mt-4 text-sm sm:text-base">
                  Applied successfully!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
