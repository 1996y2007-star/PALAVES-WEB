import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../lib/testimonialsData.ts';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isCenter?: boolean;
}

export default function TestimonialCard({ testimonial, isCenter = false }: TestimonialCardProps) {
  return (
    <div className={`relative w-full h-full p-8 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out ${isCenter ? 'bg-white' : 'bg-warm-gray-50'}`}>
      <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-100" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>

        <blockquote className="flex-grow">
          <p className="text-base md:text-lg italic text-warm-gray-700 leading-relaxed">
            "{testimonial.text}"
          </p>
        </blockquote>

        <footer className="flex items-center mt-6 pt-6 border-t border-primary-100">
          <div className="flex-shrink-0">
            {testimonial.image ? (
              <img
                src={testimonial.image.src}
                alt={`Foto de ${testimonial.name}`}
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white"
                style={{
                   backgroundImage: `url(${testimonial.image.blurDataURL})`,
                   backgroundSize: 'cover',
                }}
              />
            ) : (
              <div className="w-14 h-14 rounded-full bg-accent-dark flex items-center justify-center text-white font-bold text-xl">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
          </div>

          <div className="ml-4">
            <p className="font-serif font-semibold text-warm-gray-900 text-lg">{testimonial.name}</p>
            <p className="text-sm text-warm-gray-500">{testimonial.event} · {testimonial.date}</p>
            <p className="text-sm text-warm-gray-500 font-medium">{testimonial.location}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
