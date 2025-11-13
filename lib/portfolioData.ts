export interface Photo {
  id: string;
  src: string;
  alt: string;
  // Fix: Made title, category, and location required to align with PortfolioPhoto type.
  title: string;
  category: string;
  location: string;
}

export const weddingPhotos: Photo[] = [
  // Foto 1: Abrazo nocturno - SEO optimizado para 'bodas urbanas Uruguay'
  {
    id: "boda-1",
    src: "https://i.imgur.com/EHurHR9.jpg", // URL embebida de Imgur para carga rápida
    alt: "Fotografía romántica en blanco y negro de novio y novia abrazados en una calle de Montevideo de noche. Retrato íntimo que captura la elegancia y el amor en una boda urbana en Uruguay.",
    title: "Amor bajo las luces",
    category: "Retrato Nocturno",
    location: "Montevideo"
  },
  // Foto 2: Paseo en la playa - SEO optimizado para 'boda en la playa Uruguay'
  {
    id: "boda-2",
    src: "https://i.imgur.com/hrUwCKW.jpg",
    alt: "Fotografía profesional de una pareja de novios caminando de la mano en una playa de Uruguay al atardecer. Escena romántica que captura la serenidad y conexión en una boda costera.",
    title: "Paseo al Ocaso",
    category: "Sesión Exterior",
    location: "Playa, Uruguay"
  },
  // Foto 3: Beso apasionado - SEO optimizado para 'momentos emotivos de boda'
  {
    id: "boda-3",
    src: "https://i.imgur.com/RQevI79.jpg",
    alt: "Beso apasionado de novios bajo luces cálidas en una noche estrellada en Uruguay. Fotografía emotiva que resalta la intimidad y el romance de la celebración de una boda.",
    title: "Bajo un Manto de Estrellas",
    category: "Retrato Nocturno",
    location: "Jardín de eventos, Uruguay"
  },
  // Foto 4: Invitaciones - SEO optimizado para 'detalles de boda Uruguay'
  {
    id: "boda-4",
    src: "https://i.imgur.com/EnfFDeA.jpg",
    alt: "Detalle artístico de invitaciones de boda personalizadas con acuarelas, mostrando el cuidado y la creatividad en los preparativos de un matrimonio en Uruguay.",
    title: "El Comienzo de la Historia",
    category: "Detalles",
    location: "Uruguay"
  },
  // Foto 5: Celebración en fiesta - SEO optimizado para 'fiesta de boda Uruguay'
  {
    id: "boda-5",
    src: "https://i.imgur.com/dOceZ5S.jpg",
    alt: "Momento divertido y enérgico en una fiesta de boda en Uruguay, donde los amigos levantan al novio junto a la piscina. Fotografía que captura la alegría y la camaradería.",
    title: "Celebración Inolvidable",
    category: "Fiesta",
    location: "Quinta, Uruguay"
  },
  // Foto 6: Selfies en fiesta - SEO optimizado para 'fotografía espontánea de bodas'
  {
    id: "boda-6",
    src: "https://i.imgur.com/6Pczz75.jpg",
    alt: "Fotografía espontánea en blanco y negro de novios y amigos tomando selfies con flashes en una vibrante fiesta de boda en Montevideo. Captura de la diversión y la energía.",
    title: "Flashes de Alegría",
    category: "Fiesta",
    location: "Montevideo"
  },
  // Foto 7: Emoción en ceremonia - SEO optimizado para 'fotoperiodismo de bodas Uruguay'
  {
    id: "boda-7",
    src: "https://i.imgur.com/LH2yF5c.jpg",
    alt: "Reacción emotiva y sorpresiva de los invitados durante el intercambio de anillos en una ceremonia de boda en Uruguay. Fotoperiodismo que captura la emoción genuina del momento.",
    title: "La Sorpresa del 'Sí'",
    category: "Ceremonia",
    location: "Uruguay"
  },
  // Foto 8: Paseo en muelle - SEO optimizado para 'fotografía nocturna de bodas'
  {
    id: "boda-8",
    src: "https://i.imgur.com/FhF7Bnz.jpg",
    alt: "Retrato romántico de novios tomados de la mano en un muelle iluminado por la noche en Uruguay. Escena mágica que refleja la tranquilidad y el amor después de la ceremonia.",
    title: "Caminando sobre el Agua",
    category: "Retrato Nocturno",
    location: "Muelle, Uruguay"
  },
  // Foto 9: Discurso emotivo - SEO optimizado para 'recepción de boda Montevideo'
  {
    id: "boda-9",
    src: "https://i.imgur.com/yCeDYEw.jpg",
    alt: "Momento emotivo durante la recepción de una boda en Montevideo, donde el novio da un discurso mientras la novia lo mira. Fotografía que captura la emoción de las palabras.",
    title: "Palabras del Corazón",
    category: "Recepción",
    location: "Montevideo"
  },
  // Foto 10: Atardecer en dunas - SEO optimizado para 'boda costera Uruguay'
  {
    id: "boda-10",
    src: "https://i.imgur.com/lwPZWOz.jpg",
    alt: "Fotografía de pareja de novios abrazados en las dunas de una playa uruguaya al atardecer. La luz dorada y el paisaje natural crean una atmósfera íntima y romántica.",
    title: "Atardecer en las Dunas",
    category: "Sesión Exterior",
    location: "Costa de Uruguay"
  },
  // Foto 11: Ceremonia en iglesia - SEO optimizado para 'fotografía de matrimonio Uruguay'
  {
    id: "boda-11",
    src: "https://i.imgur.com/dfQfXRH.jpg",
    alt: "Momento íntimo del intercambio de votos de una pareja durante su ceremonia de boda en una rústica iglesia de piedra en Uruguay. Fotografía que captura la solemnidad y felicidad.",
    title: "El 'Sí' Sagrado",
    category: "Ceremonia",
    location: "Iglesia, Uruguay"
  },
  // Foto 12: Votos en capilla - SEO optimizado para 'boda en capilla histórica'
  {
    id: "boda-12",
    src: "https://i.imgur.com/aDX5vI3.jpg",
    alt: "Vista amplia de una ceremonia de boda en una capilla histórica de Uruguay con murales artísticos. Novios en el altar, capturando la grandeza y la belleza del momento.",
    title: "Un Voto ante la Historia",
    category: "Ceremonia",
    location: "Capilla, Uruguay"
  }
];

