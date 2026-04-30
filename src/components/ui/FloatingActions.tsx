import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        href="tel:9677605596"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-terracotta text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-terracotta-light transition-colors group relative"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-white px-3 py-1 rounded-md text-sm text-terracotta font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Call Clinic
        </span>
      </motion.a>

      <motion.a
        href="https://wa.me/919677605596"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:opacity-90 transition-opacity group relative"
      >
        <MessageSquare size={24} />
        <span className="absolute right-full mr-4 bg-white px-3 py-1 rounded-md text-sm text-[#25D366] font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
};
