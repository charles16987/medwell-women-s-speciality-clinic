import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, UserRound, Sparkles, Activity, Plus, Users } from 'lucide-react';
import { TiltCard } from '@/src/components/ui/TiltCard';
import { Link } from 'react-router-dom';
import service1 from '../assests/service-metwell-1.jpg';
import service2 from '../assests/service-metwell-2.jpg';
import service3 from '../assests/service-metwell-3.jpg';
import service4 from '../assests/service-metwell-4.jpg';
import service5 from '../assests/service-metwell-5.jpg';

const Services = () => {
  const serviceCategories = [
    {
      id: 'gynae',
      title: 'General & Advanced Gynaecology',
      items: ['PCOS Management', 'PMS & Menstrual Irregularities', 'Fibroids & Endometriosis', 'Infections & Routine Checkups', 'Breast Health Screening', 'Pelvic Pain Therapy'],
      icon: <ShieldCheck className="text-terracotta" size={40} />,
      color: 'bg-terracotta/5',
      img:service1
    },
    {
      id: 'maternity',
      title: 'Pregnancy & Maternity Care',
      items: ['Pre-conception Planning', 'High-Risk Pregnancy Support', 'Growth Scans & Monitoring', 'Birth Preparation & Guidance', 'Postnatal Recovery Care', 'Breastfeeding Support'],
      icon: <Users className="text-sage" size={40} />,
      color: 'bg-sage/5',
      img:service2
    },
    {
      id: 'fertility',
      title: 'Fertility & Reproductive Health',
      items: ['Fertility Evaluation', 'Hormonal Studies', 'Ovulation Tracking', 'Natural Conception Counseling', 'Lifestyle Optimization', 'Emotional Support'],
      icon: <Heart className="text-rose-500" size={40} />,
      color: 'bg-rose-50',
       img:service3
    },
    {
      id: 'menopause',
      title: 'Menopause & Midlife Wellness',
      items: ['Hormonal Evaluation', 'Hot Flash Management', 'Bone Health & Dexa Scans', 'Cardiovascular Screening', 'Mood & Sleep Support', 'Non-Hormonal Options'],
      icon: <Activity className="text-amber-500" size={40} />,
      color: 'bg-amber-50',
       img:service4
    },
    {
      id: 'preventive',
      title: 'Preventive & Holistic Wellness',
      items: ['Annual Wellness Checkups', 'Pap Smears & Cervical Health', 'Cancer Screening (Breast & Cervical)', 'Diet & Weight Management', 'Mental Wellness Support', 'Sexual Health Guidance'],
      icon: <Sparkles className="text-indigo-500" size={40} />,
      color: 'bg-indigo-50',
       img:service5
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <span className="text-sage font-bold tracking-widest uppercase text-sm mb-4 inline-block">Full Care Catalogue</span>
             <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight italic">Specialized Care for Every Life Stage</h1>
             <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">One roof. One partner. Comprehensive clinical services delivered with empathy and precision.</p>
             
             <div className="flex flex-wrap justify-center gap-4">
                {serviceCategories.map(cat => (
                  <a key={cat.id} href={`#${cat.id}`} className="px-6 py-2 rounded-full border border-slate-200 text-sm font-semibold hover:border-terracotta hover:text-terracotta transition-all bg-white">{cat.title}</a>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {serviceCategories.map((cat, idx) => (
            <div key={cat.id} id={cat.id} className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
               <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                    <div className={`w-20 h-20 ${cat.color} rounded-2xl flex items-center justify-center mb-10 shadow-sm`}>
                      {cat.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">{cat.title}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {cat.items.map(item => (
                         <div key={item} className="flex items-start gap-3 group">
                            <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-terracotta/30 group-hover:bg-terracotta transition-colors flex-shrink-0" />
                            <p className="text-slate-700 font-medium">{item}</p>
                         </div>
                       ))}
                    </div>
                    <div className="mt-12">
                       <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Consult Now <Plus size={18} /></Link>
                    </div>
                  </motion.div>
               </div>
               
               <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <TiltCard className="aspect-square bg-cream rounded-[60px] overflow-hidden relative">
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
                    <div className="absolute inset-0 bg-sage/10 mix-blend-multiply opacity-30" />
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
                    />
                  </TiltCard>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wellness CTA */}
      <section className="py-24 bg-cream">
         <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Priority Annual Wellness Checkup</h2>
            <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto italic">“Prevention is the highest form of healthcare.” Our annual screenings are designed to identify concerns before they grow, keeping you healthy at every stage.</p>
            <Link to="/contact" className="btn-secondary text-lg px-12 py-5">Book Your Annual Checkup Today</Link>
         </div>
      </section>
    </div>
  );
};

export default Services;
