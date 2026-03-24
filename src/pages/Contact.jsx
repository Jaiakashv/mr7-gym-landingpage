import React from 'react';
import { Dumbbell, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-32 pt-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-primary-gold rounded-[60px] p-12 md:p-24 text-black overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
             <Dumbbell className="w-96 h-96 -rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="text-6xl md:text-8xl font-black leading-[0.8] tracking-tighter italic uppercase">
              Connect<br />
              Engage<br />
              Transform
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="bg-black/10 border-2 border-black/20 px-8 py-5 rounded-full flex-grow placeholder:text-black/40 font-bold focus:outline-none focus:border-black"
              />
              <button className="bg-black text-primary-gold px-12 py-5 rounded-full font-black italic text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                SEND NOW <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <p className="font-bold text-sm tracking-widest uppercase mt-4">
              Or visit us at: <br/>
              123 Fitness Street, NY 10001 <br/>
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
