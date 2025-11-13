// types/cms.ts

// ============================================
// SETTINGS
// ============================================
export interface SettingsData {
  photographerName: string;
  phone: string;
  email: string;
  instagram: string;
  location: string;
}

// ============================================
// HERO
// ============================================
export interface HeroSlide {
  src: string;
  alt: string;
  category: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  slides: HeroSlide[];
}

// ============================================
// ABOUT
// ============================================
export interface AboutData {
  title: string;
  description: string;
  profileImage: string;
  missionStatement: string;
}

// ============================================
// SERVICES
// ============================================
export interface Service {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  benefits: string[];
  ctaText: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  footerNote: string;
  servicesList: Service[];
}

// ============================================
// PROCESS
// ============================================
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: 'MessageCircle' | 'Users' | 'Camera' | 'Sparkles';
}

export interface ProcessBehindImage {
    src: string;
    alt: string;
}

export interface ProcessData {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  timeline: {
    duration: string;
    label: string;
  };
  behindTheScenes: {
    enabled: boolean;
    title: string;
    description: string;
    images: ProcessBehindImage[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

// ============================================
// CONTACT
// ============================================
export interface ContactData {
  title: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
}

// ============================================
// PORTFOLIO
// ============================================
export interface PortfolioPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  location: string;
}

export interface PortfolioData {
  title: string;
  photos: PortfolioPhoto[];
}
