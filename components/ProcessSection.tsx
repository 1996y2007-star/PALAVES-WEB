import React, { useState } from 'react';
import { motion, useMotionValueEvent } from 'framer-motion';
import { Clock, ArrowRight, MessageCircle, Users, Camera, Sparkles } from 'lucide-react';
import { processSteps, processInfo, ProcessStep as ProcessStepType, BehindImage } from '../lib/processData.ts';
import { useScrollProgress } from '../hooks/useScrollProgress.ts';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter.ts';

const iconMap = {
  MessageCircle,
  Users,
  Camera,
  Sparkles,
};

// ProcessStep Component
interface ProcessStepProps {
  step: ProcessStepType;
  isActive: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, isActive }) => {
  const Icon = iconMap[step.icon];
  return (
    <motion.div 
      className="relative flex flex-col items-center text-center z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={`relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${step.color} mb-4 shadow-lg transition-all duration-300 ease-in-out border-4 border-warm-white ${isActive ? 'scale-110 shadow-accent/50' : 'scale-100'}`}
        aria-hidden="true"
      >
        <Icon className={`w-9 h-9 text-white transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} />
        {isActive && <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>}
      </div>
      <span className="font-serif text-sm font-bold text-warm-gray-400 mb-2">{step.number}</span>
      <h3 className="text-xl font-serif font-semibold text-warm-gray-900 mb-2">{step.title}</h3>
      <p className="text-warm-gray-600 max-w-xs px-2 text-sm md:text-base">{step.description}</p>
    </motion.div>
  );
};

// Behind the Scenes Image Component
const BehindTheScenesImage: React.FC<{ image: BehindImage; index: number }> = ({ image, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div
            className="relative aspect-photo overflow-hidden rounded-lg shadow-lg group"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: isLoaded ? 1 : 0, transform: 'translateZ(20px) scale(1.05)' }}
            />
            <img 
                src={image.blurDataURL}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: isLoaded ? 0 : 1, filter: 'blur(10px)' }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <p className="absolute bottom-4 left-4 text-white font-medium text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                {image.alt}
            </p>
        </motion.div>
    );
};


// Main ProcessSection Component
export default function ProcessSection() {
  const { ref: timelineRef, scaleX } = useScrollProgress();
  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scaleX, "change", (latest) => {
    const newStep = Math.min(Math.floor(latest * processSteps.length), processSteps.length - 1);
    if (newStep !== activeStep) {
      setActiveStep(newStep);
    }
  });
  
  const durationParts = processInfo.timeline.duration.split('-').map(Number);
  const endDuration = durationParts.length > 1 ? durationParts[1] : durationParts[0];
  const { ref: counterRef, count } = useAnimatedCounter(endDuration);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="proceso" className="section-padding bg-warm-gradient overflow-hidden" aria-labelledby="process-title">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          <h2 id="process-title">{processInfo.title}</h2>
          <p>{processInfo.subtitle}</p>
        </motion.div>

        <div ref={timelineRef} className="relative mb-24 lg:mb-32">
          <div className="absolute top-10 left-0 w-full h-1 bg-primary-200 hidden lg:block" aria-hidden="true" />
          <motion.div
            className="absolute top-10 left-0 h-1 bg-gradient-to-r from-accent to-accent-dark origin-left hidden lg:block"
            style={{ scaleX }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep key={step.id} step={step} isActive={index === activeStep} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
          {/* Delivery Time */}
          <motion.div 
            className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-12 h-12 text-accent-dark" />
              <div className="font-serif font-bold text-warm-gray-900">
                <span ref={counterRef} className="text-6xl">{processInfo.timeline.duration.includes('-') ? `${durationParts[0]}-${count}` : count}</span>
              </div>
            </div>
            <p className="text-lg text-warm-gray-600">{processInfo.timeline.label}</p>
          </motion.div>

          {/* Behind the scenes */}
          {processInfo.behindTheScenes.enabled && (
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-3xl font-serif font-semibold text-warm-gray-900 mb-2 text-center lg:text-left">{processInfo.behindTheScenes.title}</h3>
              <p className="text-warm-gray-600 mb-8 text-center lg:text-left">{processInfo.behindTheScenes.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {processInfo.behindTheScenes.images.map((img, i) => (
                  <BehindTheScenesImage key={i} image={img} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div 
          className="bg-primary-500/10 border border-primary-200 rounded-xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-warm-gray-900 mb-2">{processInfo.cta.title}</h3>
          <p className="text-warm-gray-600 mb-6 max-w-lg mx-auto">{processInfo.cta.description}</p>
          <button
            onClick={scrollToContact}
            className="btn-primary group text-base md:text-lg px-8 py-3"
            aria-label="Iniciar conversación para planificar evento"
          >
            <span>{processInfo.cta.buttonText}</span>
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}