/*
 * =================================================================
 * Tips de Integración y Mantenimiento (Bodas)
 * =================================================================
 *
 * 1. PRUEBAS LOCALES:
 *    - Después de actualizar este array, reinicia tu servidor de desarrollo (`npm run dev`).
 *    - Abre las herramientas de desarrollador (F12) y verifica la pestaña 'Red' (Network) para asegurar que las imágenes de Imgur cargan sin errores 404.
 *    - Realiza pruebas de performance con Lighthouse para verificar que la carga lazy es efectiva.
 *
 * 2. MIGRACIÓN A CDN (Recomendado para producción):
 *    - Para un sitio profesional, se recomienda migrar estas imágenes a un CDN como Cloudinary, Vercel Blob, o AWS S3 para optimizar la entrega (formato WebP, compresión) y mejorar la velocidad.
 *    - Ejemplo de URL en Cloudinary: `src: "https://res.cloudinary.com/tu-cuenta/image/upload/v162.../boda-1.webp"`
 *
 * 3. VERIFICACIÓN DE SEO:
 *    - Utiliza Google PageSpeed Insights o extensiones de navegador SEO para confirmar que los 'alt texts' (no visibles en la UI) son detectados por los motores de búsqueda.
 *    - Los textos alternativos deben describir la imagen de forma precisa para cumplir con las pautas de accesibilidad (WCAG).
 *
 */

