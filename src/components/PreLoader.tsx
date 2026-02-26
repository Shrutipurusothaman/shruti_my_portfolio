import React from 'react'
import { motion } from 'framer-motion';

const PreLoader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 text-white"
    >
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-heading text-4xl md:text-6xl text-brand-blue"
        >
          WELCOME TO MY PORTFOLIO
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-1 bg-brand-blue mt-4 origin-left"
        />
      </div>
    </motion.div>
  );
};

export default PreLoader;