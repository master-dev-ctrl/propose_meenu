import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Sparkles, Coffee, Map, BookOpen, Clock, Music } from 'lucide-react';

const BokehParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; size: number; x: number; y: number; duration: number; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = [
      'rgba(212, 165, 116, 0.15)', // rose-gold
      'rgba(232, 196, 154, 0.1)',  // champagne
      'rgba(196, 124, 138, 0.15)', // blush
      'rgba(255, 255, 255, 0.05)', // soft white
    ];

    const generateParticles = () => {
      return Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        size: Math.random() * 120 + 40,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * -20,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="bokeh-container">
      <div className="floral-bg" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle at center, ${p.color} 0%, transparent 70%)`,
            filter: 'blur(8px)',
          }}
          animate={{
            y: [0, -100, 50, 0],
            x: [0, 50, -50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

const FadeInSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`min-h-screen flex items-center justify-center py-24 px-6 relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleYes = () => {
    window.open('https://wa.me/919103841281?text=Hey%20Sahil%2C%20I%20saw%20your%20website%20%F0%9F%8C%B9', '_blank');
  };

  const [showMaybeLater, setShowMaybeLater] = useState(false);

  return (
    <div className="relative text-cream selection:bg-rose-gold/30">
      <BokehParticles />

      <main className="max-w-4xl mx-auto relative z-10">
        {/* Section 1: Hero */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <p className="uppercase tracking-[0.3em] text-xs text-rose-gold/80 mb-6 font-medium">This page is for you</p>
            <h1 className="text-6xl md:text-8xl font-serif mb-8 text-gradient italic pb-4">
              Dear Meenu
            </h1>
            <div className="w-px h-16 bg-gradient-to-b from-rose-gold/50 to-transparent mb-8" />
            <p className="text-lg md:text-xl font-light text-cream/90 max-w-xl leading-relaxed">
              There are moments that stay with you — <br className="hidden md:block" />and you, Meenu, are one of mine.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-12 flex flex-col items-center gap-2 text-rose-gold/40 text-sm tracking-widest uppercase"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>Scroll</span>
            <div className="w-px h-8 bg-rose-gold/40" />
          </motion.div>
        </section>

        {/* Section 2: The Moment */}
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-xs text-blush mb-8 font-medium">The moment it all began</p>
            <motion.p style={{ y: yParallax }} className="text-3xl md:text-4xl font-serif leading-relaxed italic text-cream">
              "It was a hospital. An ordinary day — until I saw your smile. And in that one fleeting moment, something in me quietly said: <span className="text-rose-gold">remember her</span>."
            </motion.p>
          </div>
        </FadeInSection>

        {/* Section 3: Unforgettable */}
        <FadeInSection>
          <div className="glass-panel p-8 md:p-16 rounded-2xl md:rounded-3xl max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
            <p className="uppercase tracking-[0.2em] text-xs text-champagne mb-8 font-medium">What makes you unforgettable</p>
            <p className="text-xl md:text-2xl font-light leading-loose text-cream/90">
              Your smile doesn't just brighten a room — it stops time. And your eyes... I could get lost in them and never want to find my way back. You are, simply put, <em className="text-rose-gold font-serif text-3xl">remarkable.</em>
            </p>
          </div>
        </FadeInSection>

        {/* Section 4: Who I Am */}
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-blush mb-6 font-medium">Who I am</p>
              <h2 className="text-4xl font-serif text-gradient mb-6 italic">A little about me</h2>
              <div className="space-y-6 text-cream/80 leading-relaxed font-light">
                <p>
                  I'm Sahil. Six feet tall, aspiring AI engineer, gym-goer, and someone who finds as much joy in deep conversations as in late-night walks.
                </p>
                <p>
                  I'm not perfect — but I'm real, I'm present, and I care deeply about the people in my life. Adventure excites me. Holding hands on quiet walks feels like home.
                </p>
                <p className="text-champagne font-medium italic">
                  I believe the best moments in life are the ones you share.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/20 to-transparent rounded-full blur-3xl opacity-50" />
              <div className="glass-panel p-8 rounded-2xl border-l-2 border-l-rose-gold/30 flex flex-col gap-6 relative">
                <Sparkles className="text-rose-gold w-6 h-6 opacity-50" />
                <p className="font-serif text-2xl italic">"I'm looking for the kind of connection where silence is comfortable and laughter is effortless."</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Section 5: Moments We Haven't Had Yet */}
        <FadeInSection className="flex-col items-start justify-center">
          <div className="w-full text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-xs text-champagne mb-4 font-medium">Future Possibilities</p>
            <h2 className="text-4xl md:text-5xl font-serif text-gradient italic">Moments we haven't had yet</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              { icon: Coffee, text: "Morning tea and talking about everything and nothing" },
              { icon: Map, text: "Getting hopelessly lost somewhere and laughing about it" },
              { icon: BookOpen, text: "Study sessions — your medical books beside my laptop" },
              { icon: Clock, text: "Walks where time somehow always runs out" },
              { icon: Music, text: "Finding your favourite song and playing it on repeat" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`glass-panel p-6 rounded-xl flex items-center gap-4 ${i === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                <div className="p-3 rounded-full bg-rose-gold/10 text-rose-gold border border-rose-gold/20">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="font-light text-cream/90">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>

        {/* Section 6: My Promises */}
        <FadeInSection>
          <div className="w-full max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-xs text-blush mb-4 font-medium text-center">Intentions</p>
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-16 text-center italic">My Promises</h2>
            
            <div className="space-y-8">
              {[
                "I promise to always listen — truly listen — when you speak",
                "I promise to respect your dreams as much as my own",
                "I promise to show up, be honest, and never make you feel like a second choice",
                "I promise that your comfort will always come before my convenience",
                "I promise to be the kind of person worthy of your trust"
              ].map((promise, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="mt-1">
                    <Heart className="w-4 h-4 text-rose-gold/40 group-hover:text-rose-gold transition-colors duration-500" />
                  </div>
                  <p className="text-lg md:text-xl font-light text-cream/80 group-hover:text-cream transition-colors duration-500">{promise}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Section 7 & 8: Our World & Better Future */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-24">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-champagne mb-6 font-medium">Our Goals, Our World</p>
              <p className="text-xl md:text-2xl font-light leading-loose text-cream/90">
                An engineer and a doctor — different paths, but imagine the conversations. Imagine the late nights, the ambitions, the growth, the way two driven people can push each other forward. I see a future built on respect, laughter, shared goals, and a love that only deepens with time.
              </p>
            </div>
            
            <div className="relative p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent rounded-3xl blur-xl" />
              <div className="glass-panel p-10 md:p-16 rounded-3xl relative">
                <p className="uppercase tracking-[0.2em] text-xs text-blush mb-6 font-medium">A better future, together</p>
                <h3 className="text-3xl md:text-4xl font-serif text-gradient italic mb-6">
                  "I don't know the full story yet. But I know this — the chapters that include you are the ones I'm most excited to write."
                </h3>
                <p className="font-light text-cream/70">Let's build something beautiful, one day at a time.</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Section 9: The Ask */}
        <FadeInSection className="min-h-screen flex flex-col justify-center pb-32">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-serif text-gradient italic mb-10 pb-4">
              So, Meenu...
            </h2>
            <p className="text-xl font-light leading-relaxed text-cream/90 mb-16">
              We only met for a few minutes. But I haven't stopped thinking about you since. I'm not asking for the world — just a chance. A chance to know you, make you smile, be someone you can trust. 
              <br /><br />
              <span className="text-2xl font-serif italic text-rose-gold">Will you be my friend?</span>
            </p>

            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={handleYes}
                className="group relative px-10 py-4 bg-rose-gold/10 hover:bg-rose-gold/20 border border-rose-gold/50 rounded-full transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/0 via-rose-gold/10 to-rose-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <span className="relative text-rose-gold font-medium tracking-wide uppercase text-sm">
                  Yes, I'd like that
                </span>
              </button>

              <div className="flex flex-col items-center">
                <button 
                  onClick={() => setShowMaybeLater(true)}
                  className="text-cream/40 hover:text-cream/60 text-sm tracking-wide transition-colors uppercase"
                >
                  Maybe Later
                </button>
                
                {showMaybeLater && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-sm font-light text-champagne/80 italic"
                  >
                    That's okay. I'll be here. No pressure, no rush — just know that the offer stands.
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </FadeInSection>

      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-8 text-center z-10">
        <p className="text-cream/30 text-sm font-serif italic">
          Made with every sincere thought — Sahil
        </p>
      </footer>
    </div>
  );
}
