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
}

export const siteConfig: SiteConfig = {
  firm: {
    name: "Mall & Chhibbar Legal Professional Corp.",
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
    title: "Mall & Chhibbar Legal",
    subtitle: "Professional Corp.",
    buttonText: "Schedule Consultation"
  },
  consultation: {
    urgentKeyword: "Urgent",
    freeMinutes: 15,
    description: "We understand that legal matters can be time-sensitive. Our team is ready to provide immediate assistance for urgent cases."
  },
  email: {
    serviceId: "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS service ID
    templateId: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS template ID
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY", // Replace with your EmailJS public key
    toEmail: "nakul@mclpc.ca" // Email address where form submissions will be sent
  }
};