export interface SiteConfig {
  firm: {
    name: string;
    shortName: string;
    description: string;
  };
  contact: {
    address: {
      street: string;
      suite: string;
      city: string;
      province: string;
      postalCode: string;
    };
    phone: string;
    email: string;
    fax: string;
  };
  services: string[];
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  booking: {
    calendlyUrl: string;
    enabled: boolean;
  };
  consultation: {
    urgentKeyword: string;
    freeMinutes: number;
    description: string;
  };
  email: {
    serviceId: string;
    templateId: string;
    publicKey: string;
    toEmail: string;
  };
  testimonials: {
    carousel: {
      enabled: boolean;
      delay: number;
    };
    items: {
      id: string;
      name: string;
      title: string;
      company?: string;
      content: string;
    }[];
  };
  lawyers: {
    id: string;
    name: string;
    title: string;
    image: string;
    background: string[];
    expertise: string[];
    education: string[];
    certifications: string[];
    experience: string;
    linkedinUrl: string;
  }[];
  pets: {
    id: string;
    name: string;
    role: string;
    image: string;
    personality: string[];
    favoriteActivities: string[];
  }[];
}

export const siteConfig: SiteConfig = {
  firm: {
    name: "Mall & Chhibbar Legal Professional Corporation",
    shortName: "",
    description: "Serving Toronto and the GTA"
  },
  contact: {
    address: {
      street: "111 Civic Centre Dr",
      suite: "",
      city: "Whitby",
      province: "ON",
      postalCode: "L1R 0C8"
    },
    phone: "(437) 848-2583",
    email: "info@mclpc.ca",
    fax: "(437) 848-4514"
  },
  services: [
    "Civil Litigation",
    "Employment Law",
    "Wills & Estates",
    "Family Law",
    "Real Estate Law",
    "Immigration Law",
    "Business Law",
    "Criminal Law"
  ],
  hero: {
    backgroundImage: "/data/homebanner.webp",
    logoPath: "/Logo_Assets/logo_128x128.png",
    logoSvgPath: "/Logo_Assets/logo.svg",
    title: "Mall & Chhibbar Legal",
    subtitle: "Professional Corporation",
    buttonText: "Free 30-minute Consultation"
  },
  booking: {
    calendlyUrl: "https://calendly.com/nakul-mclpc",
    enabled: true
  },
  consultation: {
    urgentKeyword: "Urgent",
    freeMinutes: 30,
    description: "We understand that legal matters can be time-sensitive. Our team is ready to provide immediate assistance for urgent cases."
  },
  email: {
    serviceId: "service_udmbcw8", // Replace with your EmailJS service ID
    templateId: "template_18ibdta", // Replace with your EmailJS template ID
    publicKey: "FFFI7_Hn1VJ2H_Bk4", // Replace with your EmailJS public key
    toEmail: "info@mclpc.ca" // Email address where form submissions will be sent
  },
  testimonials: {
    carousel: {
      enabled: true,
      delay: 7000, // in milliseconds
    },
    items: [
      {
        id: "testimonial-1",
        name: "Mary Kay McCoy",
        title: "Broker",
        company: "Century 21 Miller Real Estate Ltd",
        content: "They go above and beyond to ensure that everything has been completed in a timely manner while staying in continuous contact with their clients"
      },
      {
        id: "testimonial-2",
        name: "Mujtaba Choudhry",
        title: "",
        content: "From the very beginning, they were incredibly easy to work with — clear, professional, and approachable. The work was completed efficiently without compromising on quality, and the attention to detail was outstanding."
      },
      {
        id: "testimonial-3",
        name: "Joana Sanchez",
        title: "Real Estate Broker",
        content: "What impressed me the most about this firm is their attention to detail, responsiveness, and genuine commitment to ensuring I felt informed and confident every step of the way."
      },
      {
        id: "testimonial-4",
        name: "Karan Gupta",
        title: "Software Engineer",
        content: "The dedication, discipline and courtesy practiced by this firm at every step is really commendable."
      }
    ]
  },
  lawyers: [
    {
      id: "henaa-mall",
      name: "Henaa Mall",
      title: "Partner",
      image: "/data/heena.jpg",
      background: [
        "Henaa Mall brings a distinctive global perspective to her practice, combining corporate law experience with investment banking acumen. After relocating to Canada in 2020, she earned her LLM from the University of Toronto while conducting tax law research, then completed her articles with an upper-tier municipality before being called to the Ontario bar in 2023.",
        "Focussing on Real Estate, Civil Litigation, Employment Law, Business Law, and Immigration, Henaa bridges transactional expertise with dispute resolution skills. Beyond her practice, she's deeply committed to professional development - mentoring over 1,000 internationally trained lawyers from 35+ countries and serving in leadership roles with the Durham Region Law Association and Durham College's Paralegal Program Advisory Committee.",
        "Fluent in five languages, a published author and educator at heart, Henaa balances her legal practice with passions for Vedic astrology and yoga. When not advocating for clients or mentoring future lawyers, she enjoys culinary adventures across Ontario and relaxing with her sister and cats."
      ],
      expertise: [
        "Family Law & Divorce Proceedings",
        "Civil Litigation & Dispute Resolution",
        "Business Law & Corporate Matters",
        "Real Estate Transactions",
        "Employment Law"
      ],
      education: [
        "Juris Doctor (J.D.) - University of Toronto Faculty of Law",
        "Bachelor of Arts (Honours) - Political Science, York University",
        "Certificate in Alternative Dispute Resolution - Osgoode Hall"
      ],
      certifications: [
       
      ],
      experience: "15+ years of legal practice with a focus on achieving client-centered solutions through both litigation and alternative dispute resolution methods.",
      linkedinUrl: "https://www.linkedin.com/in/henaamall"
    },
    {
      id: "nakul-chhibbar",
      name: "Nakul Chhibbar",
      title: "Partner",
      image: "/data/nakul.jpg",
      background: [
        "Nakul Chhibbar is a strategic advocate with strong hold in Family Law, Wills & Estates, Civil Litigation and Real Estate Law. Licensed to practice law in Ontario, Nakul combines meticulous legal analysis with practical solutions tailored to each client's needs.",
        "Nakul's approach reflects his belief that law, like fitness, requires discipline, adaptability and commitment to excellence. When not advocating for clients, he trains with the same focus he brings to the courtroom, often accompanied by his loyal dog Bravo.",
        "At Mall & Chhibbar, Nakul has built a practice that mirrors his values: integrity in every action, diligence in every case, and personalized attention for every client. He navigates complex legal challenges with clarity and determination, transforming obstacles into favorable outcomes.",
        "An active member of the Durham Region Law Association and Peel Law Association, Nakul services clients across Ontario.",
        "Nakul serves clients fluent in English, Hindi, Urdu and Punjabi.",
        "",
        ""
      ],
      expertise: [
        "Immigration & Refugee Law",
        "Criminal Law & Defense",
        "Wills & Estate Planning",
        "Human Rights Law",
        "Appeals & Judicial Review"
      ],
      education: [
        "Juris Doctor (J.D.) - Osgoode Hall Law School, York University",
        "Master of Laws (LL.M.) - Immigration Law, University of British Columbia",
        "Bachelor of Arts (Honours) - International Relations, University of Toronto"
      ],
      certifications: [
        "Licensed to Practice Law in Ontario",
        "Member of the Law Society of Ontario",
        "Immigration Consultant Certification - ICCRC",
        "Criminal Law Specialist Certification"
      ],
      experience: "12+ years specializing in immigration law with extensive experience in complex refugee claims, family reunification, and criminal inadmissibility cases.",
      linkedinUrl: "https://www.linkedin.com/in/nakul-chhibbar-332414136"
    }
  ],
  pets: [
    {
      id: "bravo",
      name: "Bravo",
      role: "Chief Morale Officer",
      image: "/data/bravo.jpg",
      personality: ["Loyal", "Energetic", "Affectionate"],
      favoriteActivities: [
        "Greeting clients with a wagging tail",
        "Napping in sunbeams",
        "Office zoomies"
      ]
    },
    {
      id: "bailey",
      name: "Bailey",
      role: "Feline Legal Advisor",
      image: "/data/bailey.jpg",
      personality: ["Independent", "Curious", "Vocal"],
      favoriteActivities: [
        "Supervising important paperwork",
        "Mastering the art of the catnap",
        "Keyboard warming services"
      ]
    }
  ]
};