export const quinceaneraPhotos: Photo[] = [
  // Foto 1: Fiesta playera - SEO optimizado para "fiesta de quinceañera temática en Uruguay"
  {
    id: "quince-1",
    src: "https://i.imgur.com/SsI1Cfa.jpg", // URL embebida de Imgur para carga rápida
    alt: "Fotografía profesional de quinceañera riendo con pintura facial colorida en fiesta temática playera en Uruguay, capturando la alegría y amistad en un evento juvenil en Montevideo.",
    title: "Risas de Colores",
    category: "Fiesta",
    location: "Playa, Uruguay"
  },
  // Foto 2: Brindis grupal - SEO optimizado para "momentos emotivos de quinceañeras"
  {
    id: "quince-2",
    src: "https://i.imgur.com/bSy6Nml.jpg",
    alt: "Fotografía artística en blanco y negro de un grupo de amigos brindando, capturando la energía y celebración en una fiesta de quinceañera en Montevideo, Uruguay.",
    title: "Brindis de Amigos",
    category: "Fiesta",
    location: "Salón de Fiestas, Montevideo"
  },
  // Foto 3: Preparativos - SEO optimizado para "preparativos de quinceañera"
  {
    id: "quince-3",
    src: "https://i.imgur.com/5Fbgfiw.jpg",
    alt: "Momento íntimo de los preparativos de una quinceañera en Uruguay; retrato pensativo mientras una maquilladora profesional le aplica maquillaje con luz suave de ventana.",
    title: "Instantes Previos",
    category: "Preparativos",
    location: "Montevideo"
  },
  // Foto 4: Baile energético - SEO optimizado para "fiesta de quinceañera en Montevideo"
  {
    id: "quince-4",
    src: "https://i.imgur.com/INwvvOL.jpg",
    alt: "Pista de baile vibrante en una fiesta de quinceañera en Uruguay. Jóvenes bailando con energía bajo bolas de discoteca y luces de neón, capturando la euforia de la celebración.",
    title: "Noche de Baile",
    category: "Fiesta",
    location: "Salón de Fiestas"
  },
  // Foto 5: Estilo bohemio neón - SEO optimizado para "fotografía de eventos"
  {
    id: "quince-5",
    src: "https://i.imgur.com/VzsBl9G.jpg",
    alt: "Fotografía de quinceañera con un look bohemio y festivo, usando un abanico y antifaz durante el cotillón con luces de neón. Captura de la diversión en una fiesta en Uruguay.",
    title: "Fantasía Neón",
    category: "Fiesta",
    location: "Montevideo"
  },
  // Foto 6: Photo booth - SEO optimizado para "fotos divertidas de quinceañera"
  {
    id: "quince-6",
    src: "https://i.imgur.com/WWgG68E.jpg",
    alt: "Grupo de amigos divirtiéndose en el photo booth de una fiesta de quinceañera en Montevideo, posando con sombreros y gafas gigantes bajo una lluvia de confeti.",
    title: "Recuerdos Divertidos",
    category: "Fiesta",
    location: "Montevideo"
  },
  // Foto 7: Reflexión costera - SEO optimizado para "sesión de fotos de quinceañera en Uruguay"
  {
    id: "quince-7",
    src: "https://i.imgur.com/hGXdcxd.jpg",
    alt: "Sereno retrato de quinceañera de espaldas con vestido blanco, sentada en una roca frente al mar durante el atardecer en una playa de Uruguay. Fotografía profesional de exteriores.",
    title: "Contemplando el Horizonte",
    category: "Sesión Exterior",
    location: "Costa de Uruguay"
  },
  // Foto 8: Glamour en jardín - SEO optimizado para "retrato elegante de quinceañera"
  {
    id: "quince-8",
    src: "https://i.imgur.com/fy70tK6.jpg",
    alt: "Retrato elegante de quinceañera sonriendo con un vestido plateado brillante bajo una decoración de flores y luces cálidas en un jardín nocturno en Uruguay. Fotografía de evento con glamour.",
    title: "Noche Encantada",
    category: "Fiesta",
    location: "Jardín de eventos, Uruguay"
  },
  // Foto 9: Sesión natural otoñal - SEO optimizado para "sesión de fotos en exteriores"
  {
    id: "quince-9",
    src: "https://i.imgur.com/XPeL4mW.jpg",
    alt: "Sesión de fotos de quinceañera en otoño. Joven sonriente acostada sobre un manto de hojas secas con un outfit casual, capturando la belleza natural de la estación en Uruguay.",
    title: "Sonrisa de Otoño",
    category: "Sesión Exterior",
    location: "Parque, Uruguay"
  },
  // Foto 10: Retrato sofisticado - SEO optimizado para "fotografía profesional de quinceañera"
  {
    id: "quince-10",
    src: "https://i.imgur.com/BNCN580.jpg",
    alt: "Retrato nocturno sofisticado de una quinceañera en Uruguay, luciendo un elegante vestido blanco y diadema. Sonrisa sutil capturada con iluminación profesional en un exterior.",
    title: "Elegancia Nocturna",
    category: "Retrato",
    location: "Uruguay"
  },
  // Foto 11: Decoración de booth - Enfoque en detalles de fiesta
  {
    id: "quince-11",
    src: "https://i.imgur.com/oP7l1Rb.jpg",
    alt: "Detalle de la decoración de un photo booth para una fiesta de quinceañera en Montevideo, con globos plateados que dicen 'Let's Party', un espejo y cortinas de lentejuelas.",
    title: "Rincón de Fotos",
    category: "Decoración",
    location: "Salón de Fiestas"
  },
  // Foto 12: Aventura en bosque - SEO optimizado para "sesión de fotos en la naturaleza"
  {
    id: "quince-12",
    src: "https://i.imgur.com/YKznqys.jpg",
    alt: "Fotografía de quinceañera en un sendero boscoso en Uruguay. La joven mira hacia atrás con un outfit moderno, rodeada por la exuberante naturaleza verde. Sesión de fotos profesional.",
    title: "Aventura en el Bosque",
    category: "Sesión Exterior",
    location: "Bosque, Uruguay"
  },
  // Foto 13: Peinado artístico - SEO optimizado para "detalles de preparativos"
  {
    id: "quince-13",
    src: "https://i.imgur.com/rOHXGRW.jpg",
    alt: "Fotografía artística en blanco y negro de los preparativos de una quinceañera. Silueta de la estilista arreglando el peinado frente a un aro de luz, creando un momento emotivo.",
    title: "Arte en Siluetas",
    category: "Preparativos",
    location: "Montevideo"
  },
  // Foto 14: Maquillaje con tiara - SEO optimizado para "retrato de quinceañera"
  {
    id: "quince-14",
    src: "https://i.imgur.com/lWzjiSh.jpg",
    alt: "Primer plano de una quinceañera sonriente con tiara mientras una maquilladora profesional le aplica rubor. Fotografía de los preparativos para una fiesta de 15 años en Uruguay.",
    title: "El Toque Final",
    category: "Preparativos",
    location: "Estudio, Montevideo"
  },
  // Foto 15: Relax idílico - SEO optimizado para "fotos de quinceañera en jardín"
  {
    id: "quince-15",
    src: "https://i.imgur.com/tDFSRZS.jpg",
    alt: "Escena idílica de una quinceañera en Uruguay, vistiendo un hermoso vestido azul y sentada en un columpio decorado con flores junto a una piscina, en un jardín exuberante.",
    title: "Jardín de Ensueño",
    category: "Sesión Exterior",
    location: "Quinta, Uruguay"
  }
];

