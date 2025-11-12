import React from 'react';
import { socialLinks } from '../lib/navigationData.ts'; 

const InstagramMiniEmbed = () => {
  // The SociableKIT embed is replaced by a static, clickable image linking to the Instagram profile.
  // This improves performance and simplifies maintenance.
  const instagramUsername = socialLinks.instagram.url.split('/').filter(Boolean).pop();
  
  return (
    <a
      href={socialLinks.instagram.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative mt-6 w-full max-w-[300px] mx-auto h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-lg group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      aria-label="Ver perfil de Instagram de Santiago Palavés Fotografía (se abre en una nueva pestaña)"
      title="Ver perfil de Instagram de Santiago Palavés"
    >
      <img
        src="https://i.imgur.com/SiZEJ1E.jpg" // The new image provided
        alt="Vista previa del feed de Instagram de Santiago Palavés, mostrando una grilla de fotos de bodas y quinceañeras."
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
        <p className="font-bold font-serif text-lg">@{instagramUsername}</p>
        <p className="text-sm opacity-90">Sígueme en Instagram</p>
      </div>
    </a>
  );
};

export default InstagramMiniEmbed;

/*
 * =================================================================
 * Instrucciones de Integración
 * =================================================================
 *
 * 1. REEMPLAZO DEL COMPONENTE:
 *    - Este código reemplaza completamente el contenido de `components/InstagramMiniEmbed.tsx`.
 *    - El embed dinámico de SociableKIT ha sido reemplazado por una imagen estática que enlaza al perfil de Instagram. Esto mejora la velocidad de carga del sitio.
 *
 * 2. VERIFICACIÓN:
 *    - El componente ya está importado y posicionado en `components/Contact.tsx`. No se necesitan cambios adicionales allí.
 *    - Reinicia tu servidor de desarrollo (`npm run dev`) y verifica que la nueva imagen se muestra correctamente en la sección de contacto.
 *    - Haz clic en la imagen para asegurarte de que abre el perfil de Instagram en una nueva pestaña.
 *
 * 3. MANTENIMIENTO:
 *    - Para actualizar la imagen, simplemente reemplaza la URL en el atributo `src` del tag `<img>`.
 *    - Para cambiar el enlace de Instagram, actualiza la URL en `lib/navigationData.ts`.
 */
