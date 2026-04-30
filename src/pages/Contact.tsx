import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ShieldCheck, Heart } from 'lucide-react';
import service5 from '../assests/contact-us.jpg';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-terracotta font-bold uppercase tracking-widest text-sm mb-4 inline-block">Welcome & Reassure</span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight italic">Your Health Journey Deserves a <span className="text-terracotta">Caring Partner</span></h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg italic">Whether it's a routine checkup or a specific health concern, we're here to walk beside you. No problem is too small.</p>
           </motion.div>
           <div className="relative aspect-video rounded-[60px] overflow-hidden bg-white shadow-2xl">
              <div className="absolute inset-0 bg-sageflex items-center justify-center">
                 <img 
                      src={service5} 
                      alt="contact us" 
                      className="w-full h-full object-cover transition-all duration-700 scale-105"
                    />
              </div>
              <div className="absolute inset-x-8 bottom-8 glass p-8 rounded-3xl z-10">
                 <p className="font-serif text-2xl font-bold text-slate-900 italic">"Welcome Offer"</p>
                 <p className="text-slate-600 mt-2">First-time patient? Mention this website for a special discounted wellness checkup.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
           <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-serif text-3xl font-bold mb-8">Get In Touch</h3>
                <div className="space-y-8">
                  <a href="tel:9677605596" className="flex items-center gap-6 group">
                     <div className="w-12 h-12 bg-cream text-terracotta rounded-full flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-all">
                       <Phone size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                       <p className="text-xl font-bold text-slate-800">967760 5596</p>
                     </div>
                  </a>
                  
                  <a href="mailto:medwell2021@gmail.com" className="flex items-center gap-6 group">
                     <div className="w-12 h-12 bg-cream text-terracotta rounded-full flex items-center justify-center group-hover:bg-terracotta group-hover:text-white transition-all">
                       <Mail size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                       <p className="text-xl font-bold text-slate-800">medwell2021@gmail.com</p>
                     </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold mb-8">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors">
                     <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors">
                     <Instagram size={20} />
                  </a>
                </div>
              </div>
           </div>

           <div className="md:col-span-2">
              <div className="bg-cream/40 p-12 rounded-[60px] border border-slate-100">
                 <h3 className="font-serif text-3xl font-bold mb-8 italic">Appointment Booking</h3>
                 <form className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                       <input type="text" className="bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-terracotta/50 outline-none" placeholder="Your full name" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone</label>
                       <input type="tel" className="bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-terracotta/50 outline-none" placeholder="967760 5596" />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Reason for Visit</label>
                       <select className="bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-terracotta/50 outline-none">
                          <option>Gynaecology</option>
                          <option>Pregnancy</option>
                          <option>Fertility</option>
                          <option>Menopause</option>
                          <option>General Checkup</option>
                       </select>
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Preferred Date</label>
                       <input type="date" className="bg-white border-none rounded-2xl p-4 focus:ring-2 focus:ring-terracotta/50 outline-none" />
                    </div>
                    <div className="sm:col-span-2">
                       <button type="submit" className="btn-primary w-full py-5 text-lg font-bold shadow-2xl">Book My Visit Today</button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-24 bg-cream">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 h-[500px] bg-white rounded-[60px] overflow-hidden shadow-xl border-8 border-white p-2">
               <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.79589062777!2d79.11531737583815!3d10.750208259675166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab9f9d9d68c8f%3A0x6823936a2e186b24!2sMedwell%20Women&#39;s%20Clinic!5e0!3m2!1sen!2sin!4v1777522249974!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '50px' }} 
                  allowFullScreen={true} 
                  loading="lazy"
               />
            </div>
            
            <div className="order-1 md:order-2 space-y-12">
               <div>
                  <h3 className="font-serif text-3xl font-bold mb-6 italic">Clinic Location</h3>
                  <div className="flex gap-6 items-start">
                     <MapPin className="text-terracotta mt-1" size={24} />
                     <p className="text-xl text-slate-700 leading-relaxed font-serif">
                       MIG, 10/261, near M TEENZ SHOWROOM,<br /> New Housing Unit, <br />Thanjavur, Tamil Nadu 613005
                     </p>
                  </div>
               </div>
               
               <div>
                  <h3 className="font-serif text-3xl font-bold mb-6 italic">Clinic Hours</h3>
                  <div className="space-y-4">
                     <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Monday – Saturday</span>
                        <span className="font-bold text-slate-800">10:00 AM – 08:00 PM</span>
                     </div>
                     <div className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">Sunday / Holidays</span>
                        <span className="font-bold text-sage">On Appointment Basis</span>
                     </div>
                  </div>
                  <p className="mt-6 text-sm text-slate-500 italic flex items-center gap-2">
                     <ShieldCheck size={16} /> Appointment booking is recommended for reduced wait times.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Welcome Offer Reminder */}
      <section className="bg-sage py-12">
         <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <p className="text-xl font-serif italic">"We look forward to walking beside you on your journey to wellness."</p>
         </div>
      </section>
    </div>
  );
};

export default Contact;
