import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-32 pt-40 min-h-screen bg-white/2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6 mb-20">
          <h2 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase">
            Discover<br />
            What <span className="text-primary-gold">Sets Us Apart</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'QUALITY TRAINING', desc: 'Expert led sessions focused on form and results.' },
            { title: 'MODERN GYM', desc: 'Top of the line equipment for maximal efficiency.' },
            { title: 'PRO TRAINER', desc: 'World class coaches at your service every day.' },
            { title: 'FREE SUPPLEMENTS', desc: 'Complementary pre-workout and protein for members.' },
          ].map((service, i) => (
            <div key={i} className="group p-8 bg-[#0b0c07] border border-white/5 rounded-3xl hover:border-primary-gold/30 transition-all duration-500 text-left">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-gold transition-colors">
                <Play className="w-5 h-5 text-primary-gold group-hover:text-black fill-current" />
              </div>
              <h3 className="text-xl font-black italic mb-4 tracking-tight">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">{service.desc}</p>
              <button className="text-xs font-black tracking-widest flex items-center gap-2 group-hover:text-primary-gold transition-colors">
                JOIN NOW <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
