import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials, testimonialsInfo, Testimonial } from '../lib/testimonialsData.ts';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter.ts';
import TestimonialCard from './TestimonialCard.tsx';

// Componente interno para las estadísticas animadas
const StatItem = ({ end, label }: { end: string; label: string }) => {
    const { ref, count } = useAnimatedCounter(end);
    return (
        <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
            <span ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-accent block mb-2">
                {count}
            </span>
            <p className="text-sm font-medium text-warm-gray-600 tracking-wide uppercase">{label}</p>
        </div>
    );
};

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    // Referencias para gestos táctiles
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    const length = testimonials.length;

    // Lógica de Autoplay
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, length]);

    // Funciones de navegación
    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + length) % length);
    };

    // Manejadores de Touch
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
        setIsPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        setIsPaused(false);
        if (!touchStartX.current || !touchEndX.current) return;
        
        const diff = touchStartX.current - touchEndX.current;
        // Umbral de 50px para considerar swipe
        if (Math.abs(diff) > 50) {
            if (diff > 0) goToNext();
            else goToPrevious();
        }
        
        // Reset
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Calcular posición relativa para efectos 3D
    const getPosition = (index: number) => {
        if (index === currentIndex) return 'center';
        if (index === (currentIndex - 1 + length) % length) return 'left';
        if (index === (currentIndex + 1) % length) return 'right';
        return 'hidden';
    };

    // Variantes de animación 3D
    const variants: Variants = {
        center: {
            x: '0%',
            scale: 1,
            zIndex: 20,
            opacity: 1,
            rotateY: 0,
            filter: 'blur(0px)',
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        left: {
            x: '-60%', // Ajustado para responsive
            scale: 0.85,
            zIndex: 10,
            opacity: 0.6,
            rotateY: 35,
            filter: 'blur(2px)',
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        right: {
            x: '60%', // Ajustado para responsive
            scale: 0.85,
            zIndex: 10,
            opacity: 0.6,
            rotateY: -35,
            filter: 'blur(2px)',
            transition: { type: 'spring', stiffness: 300, damping: 30 }
        },
        hidden: {
            x: '0%',
            scale: 0.5,
            zIndex: 0,
            opacity: 0,
            rotateY: 0,
            filter: 'blur(10px)',
        }
    };

    const scrollToContact = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Filtramos solo los visibles para renderizar (optimización)
    // Aunque mapeamos todos y Framer Motion maneja el "hidden" state
    
    return (
        <section id="testimonios" className="section-padding bg-warm-white overflow-hidden perspective-container">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">{testimonialsInfo.title}</h2>
                    <p className="mt-4">{testimonialsInfo.subtitle}</p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20 md:mb-24 divide-y sm:divide-y-0 sm:divide-x divide-primary-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <StatItem end={testimonialsInfo.stats.totalClients} label="Clientes Felices" />
                    <StatItem end={testimonialsInfo.stats.rating} label="Valoración Promedio" />
                    <StatItem end={testimonialsInfo.stats.satisfaction} label="Satisfacción" />
                </motion.div>

                {/* 3D Carousel Container */}
                <div 
                    className="relative max-w-6xl mx-auto h-[500px] md:h-[450px] flex items-center justify-center mb-16"
                    style={{ perspective: '1200px' }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {testimonials.map((testimonial, index) => {
                        const position = getPosition(index);
                        const isCenter = position === 'center';
                        
                        // Solo renderizamos si es visible o está animando
                        if (position === 'hidden') return null;

                        return (
                            <motion.div
                                key={testimonial.id}
                                className="absolute w-full max-w-lg px-4 md:px-0"
                                initial="hidden"
                                animate={position}
                                variants={variants}
                                layout
                            >
                                <div className={`relative h-full transition-shadow duration-300 ${isCenter ? 'shadow-2xl' : 'shadow-lg'}`}>
                                    <TestimonialCard 
                                        testimonial={testimonial} 
                                        isCenter={isCenter} 
                                    />
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Controles laterales para desktop */}
                    <button 
                        onClick={goToPrevious}
                        className="absolute left-0 md:left-4 z-30 p-3 rounded-full bg-white/80 hover:bg-white text-warm-gray-800 shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent hidden md:block"
                        aria-label="Testimonio anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={goToNext}
                        className="absolute right-0 md:right-4 z-30 p-3 rounded-full bg-white/80 hover:bg-white text-warm-gray-800 shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent hidden md:block"
                        aria-label="Siguiente testimonio"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Indicadores (Dots) */}
                <div className="flex justify-center gap-2 mb-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setCurrentIndex(index);
                                setIsPaused(true);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'w-8 bg-accent' 
                                    : 'w-2 bg-primary-200 hover:bg-primary-300'
                            }`}
                            aria-label={`Ir al testimonio ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-serif font-bold text-warm-gray-900 mb-3">{testimonialsInfo.cta.title}</h3>
                    <p className="text-warm-gray-600 mb-8 max-w-md mx-auto">{testimonialsInfo.cta.description}</p>
                    <button
                        onClick={scrollToContact}
                        className="btn-primary px-10 py-4 shadow-xl shadow-accent/20"
                    >
                        {testimonialsInfo.cta.buttonText}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}