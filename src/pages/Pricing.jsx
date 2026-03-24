import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'BASIC',
      price: '29',
      features: ['Access to gym floor', 'Basic equipment', 'Locker room access', '1 group class/month']
    },
    {
      name: 'PRO',
      price: '59',
      popular: true,
      features: ['Full gym access', 'All group classes', 'Free supplements', 'Personal trainer 1x/week', 'Sauna access']
    },
    {
      name: 'ELITE',
      price: '99',
      features: ['All PRO features', 'Unlimited personal training', 'Custom diet plan', 'Guest passes', 'Priority support']
    }
  ];

  return (
    <section className="py-32 pt-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-[0.85]">
            Choose Your <span className="text-primary-gold">Path</span><br />
            To <span className="text-primary-gold">Greatness</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-primary-gold text-black border-primary-gold transform md:-translate-y-4' 
                  : 'bg-[#0b0c07] text-white border-white/10 hover:border-primary-gold/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-black text-primary-gold px-4 py-1 rounded-full text-xs font-black tracking-widest">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-2xl font-black italic tracking-tighter mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black italic">$</span>
                <span className="text-6xl font-black italic tracking-tighter">{plan.price}</span>
                <span className={`text-sm font-bold ${plan.popular ? 'text-black/60' : 'text-white/40'}`}>/month</span>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-black' : 'text-primary-gold'}`} />
                    <span className="font-bold text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-full font-black text-sm italic transition-all transform hover:scale-105 flex items-center justify-center gap-2 ${
                  plan.popular 
                    ? 'bg-black text-primary-gold' 
                    : 'bg-white/10 text-white hover:bg-primary-gold hover:text-black'
                }`}
              >
                SELECT PLAN <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
