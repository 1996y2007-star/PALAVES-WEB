import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, MapPin, Loader2, MessageCircle } from './icons.tsx';
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
  
  const contactData = useCMSContent<ContactData>('contact.json', fallbackContactData);
  const settingsData = useCMSContent<SettingsData>('settings.json', fallbackSettingsData);

  const content = contactData || fallbackContactData;
  const settings = settingsData || fallbackSettingsData;

  // Dynamically load the POWR script
  useEffect(() => {
    if (document.querySelector(`script[src="${powrScriptSrc}"]`)) {
      setIsScriptLoading(false);
      return;
    }
    const script = document.createElement('script');
    script.src = powrScriptSrc;
    script.async = true;
    script.onload = () => setTimeout(() => setIsScriptLoading(false), 500);
    document.body.appendChild(script);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = content.whatsapp;
    const message = encodeURIComponent(`Hola ${settings.photographerName}! Me interesa conocer más sobre tus servicios de fotografía.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const instagramUrl = `https://www.instagram.com/${settings.instagram}`;

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
          <h2>{content.title}</h2>
          <p>{content.description}</p>
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
            
            {isScriptLoading && (
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 text-accent" />
                <p className="mt-4 text-warm-gray-500">Cargando formulario...</p>
              </div>
            )}
            
            <div
              className="powr-form-builder"
              id="38a571ce_1762945088"
              aria-label="Formulario de contacto responsive para consultas de bodas y quinceañeras"
              title="¡Hablemos de tu Evento Especial!"
              style={{ display: isScriptLoading ? 'none' : 'block' }}
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100 text-center">
              <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-2">¿Preferís WhatsApp?</h3>
              <p className="text-warm-gray-600 mb-4">Es la forma más rápida y directa de contactarme.</p>
              <button onClick={handleWhatsAppClick} className="btn-secondary w-full bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600">
                Chatear Ahora
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-warm-gray-100">
              <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-4">Otros medios de contacto</h3>
              <div className="space-y-4">
                <ContactLink icon={Mail} href={`mailto:${content.email}`} text={content.email} />
                <ContactLink icon={Phone} text={content.phone} isLink={false} />
                <ContactLink icon={MapPin} text={settings.location} isLink={false} />
                <ContactLink icon={Instagram} href={instagramUrl} text={`@${settings.instagram}`} />
              </div>
              
              <div className="pt-4 mt-4 border-t border-warm-gray-100">
                <InstagramMiniEmbed username={settings.instagram} url={instagramUrl} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
