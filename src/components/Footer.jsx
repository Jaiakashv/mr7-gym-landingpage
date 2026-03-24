import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 opacity-80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <Link to="/" className="flex items-center gap-2 justify-center md:justify-start mb-4">
            <div className="bg-primary-gold p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-black" strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">MR7 FITNESS</span>
          </Link>
          <p className="text-white/40 text-sm">© 2025 M7 FITNESS. ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex gap-10">
          <Instagram className="w-6 h-6 text-white/40 hover:text-primary-gold cursor-pointer" />
          <Facebook className="w-6 h-6 text-white/40 hover:text-primary-gold cursor-pointer" />
          <Twitter className="w-6 h-6 text-white/40 hover:text-primary-gold cursor-pointer" />
          <Mail className="w-6 h-6 text-white/40 hover:text-primary-gold cursor-pointer" />
        </div>

        <div className="hidden md:flex gap-12 text-xs font-black tracking-widest text-white/40">
          <a href="#" className="hover:text-primary-gold transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-primary-gold transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
