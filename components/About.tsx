// Fix: Created the About component.
import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useCMSContent } from '../hooks/useCMSContent.ts';
import type { AboutData } from '../types/cms.ts';

const fallbackData: AboutData = {
  title: "Sobre Mí",
  description: "¡Hola! Soy Santiago, un fotógrafo apasionado por contar historias a través de mi lente. Mi objetivo es capturar la esencia de cada momento, la emoción genuina y los detalles que hacen que cada evento sea único.\n\nDesde que tomé una cámara por primera vez, supe que había encontrado mi vocación. Para mí, la fotografía no es solo tomar fotos, es crear un legado visual que las familias atesorarán por generaciones. Me especializo en bodas y eventos sociales, donde la alegría y el amor están en el aire.\n\nMi estilo es una mezcla de fotoperiodismo y retrato artístico. Busco la naturalidad, la espontaneidad y la belleza en lo simple. Me encanta conocer a mis clientes, entender su historia y reflejar su personalidad en cada imagen.",
  profileImage: "https://images.unsplash.com/photo-1520341280432-4740d447a2a2?q=80&w=800&auto=format&fit=crop",
  missionStatement: "Mi misión es simple: entregarte recuerdos que te hagan sonreír, llorar de alegría y revivir tu día especial una y otra vez."
};

export default function About() {
  const cmsData = useCMSContent<AboutData>('about.json', fallbackData);

  // Use CMS data if available, otherwise use fallback
  const content = cmsData || fallbackData;

  // Split description paragraphs for rendering
  const descriptionParagraphs = content.description.split('\n').filter(p => p.trim() !== '');

  return (
    <section id="sobre-mi" className="section-padding bg-warm-white">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-lg transform -rotate-3"></div>
            <img
              src={content.profileImage}
              alt="Retrato de Santiago Palavés, fotógrafo profesional."
              loading="lazy"
              className="relative w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="section-title text-left items-start p-0">
            <h2 className="mb-4">{content.title}</h2>
          </div>
          
          {descriptionParagraphs.map((p, index) => (
             <p key={index} className="text-warm-gray-600 mb-4 last:mb-6 leading-relaxed">
              {p}
            </p>
          ))}

          <div className="flex items-center gap-4 p-4 bg-primary-50/50 border-l-4 border-accent rounded-r-lg">
            <Camera className="w-8 h-8 text-accent flex-shrink-0" />
            <p className="font-medium text-warm-gray-800">
              {content.missionStatement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}