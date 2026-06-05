import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  tag: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'Vortex_FPS',
      role: 'Guild Owner',
      avatar: 'bg-gradient-to-tr from-blue-500 to-cyan-500',
      rating: 5,
      comment: 'Absolutely blown away by the speed! Bought 14 boosts for my server and they arrived in less than 2 minutes. Strongly recommend Nexora Boost!',
      tag: 'Verified Purchaser',
    },
    {
      name: 'LunaCode',
      role: 'Developer',
      avatar: 'bg-gradient-to-tr from-purple-500 to-pink-500',
      rating: 5,
      comment: 'The email-verified tokens are highly stable and work flawlessly for my automated discord bots. Customer support helped me set everything up quickly.',
      tag: 'Repeat Customer',
    },
    {
      name: 'ShadowRider',
      role: 'Community Admin',
      avatar: 'bg-gradient-to-tr from-yellow-500 to-orange-500',
      rating: 5,
      comment: 'Incredible customer support. There was a temporary issue with stock, but the owner personally handled it on Discord and threw in extra boosts for free!',
      tag: 'Top Contributor',
    },
    {
      name: 'HypeX_Gaming',
      role: 'Content Creator',
      avatar: 'bg-gradient-to-tr from-emerald-500 to-teal-500',
      rating: 5,
      comment: 'Nexora is the only place I buy my Nitro. Pricing is unbeatable and the checkout through SellAuth is seamless. 10/10!',
      tag: 'Verified Purchaser',
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000); // changes every 6s
    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="reviews" className="py-24 relative bg-bg-dark grid-bg">
      <div className="absolute inset-0 radial-fade pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Client Feedback</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved By The Community
          </h3>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="glass-panel w-full p-8 sm:p-12 rounded-3xl border border-white/5 relative flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-200 text-lg sm:text-xl md:text-2xl italic font-medium leading-relaxed mb-8 max-w-2xl mx-auto">
                  "{testimonials[index].comment}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonials[index].avatar} flex items-center justify-center font-bold text-white text-lg shadow-lg`}>
                  {testimonials[index].name.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-white text-base text-center sm:text-left">{testimonials[index].name}</h4>
                  <p className="text-xs text-gray-400 text-center sm:text-left">{testimonials[index].role}</p>
                </div>
                <span className="sm:ml-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                  {testimonials[index].tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel hover:bg-primary hover:text-white border border-white/10 hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full glass-panel hover:bg-primary hover:text-white border border-white/10 hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
