// Fix: Created the main App component to assemble the application structure.
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Portfolio from './components/Portfolio.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import Testimonials from './components/Testimonials.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <ServicesSection />
        <ProcessSection />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;