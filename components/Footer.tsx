import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from './icons.tsx';
import { siteInfo } from '../lib/navigationData.ts'; // Keep for designer info
import { useCMSContent } from '../hooks/useCMSContent.ts';
import type { SettingsData } from '../types/cms.ts';

const fallbackSettings: SettingsData = {
  photographerName: 'Santiago Palavés',
  phone: '',
  email: '',
  instagram: 'santipalavesfotografia',
  location: '',
};

const Footer = () => {
  const settingsData = useCMSContent<SettingsData>('settings.json', fallbackSettings);
  const settings = settingsData || fallbackSettings;
  
  const instagramUrl = `https://www.instagram.com/${settings.instagram}/`;
  const copyrightText = `© ${new Date().getFullYear()} ${settings.photographerName} Fotografía. Todos los derechos reservados.`;

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
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-warm-gray-900 mb-2">
            Inspiración Diaria
          </h3>
          <p className="text-warm-gray-600 mb-6">
            Síguenos en Instagram para ver más historias de bodas y quinceañeras.
          </p>
          
          <a
            href={instagramUrl}
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
            <span>@{settings.instagram}</span>
          </a>
        </div>

        <div className="w-20 h-px bg-primary-200 mx-auto my-10"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-warm-gray-600">
            <p className="text-center md:text-left">
              {copyrightText}
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
