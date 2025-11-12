// Fix: Created navigation data and site info to resolve module errors.
export interface NavLink {
  id: string;
  label: string;
}

export const navigationLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Cómo Trabajo' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
];

export const socialLinks = {
  instagram: {
    url: 'https://www.instagram.com/stories/santipalavesfotografia/',
    label: 'Instagram',
  },
};

export const siteInfo = {
  tagline: 'Fotografía de bodas y eventos',
  copyright: `© ${new Date().getFullYear()} Santiago Palavés Fotografía. Todos los derechos reservados.`,
  designer: {
    name: 'IMPULSA',
    url: 'https://www.impulsatumarcaweb.com',
  },
};