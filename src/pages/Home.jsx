import React from 'react';
import { Clock, Flame, Activity, Zap, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import hero from '../assets/body-hero.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0c07] pt-20">
        <div className="relative z-10 w-full max-w-[1920px] h-full flex flex-col items-center justify-center py-20 px-4">
          
          {/* Main Hero Stack */}
          <div className="relative flex flex-col items-center w-full mb-20">
            
            <div className="relative flex flex-col items-center text-center select-none pointer-events-none z-10 w-full mb-20 mt-10">
              <h1 className="text-[8.5vw] font-bold tracking-tight text-white leading-[1.1]">
                Sculpt <span className="text-primary-gold">Your</span> Body,
              </h1>
              <h2 className="text-[7.5vw] font-bold tracking-tight text-white leading-[1.1]">
                Elevate <span className="text-primary-gold">Your</span> Spirit
              </h2>
            </div>

            {/* Overlapping Bodybuilder & Badges Container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full max-w-4xl flex items-center justify-center z-30 pointer-events-none">
              {/* Central Human Image & Anchored Badges */}
              <div className="relative z-30 inline-block mt-44 pointer-events-auto">
                <img 
                  src={hero} 
                  alt="Bodybuilder" 
                  className="h-[80vh] w-auto object-contain brightness-90 relative z-30"
                />

                {/* Top Left Badge - Hours */}
                <div className="absolute top-[33%] left-0 md:-left-6 lg:-left-12 z-20 animate-bounce-slow">
                  <div className="bg-[#2a2c27]/60 backdrop-blur-xl border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-1 min-w-[100px] rotate-[-45deg] shadow-2xl">
                    <div className="bg-primary-gold p-2.5 rounded-full mb-1"><Clock className="text-black w-6 h-6" /></div>
                    <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mt-1">Hours</p>
                    <p className="text-2xl font-black text-white">1.5</p>
                  </div>
                </div>

                {/* Bottom Left Badge - Kcal */}
                <div className="absolute top-[70%] -left-[5%] md:-left-10 lg:-left-16 z-20 animate-bounce-delayed text-center">
                  <div className="bg-[#2a2c27]/60 backdrop-blur-xl border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-1 min-w-[100px] rotate-[-45deg] shadow-2xl">
                    <div className="bg-primary-gold p-2.5 rounded-full mb-1"><Flame className="text-black w-6 h-6" /></div>
                    <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mt-1">Kcal</p>
                    <p className="text-2xl font-black text-white">550</p>
                  </div>
                </div>

                {/* Top Right Badge - Poses */}
                <div className="absolute top-[33%] right-0 md:-right-6 lg:-right-12 z-20 animate-bounce-delayed">
                  <div className="bg-[#2a2c27]/60 backdrop-blur-xl border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-1 min-w-[100px] rotate-[45deg] shadow-2xl">
                    <div className="bg-primary-gold p-2.5 rounded-full mb-1"><Activity className="text-black w-6 h-6" /></div>
                    <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mt-1">Poses</p>
                    <p className="text-2xl font-black text-white">20</p>
                  </div>
                </div>

                {/* Bottom Right Badge - Sets */}
                <div className="absolute top-[70%] -right-[5%] md:-right-10 lg:-right-16 z-20 animate-bounce-slow text-center">
                  <div className="bg-[#2a2c27]/60 backdrop-blur-xl border border-white/5 p-5 rounded-[2rem] flex flex-col items-center gap-1 min-w-[100px] rotate-[45deg] shadow-2xl">
                    <div className="bg-primary-gold p-2.5 rounded-full mb-1"><Zap className="text-black w-6 h-6" /></div>
                    <p className="text-[10px] font-semibold text-white/60 uppercase tracking-widest mt-1">Sets</p>
                    <p className="text-2xl font-black text-white">5</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Controls Bar */}
            <div className="w-full max-w-7xl flex items-center justify-between mt-10 relative z-50 px-4">
              {/* Happy Spirits */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center">
                  {[1, 2, 3].map((i) => (
                    <img 
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i}`} 
                      className={`w-14 h-14 rounded-full border-[3px] border-[#0b0c07] ${i > 1 ? '-ml-5' : ''}`}
                      alt="User"
                    />
                  ))}
                  <div className="w-14 h-14 rounded-full border-[3px] border-[#0b0c07] bg-primary-gold flex items-center justify-center -ml-5 z-10">
                    <span className="text-sm text-[#0b0c07] font-black">+</span>
                  </div>
                </div>
                <p className="text-xl font-black italic tracking-tighter">8k+ <span className="text-white/40 font-bold not-italic text-base">Happy Spirits</span></p>
              </div>

              {/* CTA Capsule */}
              <Link to="/pricing" className="bg-primary-gold text-black px-12 py-4 rounded-full font-black text-sm italic hover:bg-accent-gold transition-all transform hover:scale-105 flex items-center gap-3 shadow-[0_0_40px_rgba(193,163,98,0.5)]">
                JOIN NOW <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-20 border-y border-white/5 bg-white/2 overflow-hidden">
        <div className="flex justify-center gap-12 md:gap-24 opacity-30 grayscale invert">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" className="h-12 w-auto" alt="Adidas" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" className="h-10 w-auto" alt="Nike" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/Puma-Logo.svg" className="h-12 w-auto" alt="Puma" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/The_North_Face_logo.svg" className="h-12 w-auto" alt="TNF" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Reebok_logo2.svg" className="h-8 w-auto" alt="Reebok" />
        </div>
      </section>

      {/* Workouts Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-[0.85]">
              Train <span className="text-primary-gold">Smarter</span><br />
              Unleash <span className="text-primary-gold">Your Potential</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { tag: 'Weightlifting', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop' },
              { tag: 'Bodybuilding', img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1470&auto=format&fit=crop' },
              { tag: 'Cardio', img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1470&auto=format&fit=crop' },
              { tag: 'CrossFit', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1470&auto=format&fit=crop' },
              { tag: 'Stretching', img: 'https://blog.nasm.org/hubfs/beginner-stretches.jpg' },
            ].map((workout, i) => (
              <div key={i} className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer">
                <img 
                  src={workout.img} 
                  alt={workout.tag} 
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Neon Corner Accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary-gold/0 group-hover:border-primary-gold transition-all" />
                
                <div className="absolute bottom-10 left-10">
                  <p className="text-sm font-black tracking-widest text-primary-gold uppercase mb-2 animate-pulse">{workout.tag}</p>
                  <p className="text-2xl font-black italic uppercase tracking-tighter">Explore Class</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-32 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase leading-[0.85]">
                Your Fitness<br />
                <span className="text-primary-gold">Goals, Their Expertise</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Michael Marcus', role: 'HEAD TRAINER', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1587&auto=format&fit=crop' },
              { name: 'Mark Simon III', role: 'PRO COACH', img: 'https://images.unsplash.com/photo-1491756598342-95b62b0d3dfc?q=80&w=1587&auto=format&fit=crop' },
              { name: 'Logan Parker', role: 'DIET EXPERT', img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a47?q=80&w=1587&auto=format&fit=crop' },
            ].map((trainer, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-8 rounded-[40px] overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/5 group-hover:border-primary-gold/50 transition-colors">
                  <img 
                    src={trainer.img} 
                    alt={trainer.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c07] via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-2xl font-black italic tracking-tighter">{trainer.name.toUpperCase()}</h3>
                <p className="text-primary-gold font-black tracking-widest text-xs mt-1">{trainer.role}</p>
                
                {/* Socials */}
                <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5 hover:text-primary-gold cursor-pointer" />
                  <Facebook className="w-5 h-5 hover:text-primary-gold cursor-pointer" />
                  <Twitter className="w-5 h-5 hover:text-primary-gold cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
