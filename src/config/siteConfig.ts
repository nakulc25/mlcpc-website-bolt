export interface SiteConfig {
  firm: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    fax: string;
    address: {
      street: string;
      suite: string;
      city: string;
      province: string;
      postalCode: string;
    };
  };
  emailService: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  booking: {
    calendlyUrl: string;
  };
  hero: {
    backgroundImage: string;
    logoPath: string;
    logoSvgPath: string;
    title: string;
    subtitle: string;
    tagline: string;
    buttonText: string;
  };
  consultation: {
    title: string;
    description: string;
    features: string[];
    buttonText: string;
  };
  lawyers: Array<{
    id: string;
    name: string;
    title: string;
    image: string;
    bio: string;
    specializations: string[];
    education: string[];
    experience: string;
    linkedinUrl: string;
  }>;
  pets: Array<{
    id: string;
    name: string;
    role: string;
    image: string;
    personality: string[];
    favoriteActivity: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    location: string;
    text: string;
    caseType: string;
  }>;
  testimonialCarousel: {
    autoAdvance: boolean;
    delay: number;
    showArrows: boolean;
    showDots: boolean;
  };
}

export const siteConfig: SiteConfig = {
  firm: {
    name: "Mall & Chhibbar Legal",
    tagline: "Professional Corporation",
    phone: "(416) 555-0123",
    email: "info@mallchhibbar.ca",
    fax: "(416) 555-0124",
    address: {
      street: "123 Bay Street, Suite 1000",
      suite: "Suite 1000",
      city: "Toronto",
      province: "ON",
      postalCode: "M5K 1A1"
    }
  },
  emailService: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
  },
  booking: {
    calendlyUrl: "https://calendly.com/mallchhibbar/consultation"
  },
  hero: {
    backgroundImage: "/data/homebanner.webp",
    logoPath: "/Logo_Assets/logo_128x128.png",
    logoSvgPath: "/Logo_Assets/logo.svg",
    title: "Mall & Chhibbar Legal",
    subtitle: "",
    tagline: "Protecting What Matters",
    buttonText: "Free 30-Minute Consultation"
  },
  consultation: {
    title: "Free Initial Consultation",
    description: "We understand that legal matters can be time-sensitive. Our team is ready to provide immediate assistance for urgent cases.",
    features: [
      "30-minute consultation",
      "Case evaluation",
      "Legal strategy discussion",
      "No obligation"
    ],
    buttonText: "Book Your Free Consultation"
  },
  lawyers: [
    {
      id: "sarah-mall",
      name: "Sarah Mall",
      title: "Senior Partner",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Sarah Mall is a seasoned legal professional with over 15 years of experience in corporate law and litigation. She has successfully represented clients in complex commercial disputes and has a proven track record of achieving favorable outcomes.",
      specializations: ["Corporate Law", "Commercial Litigation", "Contract Disputes"],
      education: ["J.D., University of Toronto Faculty of Law", "B.A., Queen's University"],
      experience: "15+ years",
      linkedinUrl: "https://linkedin.com/in/sarah-mall"
    },
    {
      id: "raj-chhibbar",
      name: "Raj Chhibbar",
      title: "Managing Partner",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Raj Chhibbar brings extensive expertise in family law and immigration matters. His compassionate approach and attention to detail have helped hundreds of families navigate complex legal challenges with confidence.",
      specializations: ["Family Law", "Immigration Law", "Estate Planning"],
      education: ["J.D., Osgoode Hall Law School", "B.Comm., University of British Columbia"],
      experience: "12+ years",
      linkedinUrl: "https://linkedin.com/in/raj-chhibbar"
    }
  ],
  pets: [
    {
      id: "justice",
      name: "Justice",
      role: "Chief Morale Officer",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: ["Loyal", "Protective", "Wise"],
      favoriteActivity: "Greeting clients and providing emotional support during difficult times"
    },
    {
      id: "bailey",
      name: "Bailey",
      role: "Stress Relief Specialist",
      image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: ["Calm", "Intuitive", "Comforting"],
      favoriteActivity: "Sitting quietly with clients who need a moment of peace"
    },
    {
      id: "legal-eagle",
      name: "Legal Eagle",
      role: "Document Security Supervisor",
      image: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400",
      personality: ["Alert", "Observant", "Dignified"],
      favoriteActivity: "Overseeing important meetings from his perch"
    }
  ],
  testimonials: [
    {
      id: "testimonial-1",
      name: "Jennifer Thompson",
      location: "Toronto, ON",
      text: "The team at Mall & Chhibbar provided exceptional service during my family law matter. They were professional, compassionate, and achieved an outcome that exceeded my expectations.",
      caseType: "Family Law"
    },
    {
      id: "testimonial-2",
      name: "Michael Chen",
      location: "Mississauga, ON",
      text: "I was facing a complex employment dispute and didn't know where to turn. The lawyers here guided me through every step and secured a favorable settlement. Highly recommended!",
      caseType: "Employment Law"
    },
    {
      id: "testimonial-3",
      name: "Maria Rodriguez",
      location: "Brampton, ON",
      text: "Outstanding immigration law services. They made the complex process simple and kept me informed throughout. Thanks to their expertise, my family is now together in Canada.",
      caseType: "Immigration Law"
    },
    {
      id: "testimonial-4",
      name: "David Wilson",
      location: "Oakville, ON",
      text: "Professional, knowledgeable, and results-driven. They handled my real estate transaction flawlessly and saved me from potential legal issues. Excellent service!",
      caseType: "Real Estate Law"
    }
  ],
  testimonialCarousel: {
    autoAdvance: true,
    delay: 5000,
    showArrows: true,
    showDots: true
  }
};