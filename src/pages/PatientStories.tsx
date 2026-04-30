import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronDown, Heart, ShieldCheck, UserRound } from 'lucide-react';
import { TiltCard } from '@/src/components/ui/TiltCard';

const PatientStories = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const testimonials = [
    { name: 'Priya R', age: 'New Mother', story: 'The team at Medwell supported me through my high-risk pregnancy with such care and expertise. I felt like family.', rating: 5 },
    { name: 'Saritha K', age: 'Wisdom Phase', story: 'Navigating menopause was overwhelming until I found Dr. Anusuya. Her holistic approach changed my life.', rating: 5 },
    { name: 'Lakshmi V', age: 'Fertility Journey', story: 'We visited many clinics, but the empathy we found at Medwell was unmatched. We truly felt heard.', rating: 5 },
    { name: 'Meera M', age: 'Regular Patient', story: 'I appreciate the preventive health focuses here. The annual checkups are thorough and professional.', rating: 5 },
  ];

  const faqs = [
    { q: 'Is my first visit scary?', a: 'Not at all. We prioritize comfort and take the time to listen before any clinical examination. Your first visit is mainly about understanding you.' },
    { q: 'Do you treat PCOS holistically?', a: 'Yes. We combine medical management with diet, lifestyle guidance, and emotional support for a complete PCOS wellness plan.' },
    { q: 'Can I book for my teenage daughter?', a: 'Absolutely. We provide specialized care for the "Blossom Years," helping young women understand their bodies with confidence.' },
    { q: 'Is the clinic accessible?', a: 'Yes, we are located prominently with easy access and patient parking available.' },
  ];

  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 inline-block">Journeys of Hope and Healing</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight italic overflow-hidden">
                Voices of Those <br /> We've Walked Beside
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Nothing speaks louder than lived experiences. Here are a few reflections from the women who visit us.</p>
           </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
           {testimonials.map((t, i) => (
             <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="bg-sage/5 p-12 rounded-[50px] border border-sage/10 hover:bg-sage/10 transition-colors">
                   <div className="flex gap-1 text-terracotta mb-6">
                      {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                   </div>
                   <p className="font-serif text-2xl italic text-slate-800 leading-relaxed mb-10">"{t.story}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-terracotta font-bold border border-terracotta/10">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{t.age}</p>
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Support Circles */}
      <section className="py-24 bg-terracotta text-white">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div>
               <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Community Belonging</span>
               <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">You Are Not Alone</h2>
               <p className="text-white/80 text-xl leading-relaxed mb-8 italic">We host confidential group support circles for women navigating shared journeys. A safe space to listen and be heard.</p>
               <ul className="grid grid-cols-2 gap-6 mb-12">
                  {['Infertility', 'Pregnancy Loss', 'Menopause', 'PCOS Support'].map(item => (
                    <li key={item} className="flex items-center gap-3">
                       <ShieldCheck size={20} className="text-sage" />
                       <span className="font-medium">{item}</span>
                    </li>
                  ))}
               </ul>
               <a href="https://wa.me/919677605596" className="inline-flex items-center gap-3 bg-white text-terracotta px-8 py-4 rounded-full font-bold hover:bg-cream transition-colors">
                  <MessageSquare size={20} /> Register Your Interest
               </a>
            </div>
            <div className="aspect-video bg-white/10 rounded-[60px] border border-white/20 flex flex-col items-center justify-center p-12 text-center backdrop-blur-lg">
               <Heart size={80} className="text-white mb-8 animate-pulse" />
               <p className="text-2xl font-serif font-bold mb-4 italic">"I found a community here I didn't know I needed."</p>
               <p className="text-white/60 text-sm uppercase tracking-widest font-bold">Circle Participant</p>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Patient FAQ</h2>
              <p className="text-slate-600 italic">Answering common hesitations with clarity and warmth.</p>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden">
                   <button 
                     onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                     className="w-full flex items-center justify-between p-8 text-left hover:bg-cream/30 transition-colors"
                   >
                      <span className="font-serif text-xl font-bold text-slate-900">{faq.q}</span>
                      <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180 text-terracotta' : ''}`} />
                   </button>
                   <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-cream/10 px-8 pb-8 text-slate-700 leading-relaxed"
                        >
                           <div className="pt-2 border-t border-slate-50 italic">
                             {faq.a}
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
           
           <div className="mt-20 p-12 bg-sage rounded-[50px] text-center text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="text-3xl font-serif font-bold mb-4">Still have questions?</h3>
              <p className="text-white/80 mb-8 italic">No problem is too small. We are here for you.</p>
              <a href="tel:9677605596" className="btn-primary border-none">Speak with our Support Team</a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
