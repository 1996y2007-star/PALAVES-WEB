import React from 'react';
import { motion } from 'framer-motion';
import { WhatsApp } from './icons.tsx';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '59898760160'; // Ensure this is the correct number
    const message = encodeURIComponent('Hola Santiago! Quisiera hacer una consulta sobre tus servicios.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 1 }}
      className="fixed bottom-6 right-6 z-30 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-warm-white"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      {/* Notification Badge */}
      <span className="absolute top-0 right-0 block h-5 w-5 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-white">
        <span className="absolute inset-0 rounded-full bg-red-500 animate-pulse"></span>
        <span className="relative flex items-center justify-center text-xs font-bold text-white">1</span>
      </span>

      <WhatsApp className="w-8 h-8" />
    </motion.button>
  );
};

export default FloatingWhatsApp;