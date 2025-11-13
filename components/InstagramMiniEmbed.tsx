import React from 'react';

interface InstagramMiniEmbedProps {
  username: string;
  url: string;
}

const InstagramMiniEmbed = ({ username, url }: InstagramMiniEmbedProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative mt-6 w-full max-w-[300px] mx-auto h-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-lg group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      aria-label={`Ver perfil de Instagram de ${username} (se abre en una nueva pestaña)`}
      title={`Ver perfil de Instagram de ${username}`}
    >
      <img
        src="https://i.imgur.com/SiZEJ1E.jpg" // Static preview image
        alt={`Vista previa del feed de Instagram de ${username}, mostrando una grilla de fotos de bodas y quinceañeras.`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
        <p className="font-bold font-serif text-lg">@{username}</p>
        <p className="text-sm opacity-90">Sígueme en Instagram</p>
      </div>
    </a>
  );
};

export default InstagramMiniEmbed;
