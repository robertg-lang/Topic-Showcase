import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MarineSnow } from '@/components/MarineSnow';

// Generated imagery
import heroBg from '@assets/generated_images/deep_ocean_hero.jpg';
import midnightBg from '@assets/generated_images/midnight_zone.jpg';
import creaturesBg from '@assets/generated_images/deep_creatures.jpg';
import trenchesBg from '@assets/generated_images/ocean_trenches.jpg';
import explorationBg from '@assets/generated_images/human_exploration.jpg';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Darkens the global background as you scroll down
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.3, 0.7, 0.95]);

  return (
    <div className="relative w-full text-slate-100 overflow-x-hidden selection:bg-cyan-900 selection:text-white">
      {/* Global Background overlay to darken layers */}
      <motion.div 
        className="fixed inset-0 z-10 pointer-events-none bg-black"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Marine Snow Particle Effect */}
      <MarineSnow />

      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden z-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#020617]" />
        
        <div className="relative z-30 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter text-glow"
          >
            THE ABYSS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl font-light tracking-wide text-slate-300 max-w-2xl"
          >
            A journey into Earth's most alien environment. Where sunlight dies, life thrives.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 flex flex-col items-center gap-4 text-slate-400"
          >
            <span className="text-sm uppercase tracking-widest font-mono">Descend</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Midnight Zone */}
      <section className="relative min-h-[100dvh] w-full flex items-center py-24 z-20 bg-[#020617]/80 backdrop-blur-sm">
        <div className="absolute inset-0 z-0">
           <img src={midnightBg} alt="Midnight Zone" className="w-full h-full object-cover opacity-10" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#01030d] to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right" className="space-y-8">
            <div className="space-y-2 border-l-2 border-cyan-500/50 pl-6">
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Depth: 1,000m - 4,000m</span>
              <h2 className="text-5xl md:text-6xl font-bold">The Midnight Zone</h2>
            </div>
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Below 200 meters, the light begins to fade. By 1,000 meters, you enter the bathypelagic zone. Here, the only light comes from the creatures themselves. The water temperature hovers just above freezing.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-serif text-white mb-2">1,100x</p>
                <p className="text-sm text-slate-500 font-mono">Surface Pressure</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-white mb-2">39°F</p>
                <p className="text-sm text-slate-500 font-mono">Average Temp</p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={0.2} className="relative h-[60vh] rounded-xl overflow-hidden box-glow border border-white/5">
            <img src={midnightBg} alt="Midnight zone abstract" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Creatures of the Deep */}
      <section className="relative min-h-[100dvh] w-full flex items-center py-24 z-20">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-teal-400 font-mono text-sm tracking-widest uppercase">Alien Biology</span>
            <h2 className="text-5xl md:text-7xl font-bold">Life In The Dark</h2>
            <p className="text-lg text-slate-400 font-light pt-4">
              Evolution operates differently in the abyss. Without sunlight for photosynthesis, entire ecosystems rely on chemical energy from hydrothermal vents and the slow drift of organic matter from above.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            <ScrollReveal direction="up" delay={0.1} className="md:col-span-7 relative h-[70vh] rounded-2xl overflow-hidden box-glow group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
              <img src={creaturesBg} alt="Bioluminescent anglerfish" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                <h3 className="text-3xl font-serif mb-2">Bioluminescence</h3>
                <p className="text-slate-300 font-light">Nearly 90% of deep-sea marine life produces its own light to hunt, hide, and mate.</p>
              </div>
            </ScrollReveal>

            <div className="md:col-span-5 flex flex-col gap-8">
              <ScrollReveal direction="left" delay={0.2} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-3 text-teal-300">Hydrothermal Vents</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  Towering chimneys spewing 750°F toxic water. Yet, they are surrounded by dense colonies of tube worms and blind crabs thriving on chemosynthesis.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.3} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-3 text-teal-300">Gigantism</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">
                  The colossal squid and giant isopods grow to immense proportions in the deep, an adaptation to extreme pressure and scarce resources.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Ocean Trenches */}
      <section className="relative min-h-[100dvh] w-full flex items-center py-24 z-20 overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-2/3 z-0 opacity-20">
          <img src={trenchesBg} alt="Ocean Trench" className="w-full h-full object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01030d] via-[#01030d]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2">
            <div className="space-y-12">
              <ScrollReveal direction="up">
                <span className="text-cyan-600 font-mono text-sm tracking-widest uppercase">The Hadal Zone</span>
                <h2 className="text-5xl md:text-7xl font-bold mt-4 mb-6">The Trenches</h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  Scars on the Earth's crust. The deepest points on the planet plunge further down than Mount Everest reaches up.
                </p>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  { name: 'Mariana Trench', depth: '10,984 m', desc: 'Challenger Deep' },
                  { name: 'Tonga Trench', depth: '10,800 m', desc: 'Horizon Deep' },
                  { name: 'Philippine Trench', depth: '10,540 m', desc: 'Galathea Depth' }
                ].map((trench, i) => (
                  <ScrollReveal key={trench.name} direction="up" delay={0.1 * i} className="group cursor-default border-b border-white/10 pb-4">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-2xl font-serif text-slate-200 group-hover:text-cyan-400 transition-colors">{trench.name}</h4>
                      <span className="text-cyan-500 font-mono text-xl">{trench.depth}</span>
                    </div>
                    <p className="text-slate-500 text-sm font-mono uppercase">{trench.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Human Exploration */}
      <section className="relative min-h-[100dvh] w-full flex items-center py-24 z-20 bg-[#000000]">
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right" className="order-2 md:order-1 relative h-[70vh] rounded-2xl overflow-hidden box-glow border border-cyan-900/30">
             <img src={explorationBg} alt="Human submersible" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-color" />
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="order-1 md:order-2 space-y-8">
            <div className="space-y-2 border-l-2 border-slate-700 pl-6">
              <span className="text-slate-400 font-mono text-sm tracking-widest uppercase">The Final Frontier</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white">Touching The Void</h2>
            </div>
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              We know more about the surface of Mars than we do about the ocean floor. Only roughly 20% of the seabed has been mapped to modern standards. Every descent reveals species unknown to science.
            </p>
            
            <div className="relative border-l border-white/10 pl-8 space-y-8 pt-8">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_#06b6d4]" />
                <h5 className="text-xl font-bold text-white">1930 — Bathysphere</h5>
                <p className="text-slate-500 text-sm mt-2">William Beebe and Otis Barton become the first humans to observe deep-sea animals in their native habitat.</p>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_#06b6d4]" />
                <h5 className="text-xl font-bold text-white">1960 — Trieste</h5>
                <p className="text-slate-500 text-sm mt-2">Don Walsh and Jacques Piccard reach the bottom of the Mariana Trench.</p>
              </div>
              <div className="relative">
                <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[38px] top-1.5 shadow-[0_0_10px_#06b6d4]" />
                <h5 className="text-xl font-bold text-white">Today — ROVs</h5>
                <p className="text-slate-500 text-sm mt-2">Remotely operated vehicles map the abyss, discovering hundreds of new species every year.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-black py-16 z-20">
        <div className="absolute inset-0 footer-current opacity-70" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <motion.div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/5 text-2xl font-serif text-cyan-200 shadow-[0_0_32px_rgba(34,211,238,0.2)]"
            animate={{ scale: [1, 1.08, 1], boxShadow: [
              '0 0 24px rgba(34, 211, 238, 0.16)',
              '0 0 42px rgba(34, 211, 238, 0.36)',
              '0 0 24px rgba(34, 211, 238, 0.16)',
            ] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Bioluminescent production mark"
          >
            W
          </motion.div>
          <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-cyan-300/60">
            An original ocean film
          </p>
          <p className="mt-3 text-xl font-serif tracking-wide text-slate-200">
            Wizardo Productions
          </p>
          <div className="my-7 h-px w-16 bg-cyan-300/30" />
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-600">
            The Ocean Deep © {new Date().getFullYear()} · Embrace the unknown
          </p>
        </div>
      </footer>
    </div>
  );
}
