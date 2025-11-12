import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Loader2, MessageCircle } from './icons.tsx';
import { socialLinks } from '../lib/navigationData.ts';
import InstagramMiniEmbed from './InstagramMiniEmbed.tsx';

// Fix: Added explicit props type to make `href` optional and resolve TypeScript errors.
interface ContactLinkProps {
  icon: React.ElementType;
  href?: string;
  text: string;
  isLink?: boolean;
}

// Reusable component for contact links
const ContactLink = ({ icon: Icon, href, text, isLink = true }: ContactLinkProps) => (
  <div className="flex items-center gap-4 text-warm-gray-700">
    <Icon className="w-6 h-6 text-accent flex-shrink-0" />
    {isLink ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-accent-dark transition-colors duration-200">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
);

export default function Contact() {
  const [isScriptLoading, setIsScriptLoading] = useState(true);
  const powrScriptSrc = "https://www.powr.io/powr.js?platform=html";

  // Dynamically load the POWR script to avoid hydration issues and improve performance
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicates
    if (document.querySelector(`script[src="${powrScriptSrc}"]`)) {
      setIsScriptLoading(false);
      return;
    }

    const script = document.createElement('script');
    script.src = powrScriptSrc;
    script.async = true;
    script.onload = () => {
      // Small delay to allow the form to render after script load
      setTimeout(() => setIsScriptLoading(false), 500); 
    };
    document.body.appendChild(script);

    return () => {
      // Optional cleanup: remove the script if the component unmounts
      const existingScript = document.querySelector(`script[src="${powrScriptSrc}"]`);
      if (existingScript) {
        // In some cases, you might not want to remove it if another component needs it
        // document.body.removeChild(existingScript);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '59899123456';
    const message = encodeURIComponent(`Hola Santiago! Me interesa conocer más sobre tus servicios de fotografía.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const instagramUsername = socialLinks.instagram.url.split('/').filter(Boolean).pop();

  return (
    <section id="contacto" className="section-padding bg-warm-gradient overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>Hablemos de tu evento</h2>
          <p>
            El primer paso para tener los recuerdos más lindos de tu día especial. Escribime y coordinamos una reunión.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-warm-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-warm-gray-900 mb-6">¡Hablemos de tu Evento Especial!</h3>
            
            {/* Loading spinner for the form embed */}
            {isScriptLoading && (
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 text-accent" />
                <p className="mt-4 text-warm-gray-500">Cargando formulario...</p>
              </div>
            )}
            
            {/* Embed POWR responsive - se ajusta para alineación simétrica */}
            <div
              className="powr-form-builder"
              id="38a571ce_1762945088"
              aria-label="Formulario de contacto responsive para consultas de bodas y quinceañeras"
              title="¡Hablemos de tu Evento Especial!"
              style={{ display: isScriptLoading ? 'none' : 'block' }} // Hide until script is ready
            />
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* WhatsApp Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100 text-center">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-2">¿Preferís WhatsApp?</h3>
              <p className="text-warm-gray-600 mb-4">Es la forma más rápida y directa de contactarme.</p>
              <button onClick={handleWhatsAppClick} className="btn-secondary w-full bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                Chatear Ahora
              </button>
            </div>
            
            {/* Other Contact Info + Instagram Embed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100">
              <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-4">Otros medios de contacto</h3>
              <div className="space-y-4">
                <ContactLink icon={Mail} href="mailto:santi@ejemplo.com" text="santi@ejemplo.com" />
                <ContactLink icon={Phone} text="(+598) 99 123 456" isLink={false} />
                <ContactLink icon={MapPin} text="Montevideo, Uruguay" isLink={false} />
                <ContactLink icon={Instagram} href={socialLinks.instagram.url} text={`@${instagramUsername}`} />
              </div>
              
              <div className="pt-4 mt-4 border-t border-warm-gray-100">
                <InstagramMiniEmbed />
              </div>
            </div>
          </motion.div>
        </div>
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
 *    - Este código reemplaza completamente el contenido de `components/Contact.tsx`.
 *    - El formulario nativo ha sido sustituido por el embed de POWR.
 *
 * 2. CARGA DINÁMICA DE SCRIPT:
 *    - El script de POWR se carga dinámicamente usando un hook `useEffect` para no afectar la carga inicial de la página.
 *    - Se muestra un indicador de carga mientras el formulario se inicializa.
 *
 * 3. PRUEBAS DE LAYOUT Y SIMETRÍA:
 *    - Reinicia tu servidor de desarrollo (`npm run dev`).
 *    - Verifica que el formulario de POWR se carga correctamente y se muestra dentro de la tarjeta izquierda.
 *    - Usa las herramientas de desarrollador (F12) para probar en modo móvil y escritorio. Confirma que el layout es responsivo y que la simetría entre la tarjeta del formulario y la de contacto se mantiene.
 *
 * 4. TROUBLESHOOTING:
 *    - Si el formulario de POWR no se carga, revisa la consola del navegador en busca de errores (CORS, 404, etc.).
 *    - Si el layout se rompe, verifica que no haya conflictos de CSS. El padding `p-8 md:p-10` de la tarjeta contenedora asegura el espacio interno.
 */