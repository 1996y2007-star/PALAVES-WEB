import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from './icons.tsx';
import MobileMenu from './MobileMenu.tsx';
import { navigationLinks } from '../lib/navigationData.ts';
import { useCMSContent } from '../hooks/useCMSContent.ts';
import type { SettingsData } from '../types/cms.ts';

const fallbackSettings: SettingsData = {
    photographerName: 'Santiago Palavés',
    phone: '',
    email: '',
    instagram: '',
    location: '',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  
  const settingsData = useCMSContent<SettingsData>('settings.json', fallbackSettings);
  const settings = settingsData || fallbackSettings;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navigationLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            <button
              onClick={() => scrollToSection('inicio')}
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <span className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${isScrolled ? 'text-warm-gray-900' : 'text-white'}`}>
                  {settings.photographerName}
                </span>
                <span className={`block text-xs md:text-sm font-light transition-colors ${isScrolled ? 'text-warm-gray-600' : 'text-white/90'}`}>
                  Fotografía
                </span>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative font-medium transition-colors ${
                    activeSection === link.id
                      ? (isScrolled ? 'text-accent' : 'text-white')
                      : (isScrolled ? 'text-warm-gray-700 hover:text-accent' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isScrolled ? 'bg-accent' : 'bg-white'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className={`px-6 py-2.5 rounded-md font-medium transition-all duration-300 ${isScrolled ? 'bg-accent hover:bg-accent-dark text-warm-gray-900' : 'bg-white hover:bg-white/90 text-warm-gray-900'} hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
              >
                Contacto
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-warm-gray-900 hover:bg-warm-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationLinks={navigationLinks}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </>
  );
}
