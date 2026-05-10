import React from 'react';
import { motion } from 'motion/react';
import { Hero3D } from '@/src/components/ui/Hero3D';
import { TiltCard } from '@/src/components/ui/TiltCard';
import { Phone, ArrowRight, Star, Heart, Activity, UserRound, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner from '../assests/banner1.jpg';
import aboutus from '../assests/about-us-1.jpg';

const Home = () => {
  const lifecycleCards = [
    {
      title: 'Blossom Years',
      years: 'Puberty & Young Adulthood',
      description: 'Supporting you through the first chapters of womanhood.',
      icon: <Heart className="text-terracotta" />,
    },
    {
      title: 'Flourishing Years',
      years: 'Pregnancy & Motherhood',
      description: 'Expert care for your journey into new beginnings.',
      icon: <Activity className="text-terracotta" />,
    },
    {
      title: 'Wisdom Years',
      years: 'Menopause & Beyond',
      description: 'Graceful navigation through life’s mature transitions.',
      icon: <UserRound className="text-terracotta" />,
    },
  ];

  const services = [
    { title: 'Gynaecology', desc: 'Comprehensive care for every concern.', icon: <ShieldCheck size={32} /> },
    { title: 'Pregnancy', desc: 'Expert antenatal and postnatal care.', icon: <Users size={32} /> },
    { title: 'Fertility', desc: 'Supporting your path to parenthood.', icon: <Heart size={32} /> },
    { title: 'Menopause', desc: 'Specialized mid-life wellness support.', icon: <Activity size={32} /> },
    { title: 'Preventive', desc: 'Proactive screenings and health checks.', icon: <ShieldCheck size={32} /> },
  ];

  return (
    <div className="pt-18">
      {/* S1: HERO BANNER */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden banner-img">
        {/* <Hero3D /> */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-widest mb-6">
              Women's Speciality Clinic
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
              Where Every <br />
              <span className="text-terracotta italic font-normal">Woman's Story</span> <br />
              Matters
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              We bridge science and soul to provide compassionate healthcare that respects your unique journey through every life stage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Book Appointment</Link>
              <Link to="/about" className="btn-secondary group flex items-center gap-2">
                Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden md:block"
          >
            {/* <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-sage rounded-[40px] rotate-6 opacity-20" />
              <img
                src={banner}
                alt="Woman smiling"
                className="relative z-10 w-full h-full object-cover rounded-[40px] shadow-2xl"
              />
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* S2: TRUST STRIP */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div>
              <p className="text-terracotta font-serif text-3xl font-bold">Dr. Anusuya.V</p>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">Founder & Lead Doctor</p>
            </div>
            <div>
              <p className="text-slate-900 font-serif text-3xl font-bold">15+</p>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">Years of Practice</p>
            </div>
            <div>
              <p className="text-slate-900 font-serif text-3xl font-bold">10k+</p>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">Patients Served</p>
            </div>
            <div>
              <div className="flex justify-center gap-4 grayscale opacity-60">
                <ShieldCheck size={40} className="text-slate-400" />
              </div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mt-1">Accredited Clinic</p>
            </div>
          </div>
        </div>
      </section>

      {/* S3: ABOUT SNAPSHOT */}
      <section className="py-24 bg-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sage/10 rounded-full blur-3xl" />
              <p className="text-sage font-bold uppercase tracking-widest text-sm mb-4">Introduce Medwell's Soul</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                "Medwell is a comforting hand, where science meets the soul."
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed italic border-l-4 border-terracotta pl-6">
                Our clinic was founded on the belief that women's health needs a more personal, empathetic approach. We're not just another clinic; we're your partners in wellness.
              </p>
              <Link to="/about" className="text-terracotta font-bold flex items-center gap-2 group">
                Read our full story <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <TiltCard className="max-w-md mx-auto aspect-[3/4]">
              <img
                src={aboutus}
                alt="Doctor Anusuya"
                className="w-full h-full object-cover rounded-[50px] shadow-2xl bg-sage/20"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl max-w-[200px]">
                <p className="text-sm font-semibold text-slate-900">Dr. Anusuya.V</p>
                <p className="text-xs text-slate-500 mt-1">DGO, MD - Obstetrics & Gynaecology</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* S4: LIFE-STAGE CARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Complete Life-Stage Care</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Providing specialized clinical expertise tailored to the unique physical and emotional needs of women at every phase of life.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {lifecycleCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <TiltCard className="bg-sage/10 p-10 rounded-[40px] h-full group hover:bg-sage/20 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-xs font-bold text-sage uppercase tracking-widest mb-4">{card.years}</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">{card.description}</p>
                  <Link to="/services" className="text-terracotta font-bold flex items-center gap-2 group/link">
                    Explore care <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: SERVICES OVERVIEW */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Specialities</h2>
              <p className="text-slate-600 leading-relaxed text-lg">One roof for all your healthcare needs. From routine checkups to specialized maternity and fertility guidance.</p>
            </div>
            <Link to="/services" className="btn-secondary whitespace-nowrap">See All Services</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl text-center group hover:-translate-y-2 transition-all hover:shadow-xl"
              >
                <div className="text-terracotta mb-6 flex justify-center group-hover:scale-110 transition-transform">{service.icon}</div>
                <h4 className="font-serif text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-snug">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* S6: TESTIMONIALS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Voices of Medwell</h2>
            <p className="text-slate-600">Stories shared from our community of patients.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-cream p-12 rounded-[50px] relative"
              >
                <div className="flex gap-1 text-terracotta mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl font-serif italic text-slate-800 leading-relaxed mb-8">
                  {i === 1 
                    ? "“The warmth and attention I received at Medwell transformed my pregnancy into a journey of joy rather than anxiety.”"
                    : "“A truly specialized clinic that understands the nuances of women’s health. Dr. Anusuya is a gem.”"}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-terracotta font-bold border border-terracotta/10" >
                  {i === 1 ? 'P' : 'S'}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{i === 1 ? 'Priya Raman' : 'Saritha K'}</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{i === 1 ? 'New Mother' : 'Mid-life Patient'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/stories" className="text-terracotta font-bold border-b-2 border-terracotta/20 hover:border-terracotta transition-all py-1">Read More Stories</Link>
          </div>
        </div>
      </section>

      {/* S7: CTA & CONTACT BAR */}
      <section className="bg-terracotta py-20 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-10 h-full">
            {[...Array(100)].map((_, i) => <div key={i} className="border-r border-b border-white" />)}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
          >
            <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Special Welcome Offer</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Take Your First Step Today</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">Mention our website for a priority wellness checkup. Your journey to better health starts with a single conversation.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <a href="tel:9677605596" className="text-white text-3xl font-bold flex items-center gap-4 group">
                <div className="w-16 h-16 bg-white text-terracotta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                967760 5596
              </a>
              <a
                href="https://docterz.com/book-appointment"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-terracotta px-10 py-5 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-2xl"
              >
                Book Appoinment
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 pt-12 border-t border-white/20 text-white/60">
              <p>Email: <span className="text-white">medwell2021@gmail.com</span></p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
