import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Heart,
  Activity,
  Sparkles,
  Plus,
  Users,
} from 'lucide-react';

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
      badge: 'Core Gynaecology',
      title: 'General & Advanced Gynaecology',
      items: [
        'PCOS Management',
        'PMS & Menstrual Irregularities',
        'Fibroids & Endometriosis',
        'Infections & Routine Checkups',
        'Breast Health Screening',
        'Pelvic Pain Therapy',
      ],
      icon: <Heart className="text-terracotta" size={34} />,
      color: 'bg-terracotta/5',
      badgeColor: 'bg-terracotta text-white',
      img: service1,
    },
    {
      id: 'maternity',
      badge: 'Maternity',
      title: 'Pregnancy & Maternity Care',
      items: [
        'Pre-conception Planning',
        'High-Risk Pregnancy Support',
        'Growth Scans & Monitoring',
        'Birth Preparation & Guidance',
        'Postnatal Recovery Care',
        'Breastfeeding Support',
      ],
      icon: <Users className="text-sage" size={34} />,
      color: 'bg-sage/5',
      badgeColor: 'bg-sage text-white',
      img: service2,
    },
    {
      id: 'fertility',
      badge: 'Fertility',
      title: 'Fertility & Reproductive Health',
      items: [
        'Fertility Evaluation',
        'Hormonal Studies',
        'Ovulation Tracking',
        'Natural Conception Counseling',
        'Lifestyle Optimization',
        'Emotional Support',
      ],
      icon: <ShieldCheck className="text-rose-500" size={34} />,
      color: 'bg-rose-50',
      badgeColor: 'bg-rose-500 text-white',
      img: service3,
    },
    {
      id: 'menopause',
      badge: 'Midlife Wellness',
      title: 'Menopause & Midlife Wellness',
      items: [
        'Hormonal Evaluation',
        'Hot Flash Management',
        'Bone Health & Dexa Scans',
        'Cardiovascular Screening',
        'Mood & Sleep Support',
        'Non-Hormonal Options',
      ],
      icon: <Activity className="text-amber-500" size={34} />,
      color: 'bg-amber-50',
      badgeColor: 'bg-amber-500 text-white',
      img: service4,
    },
    {
      id: 'preventive',
      badge: 'Preventive Care',
      title: 'Preventive & Holistic Wellness',
      items: [
        'Annual Wellness Checkups',
        'Pap Smears & Cervical Health',
        'Cancer Screening (Breast & Cervical)',
        'Diet & Weight Management',
        'Mental Wellness Support',
        'Sexual Health Guidance',
      ],
      icon: <Sparkles className="text-indigo-500" size={34} />,
      color: 'bg-indigo-50',
      badgeColor: 'bg-indigo-500 text-white',
      img: service5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-sage font-bold tracking-widest uppercase text-sm mb-4 inline-block">
              Full Care Catalogue
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight italic">
              Specialized Care for Every Life Stage
            </h1>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-12">
              One roof. One partner. Comprehensive clinical services delivered
              with empathy and precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-6 py-2 rounded-full border border-slate-200 text-sm font-semibold hover:border-terracotta hover:text-terracotta transition-all bg-white"
                >
                  {cat.badge}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {serviceCategories.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* Left Content */}
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: idx % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Icon + Badge */}
                  <div className="flex items-center gap-5 mb-10">
                    <div
                      className={`w-20 h-20 ${cat.color} rounded-2xl flex items-center justify-center shadow-sm`}
                    >
                      {cat.icon}
                    </div>

                    {/* Badge Right Side */}
                    <div
                      className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wide ${cat.badgeColor}`}
                    >
                      {cat.badge}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                    {cat.title}
                  </h2>

                  {/* Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {cat.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 group"
                      >
                        <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-terracotta/30 group-hover:bg-terracotta transition-colors flex-shrink-0" />

                        <p className="text-slate-700 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-12">
                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Consult Now <Plus size={18} />
                    </Link>
                  </div>
                </motion.div>
              </div>

              {/* Right Image */}
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

      {/* CTA */}
   <section className="py-24 bg-cream">
  <div className="max-w-5xl mx-auto px-6">
    
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 md:p-14 shadow-sm">
      
      {/* Heading */}
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-slate-900 mb-8">
          "You don't need a big problem
          <br />
          to come to us."
        </h2>

        <p className="text-slate-600 text-lg leading-9 mb-6">
          A small worry. A quiet concern. A body signal you've been
          ignoring. A question you've been afraid to ask. These are all
          reasons enough to walk through our door.
        </p>

        <p className="text-terracotta text-lg italic mb-10">
          ✦ Small questions and big concerns — both are important
        </p>
      </div>

      {/* List */}
      <div className="space-y-4 mb-10">
        {[
          'First-visit special discounted wellness check',
          'Priority scheduling for new patients',
          'Book instantly via Docterz App',
          'Mon–Sat · By appointment · 96776 05596',
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 border border-slate-200 rounded-2xl px-5 py-4 hover:border-terracotta/40 transition-all"
          >
            <span className="text-terracotta text-sm">✦</span>

            <p className="text-slate-700 font-medium">{item}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <Link
        to="/contact"
        className="btn-secondary w-full inline-flex justify-center items-center py-5 rounded-full text-lg"
      >
        Book Your Annual Checkup Today
      </Link>

    </div>
  </div>
</section>
    </div>
  );
};

export default Services;