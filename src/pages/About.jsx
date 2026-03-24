import React, { useState, useEffect } from 'react';
import { CheckCircle2, Target, Eye, Star } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Mukundan LakshmiNarasimhan",
      time: "a week ago",
      text: "the gym has enough equipments and it has good environment. The trainers are very friendly, they are very helpful in teaching the exercises and till correcting our form while doing it. i would definitely recommend this gym 10/10",
      rating: 5
    },
    {
      name: "MARUTHA RENGANATHAN",
      time: "3 weeks ago",
      text: "I’ve had a great experience at MR7 Fitness. The gym has a motivating environment, good equipment, and a clean setup. A special thanks to Sujith Master for his excellent guidance and support. He is knowledgeable, dedicated, and always pushes you to achieve your best. Highly recommended for anyone serious about their fitness journey!",
      rating: 5
    },
    {
      name: "Pragadeesh Vel",
      time: "3 weeks ago",
      text: "MR7 Fitness is perfect for anyone serious about health and fitness. Sujith master is supportive, knowledgeable, and always encourages us to push our limits. Great experience overall!",
      rating: 5
    },
    {
      name: "Sridhayaa A S",
      time: "3 weeks ago",
      text: "I’ve been a member of this gym for the last six months, and it has been a wonderful experience. Sujith Master is an excellent trainer who provides dedicated guidance and well-structured workout plans. Thanks to his support, I’ve achieved significant progress in my weight loss journey. I strongly recommend MR7 Fitness Gym.",
      rating: 5
    },
    {
      name: "Sri Divya",
      time: "3 weeks ago",
      text: "Good and nice gym.SUJITH MASTER thanks for your effective training.Management and co workout buddy's are also very friendly and very positive while entering into gym.",
      rating: 5
    },
    {
      name: "Ranjani Balaji",
      time: "3 weeks ago",
      text: "A very decent level unisex gym in Mambalam surrounding. I am coming here for almost 8th months and can see the visible inch and weight loss. Thanks to Sujith Ram master, who structured my workout plan and motivated me throughout the sessions. And the equipments here are of standard qualities and the fees are also reasonable.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4-second auto scroll for readability of long reviews

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <>
      <section id="about" className="py-32 pt-40 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipMZTNveG3fYrI3BFkCZl07mbXkuxq1uzA608BGn=s1360-w1360-h1020-rw" 
                alt="About" 
                className="rounded-3xl grayscale relative z-10 w-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary-gold text-black p-10 rounded-3xl z-20 hidden md:block">
                <p className="text-5xl font-black italic">20+</p>
                <p className="text-xs font-bold tracking-widest uppercase">Years Experience</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-primary-gold/10 border border-primary-gold/20 rounded-full text-primary-gold text-xs font-black tracking-widest">
                WHO WE ARE
              </div>
              <h2 className="text-6xl font-black leading-tight tracking-tighter italic uppercase">
                Inspired to<br />
                <span className="text-primary-gold">Inspire</span> Your Best Self
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We are more than just a gym. We are a community dedicated to helping you achieve your physical and mental peak performance through science-based training.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Personalized Training',
                  'Modern Equipment',
                  'Professional Diet Plan',
                  'Pro Gym Trainer',
                  'Community Support',
                  'Shower & Locker Room'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary-gold w-5 h-5 shrink-0" />
                    <span className="font-bold text-white/90 uppercase text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Mission Card */}
            <div className="group relative p-10 bg-[#0b0c07] border border-white/5 rounded-[40px] hover:border-primary-gold/50 transition-all duration-700 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl group-hover:bg-primary-gold/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/5 group-hover:bg-primary-gold rounded-2xl flex items-center justify-center transition-colors duration-500">
                  <Target className="w-8 h-8 text-primary-gold group-hover:text-black transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Our Mission</h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    To empower individuals to transform their lives through fitness by providing a supportive community, world-class facilities, and expert guidance. We believe that physical strength is the foundation for mental resilience, and our goal is to help you build both, every single day.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-10 bg-[#0b0c07] border border-white/5 rounded-[40px] hover:border-primary-gold/50 transition-all duration-700 overflow-hidden transform hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl group-hover:bg-primary-gold/20 transition-colors duration-700 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-white/5 group-hover:bg-primary-gold rounded-2xl flex items-center justify-center transition-colors duration-500">
                  <Eye className="w-8 h-8 text-primary-gold group-hover:text-black transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Our Vision</h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    To be the ultimate leading fitness sanctuary where innovation meets dedication. We envision a world where health is prioritized, boundaries are continually pushed, and every individual, regardless of their starting point, has the resources and community backing to achieve their highest physical potential.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
              Gallery
            </h2>
            <p className="text-lg text-white/60 font-medium max-w-2xl mx-auto">
              Fuel your fitness passion in a supportive and modern environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-2 relative group overflow-hidden rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Gallery Main" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/80 text-xs font-bold mb-1">Workout Area</p>
                  <p className="text-white font-black text-lg tracking-wider">MR7 FITNESS</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl h-[250px]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 2" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/80 text-xs font-bold mb-1">Equipment</p>
                  <p className="text-white font-black text-lg tracking-wider">MR7 FITNESS</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl h-[250px]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 3" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/80 text-xs font-bold mb-1">Weights</p>
                  <p className="text-white font-black text-lg tracking-wider">MR7 FITNESS</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative group overflow-hidden rounded-xl h-[250px]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 4" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/80 text-xs font-bold mb-1">Cardio</p>
                  <p className="text-white font-black text-lg tracking-wider">MR7 FITNESS</p>
                </div>
              </div>
               <div className="relative group overflow-hidden rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img src="https://images.unsplash.com/photo-1596356453261-0d268ea02d4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gallery 5" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/80 text-xs font-bold mb-1">Studio</p>
                  <p className="text-white font-black text-lg tracking-wider">MR7 FITNESS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter italic uppercase">
              Our <span className="text-primary-gold">Google Review</span>
            </h2>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto italic">
              "beyond sweat we are building strength, resilience and community"
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
            {/* Reviews Summary Column */}
            <div className="w-full lg:w-[350px] shrink-0 bg-[#0b0c07] border border-white/5 rounded-[40px] p-10 flex flex-col items-center justify-center text-center z-10">
              <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-black font-black text-2xl italic tracking-tighter">M7</span>
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter mb-2">M7 FITNESS</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-5xl font-black text-primary-gold">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-gold text-primary-gold" />
                  ))}
                </div>
              </div>
              <p className="text-white/40 text-sm mb-6">Based on 161 reviews</p>
              
              <div className="flex items-center gap-2 mb-8 opacity-80">
                <span className="text-sm font-medium">powered by</span>
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-bold tracking-tight text-white/90">Google</span>
              </div>

              <a 
                href="https://www.google.com/search?newwindow=1&sca_esv=991e2bedf2703c6a&sxsrf=ANbL-n5wDTHVGLJtwkeZw4GHjwmK4ZOxig:1774231789727&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZ4TdUu44BKYhRMm0oiAjb3DjXuLR-stoq54GyazOCemrAiZs7lmLEJGYf2Ju4qWsvbQ77VBbCtcNpQh7w3GwcSsNQjuA7ZGEOLlVqUvU9oDV3BWFQ%3D%3D&q=MR7+UNISEX+FITNESS+Reviews&sa=X&ved=2ahUKEwjmss28-LSTAxVozTgGHbZcBscQ0bkNegQIHxAH&biw=1536&bih=695&dpr=1.25#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 w-full flex justify-center items-center gap-2"
              >
                Review us on 
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>

            {/* Carousel Container */}
            <div className="w-full flex-grow overflow-hidden relative h-[450px]">
              <div 
                className="flex transition-transform duration-1000 ease-in-out h-full items-center"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review, i) => (
                  <div key={i} className="w-full shrink-0 px-4 h-full flex items-center">
                    <div className="bg-[#0b0c07] border border-white/5 rounded-[40px] p-8 md:p-10 w-full max-w-[500px] mx-auto relative group hover:border-primary-gold/30 transition-all duration-500 shadow-[0_0_30px_rgba(193,163,98,0.05)]">
                      
                      {/* Google G Icon */}
                      <div className="absolute top-8 right-8">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>

                      <div className="flex gap-4 items-center mb-6">
                        <img 
                          src={`https://ui-avatars.com/api/?name=${review.name.split(' ').join('+')}&background=c1a362&color=000&size=100`} 
                          alt={review.name} 
                          className="w-14 h-14 rounded-full border border-primary-gold/50"
                        />
                        <div>
                          <h4 className="font-bold text-lg leading-tight">{review.name}</h4>
                          <span className="text-white/40 text-xs">{review.time}</span>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-4 h-4 ${j < review.rating ? 'fill-primary-gold text-primary-gold' : 'fill-transparent text-white/20'}`} />
                        ))}
                      </div>

                      <p className="text-white/80 leading-relaxed min-h-[140px] text-sm">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Indicators */}
              <div className="absolute bottom-0 w-full flex justify-center gap-2">
                {reviews.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-primary-gold' : 'w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b0c07] rounded-[40px] flex flex-col md:flex-row overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(193,163,98,0.05)]">
            <div className="p-12 md:p-16 flex-1 flex flex-col justify-center items-start">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                Let's Achieve Your<br />Fitness Goals Together!
              </h2>
              <a href="/contact" className="inline-block bg-[#E38528] hover:bg-[#c47120] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-colors shadow-lg shadow-[#E38528]/20">
                Contact Us Today &rarr;
              </a>
            </div>
            <div className="flex-1 min-h-[400px] relative">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Couple working out" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
