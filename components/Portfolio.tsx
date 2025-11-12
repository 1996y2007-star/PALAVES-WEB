import React from 'react';
import { motion } from 'framer-motion';
import PhotoCarousel from './PhotoCarousel.tsx';
import { weddingPhotos, quinceaneraPhotos } from '../lib/portfolioData.ts';
import { MessageCircle } from './icons.tsx';

const handleWhatsAppClick = () => {
    const phoneNumber = '59899123456';
    const message = encodeURIComponent('Hola Santiago! Ví tu portfolio y me encantaría hablar sobre mi evento.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-warm-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Historias en Imágenes</h2>
          <p>
            Un recorrido visual por bodas y quinceañeras llenas de emoción. Cada galería es una historia única.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
            <PhotoCarousel photos={weddingPhotos} title="Bodas" />
            
            <div className="w-full flex justify-center">
                <div className="w-24 h-px bg-primary-200"></div>
            </div>

            <PhotoCarousel photos={quinceaneraPhotos} title="15 Años" />
        </div>
        
        <div className="text-center mt-24 md:mt-32">
          <p className="text-xl md:text-2xl text-warm-gray-700 mb-8">
            ¿Te imaginás tus fotos acá?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="btn-primary text-base md:text-lg px-10 py-4 group"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Hablemos por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}