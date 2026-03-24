import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b0c07]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-gold p-1.5 rounded-lg">
              <Dumbbell className="w-6 h-6 text-black" strokeWidth={3} />
            </div>
            <span className="text-2xl font-black tracking-tighter italic">MR7 FITNESS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-bold tracking-widest transition-colors ${location.pathname === item.path
                    ? 'text-primary-gold'
                    : 'text-white/70 hover:text-primary-gold'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-primary-gold text-black px-6 py-2 rounded-full text-sm font-black hover:bg-accent-gold transition-all transform hover:scale-105">
              JOIN NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0b0c07] border-b border-white/5 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block text-lg font-bold tracking-widest ${location.pathname === item.path
                  ? 'text-primary-gold'
                  : 'text-white/70 hover:text-primary-gold'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full py-3 text-center font-bold border border-white/10 rounded-full">LOG IN</button>
            <button className="w-full py-3 text-center font-black bg-primary-gold text-black rounded-full">JOIN NOW</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
