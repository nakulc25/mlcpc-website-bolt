export interface SiteConfig {
  firm: {
    name: string;
    shortName: string;
    tagline: string;
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
  lawyers: {
    id: string;
    name: string;
    title: string;
    image: string;
    background: string;
    expertise: string[];
    education: string[];
    certifications: string[];
    experience: string;
  }[];
}

export const siteConfig: SiteConfig = {
  firm: {
    name: "Mall & Chhibbar Legal Professional Corporation",
    shortName: "M&C",
    tagline: "Protecting What Matters",
    description: "Professional legal services in Toronto and the GTA"
  },
  contact: {
    address: {
      street: "123 Bay Street",
      suite: "Suite 1500",
      city: "Toronto",
      province: "ON",
      postalCode: "M5H 2Y4"
    },
    phone: "(416) 123-4567",
    email: "nakul@mclpc.ca",
    fax: "(416) 123-4568"
  },
  services: [
    "Family Law",
    "Wills & Estates", 
    "Civil Litigation",
    "Real Estate",
    "Business Law",
    "Employment Law",
    "Immigration",
    "Criminal Law"
  ],
  hero: {
    backgroundImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
    logoPath: "/Logo_Assets/logo_128x128.png",
    logoSvgPath: "/Logo_Assets/logo.svg",
    title: "Mall & Chhibbar Legal",
    subtitle: "Professional Corporation",
    buttonText: "Schedule Consultation"
  },
  consultation: {
    urgentKeyword: "Urgent",
    freeMinutes: 15,
    description: "We understand that legal matters can be time-sensitive. Our team is ready to provide immediate assistance for urgent cases."
  },
  email: {
    serviceId: "service_udmbcw8", // Replace with your EmailJS service ID
    templateId: "template_18ibdta", // Replace with your EmailJS template ID
    publicKey: "FFFI7_Hn1VJ2H_Bk4", // Replace with your EmailJS public key
    toEmail: "nakul@mclpc.ca" // Email address where form submissions will be sent
  },
  lawyers: [
    {
      id: "nakul-chhibbar",
      name: "Nakul Chhibbar",
      title: "Senior Partner & Founding Member",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      background: "Nakul Chhibbar brings over 15 years of comprehensive legal experience to Mall & Chhibbar Legal Professional Corp. As a founding partner, he has built a reputation for providing strategic legal counsel and achieving favorable outcomes for clients across diverse practice areas.",
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
        "Licensed to Practice Law in Ontario",
        "Member of the Law Society of Ontario",
        "Certified Mediator - ADR Institute of Ontario",
        "Continuing Legal Education - Family Law Specialist"
      ],
      experience: "15+ years of legal practice with a focus on achieving client-centered solutions through both litigation and alternative dispute resolution methods."
    },
    {
      id: "hannah-mall",
      name: "Hannah Mall",
      title: "Partner & Head of Immigration Law",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      background: "Hannah Mall is a dedicated legal professional specializing in immigration law and criminal defense. With her compassionate approach and thorough understanding of complex legal frameworks, she has successfully represented hundreds of clients in their most challenging legal matters.",
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
      experience: "12+ years specializing in immigration law with extensive experience in complex refugee claims, family reunification, and criminal inadmissibility cases."
    }
  ]
};