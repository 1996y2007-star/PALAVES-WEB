import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../lib/testimonialsData.ts';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter?: boolean;
}

export default function TestimonialCard({ testimonial, isCenter = false }: TestimonialCardProps) {
  return (
    <div 
      className={`relative w-full h-full min-h-[380px] p-8 md:p-10 rounded-2xl overflow-hidden transition-colors duration-500 ease-in-out border border-warm-gray-100 flex flex-col justify-between
      ${isCenter ? 'bg-white opacity-100' : 'bg-warm-gray-50 opacity-90'}`}
    >
      {/* Elemento decorativo de fondo */}
      <Quote className="absolute top-6 right-8 w-20 h-20 text-primary-50 transform rotate-12" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
          ))}
        </div>

        <blockquote className="flex-grow">
          <p className="text-lg md:text-xl font-medium italic text-warm-gray-700 leading-relaxed font-serif">
            "{testimonial.text}"
          </p>
        </blockquote>

        <footer className="flex items-center mt-8 pt-6 border-t border-warm-gray-100/60">
          <div className="flex-shrink-0 group">
            {testimonial.image ? (
              <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-accent to-primary-200">
                <img
                  src={testimonial.image.src}
                  alt={`Foto de ${testimonial.name}`}
                  loading="lazy"
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                  style={{
                     backgroundImage: `url(${testimonial.image.blurDataURL})`,
                     backgroundSize: 'cover',
                  }}
                />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full bg-primary-100 text-accent-dark flex items-center justify-center font-bold text-xl border-2 border-white shadow-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>

          <div className="ml-4">
            <p className="font-serif font-bold text-warm-gray-900 text-lg">{testimonial.name}</p>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-warm-gray-500 gap-0.5 sm:gap-2">
                <span>{testimonial.event}</span>
                <span className="hidden sm:inline text-primary-300">•</span>
                <span>{testimonial.location}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}