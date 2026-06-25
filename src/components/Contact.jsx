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
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
