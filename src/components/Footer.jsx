import React from 'react';
import { Github, Linkedin} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              DILAN.DEV
            </a>
            <p className="mt-2 text-slate-500 max-w-xs">
              Designing and building digital products that make a difference.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a href="https://github.com/DilanMadusaanka2000" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dilan-madusanka-694714219/" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>

            </div>
            <div className="text-sm text-slate-500 font-medium">
              © {currentYear} Dilan Madusanka. All rights reserved.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
