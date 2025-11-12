// lib/testimonialsData.ts
export interface Testimonial {
  id: number;
  name: string;
  event: 'Boda' | '15 Años';
  date: string;
  rating: 5;
  text: string;
  image?: {
    src: string;
    blurDataURL: string;
  };
  location: string;
  googleReview?: boolean;
}

export interface TestimonialsInfo {
  title: string;
  subtitle: string;
  stats: {
    totalClients: string;
    rating: string;
    satisfaction: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María & Juan',
    event: 'Boda',
    date: 'Octubre 2024',
    rating: 5,
    text: 'Elegir a Santiago fue la mejor decisión. Cada foto es una obra de arte que nos emociona. Estuvo atento a cada detalle y capturó momentos que ni siquiera vimos durante la celebración. ¡100% recomendado!',
    image: {
      src: 'https://images.unsplash.com/photo-1542042161-d191a24b5212?q=80&w=200&auto=format&fit=crop',
      blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA=='
    },
    location: 'Montevideo',
  },
  {
    id: 2,
    name: 'Sofia Martinez',
    event: '15 Años',
    date: 'Agosto 2024',
    rating: 5,
    text: '¡Las fotos de mis 15 quedaron soñadas! Santiago logró que me sintiera súper cómoda y el resultado es increíble. Capturó la esencia de la fiesta y mi personalidad. ¡Gracias por tanto profesionalismo y buena onda!',
    image: {
      src: 'https://images.unsplash.com/photo-1525502619239-2f81a7489bba?q=80&w=200&auto=format&fit=crop',
      blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA=='
    },
    location: 'Punta del Este',
  },
  {
    id: 3,
    name: 'Lucía & Pablo',
    event: 'Boda',
    date: 'Marzo 2024',
    rating: 5,
    text: 'No tenemos palabras para agradecer el trabajo de Santiago. Las fotos son naturales, emotivas y de una calidad espectacular. Revivimos cada momento al verlas. Es un artista y una gran persona.',
    image: {
      src: 'https://images.unsplash.com/photo-1597157639167-2ea07a783b27?q=80&w=200&auto=format&fit=crop',
      blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA=='
    },
    location: 'Colonia del Sacramento',
  },
  {
    id: 4,
    name: 'Valentina',
    event: '15 Años',
    date: 'Enero 2024',
    rating: 5,
    text: 'Santiago tiene un ojo único para los detalles. Las fotos son mucho más de lo que esperaba. Me hizo sentir como una modelo y captó la alegría de mis amigos y familia. ¡Un genio total!',
    image: {
      src: 'https://images.unsplash.com/photo-1611798791033-bfbde86c1c1f?q=80&w=200&auto=format&fit=crop',
      blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA=='
    },
    location: 'Carmelo',
  },
  {
    id: 5,
    name: 'Ana & Diego',
    event: 'Boda',
    date: 'Noviembre 2023',
    rating: 5,
    text: 'La paciencia y profesionalismo de Santiago son destacables. Nos guió en todo momento y el resultado final es un tesoro que guardaremos para siempre. Capturó la magia de nuestro día a la perfección.',
    image: {
      src: 'https://images.unsplash.com/photo-1511285560921-4c9a8cf252c8?q=80&w=200&auto=format&fit=crop',
      blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAYAAkA4JaACdLoA+AAnAAD+9U8eA/vV/z/9d8h/t/7V/zPQA/YA/mf/B6A/2A/4gA=='
    },
    location: 'Montevideo',
  }
];

export const testimonialsInfo: TestimonialsInfo = {
  title: 'Lo que dicen mis clientes',
  subtitle: 'Nada me hace más feliz que ver a mis clientes felices con su elección',
  stats: {
    totalClients: '100+',
    rating: '5.0',
    satisfaction: '100%',
  },
  cta: {
    title: '¿Querés ser el próximo?',
    description: 'Únete a los clientes que confiaron en mí para capturar sus momentos especiales',
    buttonText: 'Reservá tu fecha',
  },
};