/*
 * =================================================================
 * Tips de Integración y Mantenimiento (Quinceañeras)
 * =================================================================
 *
 * 1. PRUEBAS LOCALES:
 *    - Después de pegar este array en `lib/portfolioData.ts`, reinicia tu servidor de desarrollo (`npm run dev`).
 *    - Abre las herramientas de desarrollador (F12) y verifica la pestaña de 'Red' (Network) para asegurarte de que las imágenes de Imgur cargan correctamente y sin errores 404.
 *    - Realiza pruebas de performance con Lighthouse para verificar que la carga lazy y los tamaños de imagen son óptimos.
 *
 * 2. MIGRACIÓN A CDN (Recomendado para producción):
 *    - Aunque Imgur es útil para el desarrollo, para un sitio profesional se recomienda un CDN como Cloudinary, Vercel Blob, o AWS S3.
 *    - Un CDN te permite optimizar imágenes automáticamente (formato WebP, compresión) y asegura mayor velocidad y disponibilidad.
 *    - Ejemplo de URL en Cloudinary: `src: "https://res.cloudinary.com/tu-cuenta/image/upload/v162.../quince-1.webp"`
 *
 * 3. VERIFICACIÓN DE SEO:
 *    - Utiliza herramientas como el inspector de Google PageSpeed Insights o extensiones de navegador para SEO para confirmar que los 'alt texts' son visibles para los motores de búsqueda.
 *    - Asegúrate de que los textos alternativos describen la imagen de forma precisa para cumplir con las pautas de accesibilidad (WCAG).
 *
 */