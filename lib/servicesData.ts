// lib/servicesData.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  benefits: string[];
  ctaText: string;
}

export const servicesData: Service[] = [
  {
    id: 'bodas',
    title: 'Cobertura de Bodas',
    description: 'Fotografía completa para el día más importante. Capturamos desde los preparativos hasta el final de la fiesta, contando su historia con imágenes emotivas y atemporales.',
    image: {
      src: 'https://i.imgur.com/4vD7L3s.jpg',
      alt: 'Fotografía de una ceremonia de boda íntima en una iglesia, mostrando la elegancia del evento.'
    },
    benefits: [
      'Cobertura ilimitada (8-10 horas)',
      'Equipo de 2 fotógrafos profesionales',
      'Galería online privada para compartir',
      'Entrega en un plazo de 4 semanas'
    ],
    ctaText: 'Solicitar mi Presupuesto'
  },
  {
    id: 'quinceaneras',
    title: 'Cobertura de Quinceañeras',
    description: 'Una sesión integral para celebrar tus 15 años. Desde la sesión de fotos previa hasta la fiesta, creamos un recuerdo vibrante y lleno de estilo para este momento único.',
    image: {
      src: 'https://i.imgur.com/tDFSRZS.jpg',
      alt: 'Quinceañera con un vestido azul sentada en un columpio decorado con flores en un jardín.'
    },
    benefits: [
      'Cobertura completa (6-8 horas)',
      'Fotos espontáneas y posadas',
      'Sesión de fotos "pre-fiesta" incluida',
      'Entrega en un plazo de 3 semanas'
    ],
    ctaText: 'Solicitar mi Presupuesto'
  }
];

export const servicesInfo = {
  title: 'Servicios',
  subtitle: 'Descubre cómo puedo capturar tu historia con un enfoque profesional y personalizado, creando recuerdos que durarán para siempre.',
  footerNote: '*Paquetes totalmente personalizables. Contáctame para crear una propuesta a tu medida.'
};