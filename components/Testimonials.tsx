import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { testimonialsInfo } from '../lib/testimonialsData.ts';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter.ts';
import { ArrowRight } from 'lucide-react';

const StatItem = ({ end, label }: { end: string; label: string }) => {
    const { ref, count } = useAnimatedCounter(end);
    return (
        <div className="text-center">
            <span ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-accent">
                {count}
            </span>
            <p className="text-sm text-warm-gray-600 mt-1">{label}</p>
        </div>
    );
};

export default function Testimonials() {
    const [isWidgetLoading, setWidgetLoading] = useState(true);
    const [widgetError, setWidgetError] = useState(false);
    const widgetContainerRef = useRef<HTMLDivElement>(null);

    // Widget Trustmary nuevo con ID IDKFeBge- reemplaza cards - carga dinámica para SSR
    useEffect(() => {
        if (typeof window === 'undefined' || !widgetContainerRef.current) return;

        const scriptId = 'trustmary-widget-script-IDKFeBge-';
        const scriptSrc = 'https://widget.trustmary.com/IDKFeBge-';

        if (document.getElementById(scriptId)) {
            setWidgetLoading(false);
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = scriptSrc;
        script.async = true;

        script.onload = () => {
            setTimeout(() => setWidgetLoading(false), 500);
        };
        script.onerror = () => {
            setWidgetLoading(false);
            setWidgetError(true);
            console.error('Error: Failed to load the Trustmary widget script.');
        };
        
        widgetContainerRef.current.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    const scrollToContact = () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="testimonios" className="section-padding bg-warm-white overflow-hidden" aria-labelledby="testimonials-title">
            <div className="container-custom">
                {/* Section Title */}
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 id="testimonials-title">{testimonialsInfo.title}</h2>
                    <p>{testimonialsInfo.subtitle}</p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <StatItem end={testimonialsInfo.stats.totalClients} label="Clientes Satisfechos" />
                    <StatItem end={testimonialsInfo.stats.rating} label="Valoración Promedio" />
                    <StatItem end={testimonialsInfo.stats.satisfaction} label="Tasa de Satisfacción" />
                </motion.div>

                {/* Trustmary Widget Container */}
                <div 
                    className="relative max-w-5xl mx-auto min-h-[400px] flex items-center justify-center"
                    aria-label="Widget de reseñas Trustmary actualizado para testimonios de clientes en bodas y quinceañeras"
                >
                    {isWidgetLoading && (
                        <div className="text-center transition-opacity duration-300">
                            <div className="spinner mx-auto"></div>
                            <p className="mt-4 text-warm-gray-500">Cargando testimonios...</p>
                        </div>
                    )}
                    {widgetError && (
                         <div className="text-center p-8 bg-warm-gray-50 border border-warm-gray-200 rounded-lg">
                            <p className="font-medium text-warm-gray-800">No se pudieron cargar los testimonios.</p>
                            <p className="text-sm text-warm-gray-500 mt-1">Por favor, intente refrescar la página más tarde.</p>
                        </div>
                    )}
                    <div ref={widgetContainerRef} className="w-full" />
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-24 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-2">{testimonialsInfo.cta.title}</h3>
                    <p className="text-warm-gray-600 mb-6 max-w-lg mx-auto">{testimonialsInfo.cta.description}</p>
                    <button
                        onClick={scrollToContact}
                        className="btn-primary group text-base md:text-lg px-8 py-3"
                        aria-label="Reservar tu fecha"
                    >
                        <span>{testimonialsInfo.cta.buttonText}</span>
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
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
 *    - Este código reemplaza completamente el contenido de `components/Testimonials.tsx`.
 *    - El carrusel de testimonios manual ha sido sustituido por el widget dinámico de Trustmary con el nuevo ID.
 *
 * 2. PRUEBAS:
 *    - Reinicia tu servidor de desarrollo (`npm run dev`).
 *    - La sección "Testimonios" ahora debería mostrar el título, las estadísticas y luego el nuevo widget de Trustmary.
 *    - Utiliza las herramientas de desarrollador (F12) para probar el diseño responsive en vistas de móvil y escritorio.
 *    - El widget debe cargarse de forma centrada y ocupar el espacio de las antiguas cards.
 *
 * 3. TROUBLESHOOTING:
 *    - Si el widget no se carga, revisa la consola del navegador en busca de errores (CORS, 404, etc.).
 *    - El componente incluye un estado de carga y un mensaje de error como fallback para mejorar la experiencia del usuario si el script de Trustmary falla.
 *
 */