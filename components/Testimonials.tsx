import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCMSContent } from '../hooks/useCMSContent.ts';
import { testimonialsInfo as fallbackInfoLib } from '../lib/testimonialsData.ts';

// Definir interfaz mínima para CMS, ignorando las partes complejas que ya no usamos
interface SimpleTestimonialsInfo {
  title: string;
  subtitle: string;
}

const fallbackInfo: SimpleTestimonialsInfo = {
  title: fallbackInfoLib.title,
  subtitle: fallbackInfoLib.subtitle
};

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cmsData = useCMSContent<SimpleTestimonialsInfo>('testimonials.json', null); // Usamos null como fallback inicial
    const info = cmsData || fallbackInfo;

    useEffect(() => {
        // Lógica para inyectar el script de Trustmary
        // Usamos un timeout corto para asegurar que el DOM está listo y no bloquear el render inicial
        const timer = setTimeout(() => {
            if (containerRef.current) {
                // Verificamos si ya existe para evitar duplicados en re-renders
                const existingScript = containerRef.current.querySelector('script[src="https://widget.trustmary.com/IDKFeBge-"]');
                
                if (!existingScript) {
                    const script = document.createElement('script');
                    script.src = "https://widget.trustmary.com/IDKFeBge-";
                    script.async = true;
                    containerRef.current.appendChild(script);
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="testimonios" className="section-padding bg-warm-white overflow-hidden">
            <div className="container-custom">
                {/* Header de la sección (mantenido para consistencia visual) */}
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">{info.title}</h2>
                    <p className="mt-4">{info.subtitle}</p>
                </motion.div>

                {/* Contenedor del Widget de Trustmary */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    ref={containerRef}
                    className="w-full min-h-[400px] flex justify-center items-center"
                    aria-label="Reseñas de clientes verificadas por Trustmary"
                >
                    {/* El script generará el iframe/widget aquí dentro */}
                </motion.div>
            </div>
        </section>
    );
}
