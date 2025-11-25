// components/ServicesSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useCMSContent } from '../hooks/useCMSContent.ts';
import type { ServicesData, Service } from '../types/cms.ts';
// Import original data for fallback
import { servicesData as fallbackServices, servicesInfo as fallbackInfo } from '../lib/servicesData.ts';

// Helper function for smooth scrolling to the contact section
const scrollToContact = () => {
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={service.image.src}
          alt={service.image.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-semibold text-warm-gray-900 mb-3">{service.title}</h3>
        <p className="text-warm-gray-600 mb-6 flex-grow">{service.description}</p>
        
        <ul className="space-y-3 mb-8 text-warm-gray-700">
          {service.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={scrollToContact}
          className="btn-primary mt-auto w-full group/btn"
          aria-label={`Solicitar presupuesto para ${service.title}`}
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
};

const fallbackData: ServicesData = {
    ...fallbackInfo,
    servicesList: fallbackServices
};

export default function ServicesSection() {
  const cmsData = useCMSContent<ServicesData>('services.json', fallbackData);
  const servicesInfo = cmsData || fallbackData;

  return (
    <section id="servicios" className="section-padding bg-warm-gradient">
      <div className="container-custom">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="services-title">{servicesInfo.title}</h2>
          <p>{servicesInfo.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {servicesInfo.servicesList.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.p
            className="text-center text-sm text-warm-gray-500 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            {servicesInfo.footerNote}
        </motion.p>
      </div>
    </section>
  );
}