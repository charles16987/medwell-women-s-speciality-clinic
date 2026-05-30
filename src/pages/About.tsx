import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from '@/src/components/ui/TiltCard';
import { Link } from 'react-router-dom';
import { Phone, Users, Heart, Star, Sparkles, HandHeart, Users2, ShieldCheck, ArrowRight, Download } from 'lucide-react';
import aboutus from '../assests/about-us-1.jpg';
import aboutus1 from '../assests/Medwell-Story-img-2.jpg.jpg';
import aboutus2 from '../assests/Medwell-Story-img-1.jpg';
import doctor1 from '../assests/doctor-1.jpg';
import doctor2 from '../assests/doctor-2.jpg';
import doctor3 from '../assests/doctor-3.jpg';

const About = () => {
  return (
    <div className="pt-20">
      {/* S1: FOUNDER'S LETTER */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden banner-img-1">
              {/* <Hero3D /> */}
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                
      
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
                 <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <span className="inline-block px-4 py-1.5 rounded-full bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-widest mb-6">
    A Letter From Our Founder
  </span>

  <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
    I Started Medwell
    <br />
    <span className="text-terracotta italic font-normal">
      Because of You
    </span>
  </h1>

  <p className="text-lg text-slate-600 mb-6 max-w-2xl leading-relaxed">
    Maybe you've been carrying a worry quietly for months, unsure if it was worth
    mentioning. Maybe you've felt rushed, unheard, or left with more questions
    than answers.
  </p>

  <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
    I founded Medwell with one simple belief — every woman deserves healthcare
    that is warm, thorough, and deeply personal. A place where you're seen,
    heard, and cared for at every stage of life.
  </p>

  <div className="flex flex-wrap gap-4 items-center">
    <Link to="/contact" className="btn-primary">
      Book an Appointment
    </Link>

    <div className="pl-4 border-l border-slate-300">
      <p className="font-serif text-xl text-slate-900 italic">
        Dr. Anusuya V.
      </p>
      <p className="text-xs uppercase tracking-widest text-sage font-semibold">
        Founder & Chief Consultant
      </p>
    </div>
  </div>
               </motion.div>
              </div>
            </section>
      
  
      {/* S2: OUR PHILOSOPHY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Core Philosophy</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">We believe in a holistic, whole-person approach to wellness that empowers women at every life stage.</p>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
             {[
               { icon: <Heart size={32} />, title: 'Compassion', desc: 'Treating every patient with dignity and deep empathy.' },
               { icon: <Sparkles size={32} />, title: 'Empowerment', desc: 'Educating women to take charge of their own health.' },
               { icon: <ShieldCheck size={32} />, title: 'Trust', desc: 'Building lifelong relationships through transparency.' },
               { icon: <Star size={32} />, title: 'Excellence', desc: 'Clinical standards that meet global benchmarks.' }
             ].map((pillar, i) => (
               <motion.div key={pillar.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-cream/50 p-10 rounded-[40px] text-center hover:bg-cream transition-colors group">
                  <div className="text-terracotta mb-6 flex justify-center group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed italic">"{pillar.desc}"</p>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* S3: STORY */}
      <section className="py-24 bg-sage text-white relative">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">The Medwell Story</h2>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                <p>Medwell was founded in 2021 with a singular purpose: to create a specialized environment where high-end gynaecological care feels like home.</p>
                <p>Seeing a gap in personalized care for women in our region, Dr. Anusuya envisioned a space that combined advanced diagnostic capabilities with a warm, supportive atmosphere. Today, we serves as a beacon of health for thousands of families.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="h-48 bg-white/10 rounded-3xl" >
               <img className="w-full h-full object-cover rounded-3xl" src={aboutus1} alt="" />
               </div>
               <div className="h-48 bg-white/10 rounded-3xl mt-8" >
                <img className="w-full h-full object-cover rounded-3xl" src={aboutus2} alt="" />
                  </div>
            </div>
         </div>
      </section>

      {/* S4: MEET THE TEAM */}
      <section className="py-24 bg-cream">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet the Team</h2>
               <p className="text-slate-600">A dedicated team of experts walking beside you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-white p-6 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="aspect-square bg-slate-100 rounded-[30px] mb-6 overflow-hidden">
                        <img src={doctor1} alt="" className="w-full h-full object-cover"  />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-xl font-bold">Health Care Specialist</p>
                       <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mt-1">Speciality Care</p>
                    </div>
                 </div>
                  <div className="bg-white p-6 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="aspect-square bg-slate-100 rounded-[30px] mb-6 overflow-hidden">
                       <img src={doctor2} alt="" className="w-full h-full object-cover"  />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-xl font-bold">Health Care Specialist</p>
                       <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mt-1">Speciality Care</p>
                    </div>
                 </div>
                  <div className="bg-white p-6 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="aspect-square bg-slate-100 rounded-[30px] mb-6 overflow-hidden">
                       <img src={doctor3} alt="" className="w-full h-full object-cover"  />
                    </div>
                    <div className="text-center">
                       <p className="font-serif text-xl font-bold">Health Care Specialist</p>
                       <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mt-1">Speciality Care</p>
                    </div>
                 </div>
            </div>
         </div>
      </section>

      {/* S6: CTA */}
      <section className="py-24 bg-terracotta text-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">Ready to feel seen and heard?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="bg-white text-terracotta px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-cream transition-colors">Book Apppointment</Link>
               <button className="flex items-center justify-center gap-2 border-2 border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"> <Download size={20} /> Clinic Brochure</button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
