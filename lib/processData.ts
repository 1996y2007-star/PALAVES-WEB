// lib/processData.ts
export interface ProcessStep {
  id: number;
  number: string;
  icon: 'MessageCircle' | 'Users' | 'Camera' | 'Sparkles';
  title: string;
  description: string;
  color: string;
}

export interface BehindImage {
  src: string;
  alt: string;
  blurDataURL: string;
}

export interface ProcessInfo {
  title: string;
  subtitle: string;
  timeline: { duration: string; label: string };
  behindTheScenes: {
    enabled: boolean;
    title: string;
    description: string;
    images: BehindImage[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    icon: 'MessageCircle',
    title: 'Contacto Inicial',
    description: 'Me contás sobre tu evento y te envío una propuesta personalizada con todos los detalles y precios.',
    color: 'from-accent-light to-accent',
  },
  {
    id: 2,
    number: '02',
    icon: 'Users',
    title: 'Reunión Personal',
    description: 'Nos conocemos, hablamos de tus expectativas y afinamos cada detalle de la cobertura.',
    color: 'from-accent to-accent-dark',
  },
  {
    id: 3,
    number: '03',
    icon: 'Camera',
    title: 'El Gran Día',
    description: 'Capturo cada momento, siempre presente y atento a cada detalle para que nada se pierda.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: 4,
    number: '04',
    icon: 'Sparkles',
    title: 'Edición y Entrega',
    description: 'Elaboro y edito tus fotos con cuidado profesional para que las disfrutes para siempre.',
    color: 'from-primary-600 to-primary-700',
  },
];

export const processInfo: ProcessInfo = {
  title: 'Cómo Trabajo',
  subtitle: 'Desde el primer contacto hasta la entrega final, cada paso está pensado para tu tranquilidad.',
  timeline: {
    duration: '3-4', // weeks
    label: 'Semanas para la entrega final',
  },
  behindTheScenes: {
    enabled: true,
    title: 'Un Vistazo al Proceso',
    description: 'Así trabajo detrás de escena para crear tus recuerdos.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
        alt: 'Editando fotografías en un monitor profesional con una tableta gráfica.',
        blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA==',
      },
      {
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
        alt: 'Equipo fotográfico profesional, incluyendo cámaras y lentes, preparado para un evento.',
        blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA==',
      },
      {
        src: 'https://images.unsplash.com/photo-1606805720935-39703c983a0a?q=80&w=1200&auto=format&fit=crop',
        alt: 'Fotógrafo en acción durante una boda, capturando un momento especial de la pareja.',
        blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA==',
      },
    ],
  },
  cta: {
    title: '¿Listo para empezar?',
    description: 'El primer paso es simple: hablemos de tu evento.',
    buttonText: 'Iniciar Conversación',
  },
};
