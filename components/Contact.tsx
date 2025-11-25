import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from './icons.tsx';
import InstagramMiniEmbed from './InstagramMiniEmbed.tsx';
import { useCMSContent } from '../hooks/useCMSContent.ts';
import type { ContactData, SettingsData } from '../types/cms.ts';

// Fallback data
const fallbackContactData: ContactData = {
    title: "Hablemos de tu evento",
    description: "El primer paso para tener los recuerdos más lindos de tu día especial. Escribime y coordinamos una reunión.",
    email: "santi@ejemplo.com",
    phone: "(+598) 99 123 456",
    whatsapp: "59899123456"
};
const fallbackSettingsData: SettingsData = {
    photographerName: "Santiago Palavés",
    phone: "+598 99 123 456",
    email: "santi@ejemplo.com",
    instagram: "santipalavesfotografia",
    location: "Montevideo, Uruguay"
};

interface ContactLinkProps {
  icon: React.ElementType;
  href?: string;
  text: string;
  isLink?: boolean;
}

// Reusable component for contact links
const ContactLink = ({ icon: Icon, href, text, isLink = true }: ContactLinkProps) => (
  <div className="flex items-center gap-4 text-warm-gray-700 p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200">
    <div className="bg-white p-2 rounded-full shadow-sm border border-primary-100 text-accent">
        <Icon className="w-5 h-5 flex-shrink-0" />
    </div>
    {isLink ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent-dark transition-colors duration-200">
        {text}
      </a>
    ) : (
      <span className="font-medium">{text}</span>
    )}
  </div>
);

export default function Contact() {
  const contactData = useCMSContent<ContactData>('contact.json', fallbackContactData);
  const settingsData = useCMSContent<SettingsData>('settings.json', fallbackSettingsData);

  const content = contactData || fallbackContactData;
  const settings = settingsData || fallbackSettingsData;

  const handleWhatsAppClick = () => {
    const phoneNumber = content.whatsapp;
    const message = encodeURIComponent(`Hola ${settings.photographerName}! Me interesa conocer más sobre tus servicios de fotografía.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const instagramUrl = `https://www.instagram.com/${settings.instagram}`;

  // Cargar el script de HubSpot dinámicamente
  useEffect(() => {
    const scriptId = 'hubspot-form-script';
    // Verificar si el script ya existe
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://js-eu1.hsforms.net/forms/embed/147327334.js";
        script.defer = true;
        document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="contacto" className="section-padding bg-warm-gradient overflow-hidden">
      <div className="container-custom max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* COLUMNA IZQUIERDA: Formulario HubSpot Embebido */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-warm-gray-100 h-full relative overflow-hidden group min-h-[500px]"
          >
            {/* Elemento decorativo sutil */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700 pointer-events-none"></div>

            <div className="relative z-10 w-full h-full">
               <h3 className="text-2xl font-serif font-semibold text-warm-gray-900 mb-6 text-center">
                ¡Hablemos de tu Evento!
              </h3>
              
              {/* Contenedor del Formulario HubSpot */}
              <div 
                className="hs-form-frame w-full" 
                data-region="eu1" 
                data-form-id="8e74b315-8e1f-4b05-951d-3db5b1140a84" 
                data-portal-id="147327334"
              ></div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Stack de Contacto Rápido */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Tarjeta WhatsApp (Prioridad Alta) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-2 sm:mb-0">
                <MessageCircle className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-serif font-bold text-warm-gray-900 mb-1">¿Preferís WhatsApp?</h3>
                <p className="text-warm-gray-600 text-sm mb-0">Es la forma más rápida y directa de contactarme.</p>
              </div>
              <button 
                onClick={handleWhatsAppClick} 
                className="btn-secondary whitespace-nowrap bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 px-6 py-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Chatear Ahora
              </button>
            </motion.div>
            
            {/* Tarjeta de Datos e Instagram (Rellena el espacio restante) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100 flex-grow flex flex-col"
            >
              <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                Medios de contacto
              </h3>
              
              <div className="space-y-3 mb-8">
                <ContactLink icon={Mail} href={`mailto:${content.email}`} text={content.email} />
                <ContactLink icon={Phone} text={content.phone} isLink={false} />
                <ContactLink icon={MapPin} text={settings.location} isLink={false} />
              </div>
              
              <div className="border-t border-warm-gray-100 pt-6 mt-auto">
                <p className="text-sm text-warm-gray-500 mb-4 font-medium uppercase tracking-wide">Sígueme en redes</p>
                <div className="relative">
                  <InstagramMiniEmbed username={settings.instagram} url={instagramUrl} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
