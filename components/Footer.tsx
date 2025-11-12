import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from './icons.tsx';
import { siteInfo, socialLinks } from '../lib/navigationData.ts';

const Footer = () => {
  const instagramUsername = socialLinks.instagram.url.split('/').filter(Boolean).pop();

  return (
    <motion.footer
      role="contentinfo"
      className="bg-warm-gradient border-t border-primary-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-custom py-12 md:py-16 text-center">
        <div className="max-w-xl mx-auto">
          {/* Instagram Call to Action */}
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-warm-gray-900 mb-2">
            Inspiración Diaria
          </h3>
          <p className="text-warm-gray-600 mb-6">
            Síguenos en Instagram para ver más historias de bodas y quinceañeras.
          </p>
          
          {/* Instagram Button - A simple, clean embed-like button for engagement */}
          <a
            href={socialLinks.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sígueme en Instagram, se abrirá en una nueva pestaña"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg
                       bg-white border border-primary-200 text-warm-gray-800 font-medium
                       transition-all duration-300 ease-in-out
                       shadow-sm hover:shadow-lg hover:border-accent
                       hover:bg-primary-50 hover:text-accent-dark
                       focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                       group"
          >
            <Camera className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>@{instagramUsername}</span>
          </a>
        </div>

        {/* Divider */}
        <div className="w-20 h-px bg-primary-200 mx-auto my-10"></div>
        
        {/* Copyright and Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warm-gray-600">
            <p className="text-center md:text-left">
              {siteInfo.copyright}
            </p>
            <p className="text-center md:text-right">
              Diseñado por{' '}
              <a href={siteInfo.designer.url} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-dark transition-colors">
                {siteInfo.designer.name}
              </a>
            </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

/*
 * =================================================================
 * Instrucciones de Integración
 * =================================================================
 *
 * 1. REEMPLAZO DEL COMPONENTE:
 *    - Este código reemplaza completamente el contenido de `components/Footer.tsx`.
 *    - El componente se importa automáticamente en `App.tsx`, por lo que no necesitas hacer cambios allí.
 *
 * 2. VERIFICACIÓN DE DEPENDENCIAS:
 *    - Asegúrate de que los íconos `Camera` y `Heart` están exportados desde `components/icons.tsx`.
 *    - Confirma que `lib/navigationData.ts` exporta los objetos `siteInfo` y `socialLinks` con la información correcta.
 *
 * 3. PRUEBAS:
 *    - Reinicia tu servidor de desarrollo (`npm run dev` o similar) para ver los cambios.
 *    - Abre las herramientas de desarrollador de tu navegador (F12) y utiliza el modo de dispositivo para probar el diseño responsive en diferentes tamaños de pantalla (móvil, tablet, escritorio).
 *
 * 4. MIGRACIÓN A WIDGET (Opcional):
 *    - Si en el futuro deseas mostrar un feed de Instagram en vivo, puedes reemplazar el botón `<a>` con un widget de un servicio externo como SociableKIT, Elfsight o Lightwidget.
 *    - Ten en cuenta que los widgets externos pueden impactar negativamente la performance (velocidad de carga) del sitio. Analiza si el beneficio de un feed en vivo supera el costo en rendimiento.
 *
 */