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
    email: "nakul@mclpc.ca",
    fax: "(437) 848-4514"
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
      id: "henaa-mall",
      name: "Henaa Mall",
      title: "Partner",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      background: "Henaa Mall brings a distinctive global perspective to her practice, combining corporate law experience with investment banking acumen. After relocating to Canada in 2020, she earned her LLM from the University of Toronto while conducting tax law research, then completed her articles with an upper-tier municipality before being called to the Ontario bar in 2023. Focussing on Real Estate, Civil Litigation, Employment Law, Business Law, and Immigration, Henaa bridges transactional expertise with dispute resolution skills. Beyond her practice, she's deeply committed to professional development - mentoring over 1,000 internationally trained lawyers from 35+ countries and serving in leadership roles with the Durham Region Law Association and Durham College's Paralegal Program Advisory Committee. Fluent five languages, a published author and educator at heart, Henaa balances her legal practice with passions for Vedic astrology and yoga. When not advocating for clients or mentoring future lawyers, she enjoys culinary adventures across Ontario and relaxing with her sister and cats.",
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
      experience: "15+ years of legal practice with a focus on achieving client-centered solutions through both litigation and alternative dispute resolution methods."
    },
    {
      id: "nakul-chhibbar",
      name: "Nakul Chhibbar",
      title: "Partner",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      background: "Nakul Chhibbar is a strategic advocate with strong hold in Family Law, Wills & Estates, Civil Litigation and Real Estate Law. Licensed to practice law in Ontario, Nakul combines meticulous legal analysis with practical solutions tailored to each client's needs. Nakul's approach reflects his belief that law, like fitness, requires discipline, adaptability and commitment to excellence. When not advocating for clients, he trains with the same focus he brings to the courtroom, often accompanied by his loyal dog Bravo. At Mall & Chhibbar, Nakul has built a practice that mirrors his values: integrity in every action, diligence in every case, and personalized attention for every client. He navigates complex legal challenges with clarity and determination, transforming obstacles into favorable outcomes. An active member of the Durham Region Law Association and Peel Law Association, Nakul services clients across Ontario. Nakul serves clients fluent in English, Hindi, Urdu and Punjabi. ",
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