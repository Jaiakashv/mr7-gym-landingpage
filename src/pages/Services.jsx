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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'QUALITY TRAINING', desc: 'Expert led sessions focused on form and results.', bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop' },
            { title: 'MODERN GYM', desc: 'Top of the line equipment for maximal efficiency.', bgImage: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop' },
            { title: 'PRO TRAINER', desc: 'World class coaches at your service every day.', bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop' },
            { title: 'PERSONAL TRAINING', desc: '1-on-1 personalized coaching tailored to your fitness goals.', bgImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop' },
            { title: 'BEGINNER TIPS', desc: "Are you looking to start your fitness journey with a beginner weight-lifting routine? Or perhaps you're interested in some simple cardio workouts for beginners?", bgImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop' },
            { title: 'NUTRITION SUPPORT', desc: 'You can discover a nutrition plan based on your food preferences, dietary requirements and incorporating your body goal needs. We will include your favourite foods and offer a short-term sustainable plan.', bgImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop' },
            { title: 'WEIGHT GAIN', desc: 'Tailored for individuals aiming to build muscle mass and achieve a healthy weight increase.', bgImage: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1470&auto=format&fit=crop' },
            { title: 'WEIGHT LOSS', desc: 'Customized plans emphasizing sustainable weight loss through a blend of exercise and nutrition.', bgImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop' },
          ].map((service, i) => (
            <div key={i} className="group relative p-8 bg-[#0b0c07] border border-white/5 rounded-3xl hover:border-primary-gold/30 transition-all duration-500 text-left overflow-hidden">
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity duration-500 bg-cover bg-center mix-blend-luminosity z-0"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c07] via-transparent to-transparent opacity-80 z-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-gold transition-colors">
                  <Play className="w-5 h-5 text-primary-gold group-hover:text-black fill-current" />
                </div>
                <h3 className="text-xl font-black italic mb-4 tracking-tight drop-shadow-md">{service.title}</h3>
                <p className="text-white/60 group-hover:text-white/90 transition-colors text-sm leading-relaxed mb-8 drop-shadow-md">{service.desc}</p>
                <button className="text-xs font-black tracking-widest flex items-center gap-2 group-hover:text-primary-gold transition-colors drop-shadow-md">
                  JOIN NOW <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
