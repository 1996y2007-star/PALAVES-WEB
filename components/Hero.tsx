import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from './icons.tsx';

// Array of new images for the hero slideshow, now with 5 images and enhanced SEO descriptions.
const heroImages = [
  // Fondo 1: Ceremonia eclesiástica - SEO para 'bodas en iglesia Uruguay'
  {
    src: 'https://i.imgur.com/4vD7L3s.jpg',
    alt: 'Fotografía de ceremonia de boda íntima en una iglesia histórica de Uruguay, con la novia de espaldas luciendo un vestido blanco y el novio a su lado frente a un altar con murales artísticos.',
    category: 'boda',
  },
  // Fondo 2: Retrato en dunas - SEO para 'bodas en la playa Uruguay'
  {
    src: 'https://i.imgur.com/qAXcd9g.jpg',
    alt: 'Retrato romántico de una pareja de novios en las dunas de una playa uruguaya al atardecer. La luz dorada del sol poniente ilumina la escena, creando una atmósfera cinematográfica para una boda costera.',
    category: 'boda',
  },
  // Fondo 3: Reflexión costera - SEO para 'sesión de fotos de novia'
  {
    src: 'https://i.imgur.com/vlnaCOG.jpg',
    alt: 'Fotografía serena de una novia sentada de espaldas sobre rocas junto al mar al atardecer en Uruguay. El vestido blanco contrasta con el cielo anaranjado y el océano, evocando reflexión y paz.',
    category: 'boda',
  },
  // Fondo 4: Celebración alegre - SEO para 'fiesta de boda Uruguay'
  {
    src: 'https://i.imgur.com/FzovMia.jpg',
    alt: 'Momento festivo y alegre en una boda nocturna en Uruguay, donde la novia es levantada en brazos con una gran sonrisa. Fotografía que captura la celebración y la felicidad de los recién casados.',
    category: 'boda',
  },
  // Fondo 5: Retrato ecuestre - SEO para 'sesión de fotos de quinceañera'
  {
    src: 'https://i.imgur.com/QoOi44b.jpg',
    alt: 'Retrato ecuestre de una mujer montando a caballo en un campo uruguayo durante el atardecer. La luz dorada crea una atmósfera aventurera y serena, ideal para una sesión de fotos de quinceañera.',
    category: 'quinceanera',
  },
];

// Function for smooth scroll to a section
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    // A slight offset to account for the sticky header
    const headerOffset = 100;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }
};


// Function to open WhatsApp
const handleWhatsAppClick = () => {
  const phoneNumber = '59899123456'; // Example: Uruguay code + 9-digit number
  const message = encodeURIComponent('Hola Santiago! Me interesa conocer más sobre tus servicios de fotografía.');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
};

// Reusable variants for animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Automatic image change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mark as loaded after the first render
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover"
              sizes="100vw"
            />
            {/* Ken Burns effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${heroImages[currentImageIndex].src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 6, ease: 'easeOut' }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
      </div>

      {/* Hero Content */}
      <div role="region" aria-label="Carrusel de imágenes hero" aria-live="polite" className="relative z-20 h-full flex items-center justify-center">
        <span className="sr-only">Mostrando imagen {currentImageIndex + 1} de {heroImages.length}</span>
        <div className="container-custom text-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
          >
            <motion.h1
              variants={childVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
            >
              Momentos únicos,{' '}
              <span className="block mt-2 text-primary-200">para siempre</span>
            </motion.h1>
            
            <motion.p
              variants={childVariants}
              className="text-lg sm:text-xl md:text-2xl text-warm-gray-100 max-w-2xl mx-auto font-light"
            >
              Fotografía de bodas y eventos sociales
            </motion.p>
            
            <motion.div
              variants={childVariants}
              className="flex items-center justify-center gap-4 max-w-xs mx-auto"
            >
              <span className="h-px flex-1 bg-primary-300/50" />
              <span className="text-primary-300 text-sm">★</span>
              <span className="h-px flex-1 bg-primary-300/50" />
            </motion.div>
            
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-warm-gray-900 font-medium text-lg rounded-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-accent/50 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black/50 min-w-[240px]"
              >
                <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Hablemos de tu evento</span>
              </button>
              
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-lg border-2 border-white/50 hover:border-white rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 min-w-[240px]"
              >
                <span>Ver mi trabajo</span>
                <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <button
          onClick={() => scrollToSection('portfolio')}
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-2"
          aria-label="Desplazar hacia abajo"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Descubre más</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>

      {/* Slideshow Indicators (Dots) */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentImageIndex
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/*
 * =================================================================
 * Instrucciones de Integración
 * =================================================================
 *
 * 1. REEMPLAZO DEL COMPONENTE:
 *    - Este código reemplaza completamente el contenido de `components/Hero.tsx`.
 *    - El componente ya está importado en `App.tsx`, por lo que no se necesitan más cambios de integración.
 *
 * 2. PRUEBAS:
 *    - Reinicia tu servidor de desarrollo (`npm run dev` o similar) para ver los cambios.
 *    - Verifica que el slideshow de fondos rote automáticamente cada 5 segundos entre las 5 nuevas imágenes y que las transiciones sean suaves.
 *    - Prueba el diseño responsive en modo de dispositivo móvil para asegurar que las imágenes se recorten correctamente y el texto sea legible.
 *
 * 3. MIGRACIÓN A CDN (Recomendado para producción):
 *    - Aunque Imgur es útil, para un rendimiento óptimo y control total, considera migrar las imágenes a un CDN como Cloudinary, Vercel Blob o AWS S3.
 *    - Esto te permitirá optimizar las imágenes sobre la marcha (ej., convirtiéndolas a formato WebP) y mejorar la velocidad de carga global.
 *    - Ejemplo de URL en Cloudinary: `src: "https://res.cloudinary.com/tu-cuenta/image/upload/v123/hero-1.webp"`
 *
 */