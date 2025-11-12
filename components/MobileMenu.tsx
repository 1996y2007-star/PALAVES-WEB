import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram } from './icons.tsx';
import { socialLinks } from '../lib/navigationData.ts';
import { NavLink } from '../lib/navigationData.ts';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: NavLink[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function MobileMenu({ isOpen, onClose, navigationLinks, activeSection, scrollToSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 md:hidden shadow-2xl overflow-y-auto"
          >
            <div className="p-6 border-b border-warm-gray-100">
              <h2 className="text-2xl font-serif font-bold text-warm-gray-900">Menú</h2>
            </div>

            <nav className="p-6">
              <ul className="space-y-1">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeSection === link.id ? 'bg-accent text-white' : 'text-warm-gray-700 hover:bg-warm-gray-50'}`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection('contacto')}
                className="w-full mt-6 px-6 py-4 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Contactar ahora
              </motion.button>
            </nav>

            <div className="p-6 border-t border-warm-gray-100 mt-auto">
              <p className="text-sm text-warm-gray-600 mb-4">Sígueme en:</p>
              <div className="flex gap-4">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-warm-gray-700 hover:text-accent transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                )}
              </div>
            </div>

            <div className="p-6 bg-warm-gray-50 border-t border-warm-gray-100">
              <p className="text-xs text-warm-gray-500 text-center">
                © {new Date().getFullYear()} Santiago Palavés Fotografía
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
