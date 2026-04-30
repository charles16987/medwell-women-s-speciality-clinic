import React from 'react';
import { motion } from 'motion/react';

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Animated Circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-24 h-24 border-4 border-terracotta border-t-transparent flex items-center justify-center"
        />
        
        {/* Central Logo Letter */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center font-serif text-3xl font-bold text-terracotta"
        >
          M
        </motion.span>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="font-serif text-2xl font-bold text-slate-800 tracking-tight">MEDWELL</h2>
        <p className="text-sm text-sage uppercase tracking-widest font-semibold mt-1">Science Meets Soul</p>
      </motion.div>
    </motion.div>
  );
};
