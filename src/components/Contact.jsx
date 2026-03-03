import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully (Check console)!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-60">Mail Me</div>
                  <div className="text-lg font-bold">madusankadilan226@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-60">Call Me</div>
                  <div className="text-lg font-bold">+94 77 4630 350</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="text-sm font-bold opacity-60">Location</div>
                  <div className="text-lg font-bold">Matara Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-primary" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 opacity-70">Your Name</label>
                  <input
                    type="text" id="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="John Snow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 opacity-70">Your Email</label>
                  <input
                    type="email" id="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 opacity-70">Subject</label>
                <input
                  type="text" id="subject" required
                  value={formData.subject} onChange={handleChange}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 opacity-70">Message</label>
                <textarea
                  id="message" rows="4" required
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center gap-3 transition-all hover:-translate-y-1"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
