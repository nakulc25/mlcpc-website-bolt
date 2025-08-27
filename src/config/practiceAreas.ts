export interface PracticeArea {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  bannerImage: string;
  content: {
    overview: string;
    sections: {
      title: string;
      content: string[];
    }[];
    keyServices: string[];
    whyChooseUs: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "family-law",
    name: "Family Law",
    slug: "family-law",
    shortDescription: "Compassionate legal support for family matters including divorce, custody, and support issues.",
    bannerImage: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Family law matters are deeply personal and emotionally challenging. Our family law team provides compassionate, strategic legal representation while protecting your interests and those of your children.",
      sections: [
        {
          title: "Divorce & Separation",
          content: [
            "We guide clients through all aspects of divorce proceedings, from initial separation agreements to final divorce orders.",
            "Our approach focuses on achieving fair resolutions while minimizing conflict and protecting your family's future.",
            "We handle both contested and uncontested divorces, always seeking the most efficient path forward."
          ]
        },
        {
          title: "Parenting Time & Decision Making Responsibility",
          content: [
            "Parenting Time & Decision Making Responsibility require careful consideration of the best interests of the child.",
            "We help parents develop parenting plans that work for their unique family situation.",
            "Our team has extensive experience with complex custody matters and international child abduction cases."
          ]
        },
        {
          title: "Support & Financial Matters",
          content: [
            "Child support and spousal support calculations require detailed financial analysis.",
            "We ensure all support arrangements are fair and comply with current guidelines.",
            "Our team handles support variations, enforcement, and international support matters."
          ]
        },
        {
          title: "Indian Canadian Overlap",
          content: [
            "Parenting Time & Decision Making Responsibility require careful consideration of the best interests of the child.",
            "We help parents develop parenting plans that work for their unique family situation.",
            "Our team has extensive experience with complex custody matters and international child abduction cases."
          ]
        }
      ],
      keyServices: [
        "Divorce proceedings",
        "Separation agreements",
        "Parenting Time & Decision Making Responsibility",
        "Child and spousal support",
        "Equalization Claims",
        "Adoption proceedings",
        "Domestic contracts",
        "Family mediation"
      ],
      whyChooseUs: [
        "Compassionate approach to sensitive family matters",
        "Multilingual services available"
        ]
    },
    seo: {
      title: "Family Law Services Toronto | Mall & Chhibbar Legal",
      description: "Expert family law representation in Toronto and GTA. Divorce, custody, support, and adoption services. Compassionate legal support for your family matters.",
      keywords: ["family law toronto", "divorce lawyer", "child custody", "spousal support", "separation agreement"]
    }
  },
  {
    id: "real-estate",
    name: "Real Estate",
    slug: "real-estate",
    shortDescription: "Complete real estate legal services for residential and commercial transactions.",
    bannerImage: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Real estate transactions represent significant investments that require careful legal attention. Our real estate team provides comprehensive legal services to ensure your property transactions proceed smoothly and your interests are protected.",
      sections: [
        {
          title: "Residential Real Estate",
          content: [
            "We handle all aspects of residential real estate transactions from offer to closing.",
            "Our team conducts thorough title searches and ensures all legal requirements are met.",
            "We provide clear communication throughout the process, keeping you informed at every step."
          ]
        },
        {
          title: "Commercial Real Estate",
          content: [
            "Commercial real estate transactions require specialized knowledge and attention to detail.",
            "We assist with purchases, sales, leasing, and development projects.",
            "Our team has experience with complex commercial structures and financing arrangements."
          ]
        },
        {
          title: "Mortgage & Financing",
          content: [
            "We work with lenders to ensure mortgage documentation is properly prepared and executed.",
            "Our team handles refinancing, renewals, and discharge of mortgages.",
            "We provide advice on various financing options and their legal implications."
          ]
        }
      ],
      keyServices: [
        "Residential purchases and sales",
        "Commercial real estate transactions",
        "Mortgage and refinancing",
        "Title searches and insurance",
        "Condominium transactions",
        "New construction purchases",
        "Real estate litigation",
        "Landlord and tenant matters"
      ],
      whyChooseUs: [
        "Extensive experience in GTA real estate market",
        "Strong relationships with real estate professionals",
        "Efficient transaction processing",
        "Competitive legal fees",
        "Evening and weekend availability for closings"
      ]
    },
    seo: {
      title: "Real Estate Lawyer Toronto | Property Law Services | Mall & Chhibbar",
      description: "Expert real estate legal services in Toronto and GTA. Residential and commercial property transactions, mortgages, and title services.",
      keywords: ["real estate lawyer toronto", "property law", "home purchase", "commercial real estate", "mortgage lawyer"]
    }
  },
  {
    id: "civil-litigation",
    name: "Civil Litigation",
    slug: "civil-litigation",
    shortDescription: "Strategic litigation services for business and personal disputes.",
    bannerImage: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "When disputes cannot be resolved through negotiation, experienced litigation counsel becomes essential. Our litigation team provides strategic representation in civil matters, always seeking the most cost-effective resolution for our clients.",
      sections: [
        {
          title: "Business Disputes",
          content: [
            "Commercial disputes can significantly impact business operations and relationships.",
            "We handle contract disputes, partnership disagreements, and shareholder conflicts.",
            "Our approach focuses on protecting business interests while seeking practical solutions."
          ]
        },
       {
          title: "Employment Disputes",
          content: [
            "Workplace disputes affect both employers and employees significantly.",
            "We represent clients in wrongful dismissal, harassment, and discrimination cases.",
            "Our team provides strategic advice on employment law compliance and dispute resolution."
          ]
        }
      ],
      keyServices: [
        "Contract disputes",
        "Employment litigation",
        "Construction disputes",
        "Professional negligence",
        "Debt collection",
        "Insurance claims",
        "Appeals and judicial review"
      ],
      whyChooseUs: [
        "Proven track record in complex litigation",
        "Strategic approach to dispute resolution",
        "Alternative dispute resolution",
        "Cost-effective litigation strategies"
      ]
    },
    seo: {
      title: "Civil Litigation Lawyer Toronto | Business & Personal Disputes",
      description: "Experienced civil litigation services in Toronto. Business disputes, personal injury, employment law, and commercial litigation representation.",
      keywords: ["civil litigation toronto", "business disputes", "personal injury lawyer", "employment litigation", "contract disputes"]
    }
  },
  {
    id: "business-law",
    name: "Business Law",
    slug: "business-law",
    shortDescription: "Comprehensive legal services for businesses of all sizes.",
    bannerImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Successful businesses require strong legal foundations and ongoing legal support. Our business law team provides comprehensive services from startup formation to complex commercial transactions, helping businesses navigate legal challenges and opportunities.",
      sections: [
        {
          title: "Business Formation",
          content: [
            "Choosing the right business structure is crucial for long-term success.",
            "We assist with incorporations, partnerships, and other business entities.",
            "Our team provides ongoing corporate maintenance and compliance services."
          ]
        },
        {
          title: "Commercial Contracts",
          content: [
            "Well-drafted contracts are essential for protecting business interests.",
            "We prepare and review various commercial agreements and contracts.",
            "Our team ensures contracts reflect your business objectives and minimize risk."
          ]
        },
        {
          title: "Mergers & Acquisitions",
          content: [
            "Business acquisitions and mergers require careful legal planning and execution.",
            "We guide clients through due diligence, negotiations, and closing processes.",
            "Our team has experience with transactions of various sizes and complexities."
          ]
        }
      ],
      keyServices: [
        "Business incorporation",
        "Commercial contracts",
        "Mergers and acquisitions",
        "Corporate governance",
        "Intellectual property",
        "Regulatory compliance",
        "Business restructuring",
        "Commercial financing"
      ],
      whyChooseUs: [
        "Comprehensive business law expertise",
        "Practical business-focused advice",
        "Experience with various industries",
        "Efficient transaction processing",
        "Long-term client relationships"
      ]
    },
    seo: {
      title: "Business Lawyer Toronto | Corporate Law Services | Mall & Chhibbar",
      description: "Expert business law services in Toronto. Business formation, contracts, M&A, and corporate governance for businesses of all sizes.",
      keywords: ["business lawyer toronto", "corporate law", "business formation", "commercial contracts", "mergers acquisitions"]
    }
  },
  {
    id: "wills-estates",
    name: "Wills & Estates",
    slug: "wills-estates",
    shortDescription: "Estate planning and administration services to protect your legacy.",
    bannerImage: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Proper estate planning ensures your wishes are carried out and your loved ones are protected. Our wills and estates team provides comprehensive planning services and assists families through the estate administration process.",
      sections: [
        {
          title: "Will Preparation",
          content: [
            "A properly drafted will is essential for ensuring your wishes are carried out.",
            "We prepare comprehensive wills that address all aspects of your estate.",
            "Our team ensures your will complies with all legal requirements and minimizes potential disputes."
          ]
        },
        {
          title: "Estate Administration",
          content: [
            "Administering an estate can be complex and emotionally challenging.",
            "We guide executors through the probate process and estate administration.",
            "Our team handles all legal requirements while providing compassionate support."
          ]
        },
        {
          title: "Estate Planning",
          content: [
            "Comprehensive estate planning goes beyond just preparing a will.",
            "We assist with powers of attorney, trusts, and tax planning strategies.",
            "Our team helps minimize taxes and ensure smooth transfer of assets."
          ]
        }
      ],
      keyServices: [
        "Will preparation and updates",
        "Estate administration",
        "Powers of attorney",
        "Estate litigation",
        "Trust creation and administration",
        "Tax planning",
        "Guardianship applications",
        "Estate disputes"
      ],
      whyChooseUs: [
        "Compassionate approach to sensitive matters",
        "Tax-efficient planning strategies",
        "Ongoing support for families"
      ]
    },
    seo: {
      title: "Wills & Estates Lawyer Toronto | Estate Planning Services",
      description: "Expert wills and estates services in Toronto. Estate planning, will preparation, probate, and estate administration with compassionate support.",
      keywords: ["wills lawyer toronto", "estate planning", "probate lawyer", "estate administration", "power of attorney"]
    }
  },
  {
    id: "employment-law",
    name: "Employment Law",
    slug: "employment-law",
    shortDescription: "Employment law services for both employers and employees.",
    bannerImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Employment relationships involve complex legal rights and obligations. Our employment law team represents both employers and employees, providing strategic advice and representation in all aspects of employment law.",
      sections: [
        {
          title: "Employee Rights",
          content: [
            "Employees have important rights that must be protected in the workplace.",
            "We assist with wrongful dismissal, harassment, and discrimination claims.",
            "Our team ensures employees receive fair treatment and proper compensation."
          ]
        },
        {
          title: "Employer Services",
          content: [
            "Employers need proper policies and procedures to minimize legal risks.",
            "We assist with employment contracts, policies, and compliance matters.",
            "Our team provides training and guidance on employment law requirements."
          ]
        },
        {
          title: "Workplace Disputes",
          content: [
            "Workplace disputes require prompt and strategic legal intervention.",
            "We handle grievances, human rights complaints, and labour board matters.",
            "Our team seeks practical solutions that protect all parties' interests."
          ]
        }
      ],
      keyServices: [
        "Wrongful dismissal claims",
        "Employment contracts",
        "Workplace harassment",
        "Human rights complaints",
        "Employment standards",
        "Workplace policies",
        "Labour relations",
        "Executive compensation"
      ],
      whyChooseUs: [
        "Representation for both employers and employees",
        "Extensive employment law experience",
        "Strategic approach to workplace disputes",
        "Practical business-focused solutions",
        "Strong track record in negotiations and litigation"
      ]
    },
    seo: {
      title: "Employment Lawyer Toronto | Workplace Law Services | Mall & Chhibbar",
      description: "Expert employment law services in Toronto. Wrongful dismissal, workplace harassment, employment contracts, and human rights representation.",
      keywords: ["employment lawyer toronto", "wrongful dismissal", "workplace harassment", "employment contracts", "human rights"]
    }
  },
  {
    id: "immigration",
    name: "Immigration",
    slug: "immigration",
    shortDescription: "Comprehensive immigration services for individuals and families.",
    bannerImage: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Immigration law is complex and constantly evolving. Our immigration team provides services to help individuals and families navigate the Canadian immigration system and achieve their goals of living and working in Canada.",
      sections: [
        {
          title: "Business Immigration",
          content: [
            "Canada offers various programs for business immigrants and investors.",
            "We assist with start-up visas, self-employed persons, and investor programs."
          ]
        },
        {
          title: "Permanent Residence",
          content: [
            "Obtaining permanent residence in Canada opens doors to numerous opportunities.",
            "We assist with various immigration programs including Express Entry and Provincial Nominee Programs.",
            "Our team provides strategic advice on the best pathway for your specific situation."
          ]
        },
        {
          title: "Family Sponsorship",
          content: [
            "Family reunification is a cornerstone of Canadian immigration policy.",
            "We assist with sponsoring spouses, children, parents, and grandparents.",
            "Our team ensures all requirements are met and applications are properly prepared."
          ]
        }
      ],
      keyServices: [
        "Express Entry applications",
        "Provincial Nominee Programs",
        "Family sponsorship",
        "Work permits",
        "Study permits",
        "Business immigration",
        "Citizenship applications",
        "Immigration appeals",
        "Judicial Review",
        "Mandamus",
        "Refugee claims",
        "Appeals from Immigration Appeals Divisions"
      ],
      whyChooseUs: [
        "Multilingual services available",
        "Strong success rate with applications",
        "Ongoing support throughout the process"
      ]
    },
    seo: {
      title: "Immigration Lawyer Toronto | Canadian Immigration Services",
      description: "Expert immigration services in Toronto. Permanent residence, family sponsorship, work permits, and citizenship applications with experienced legal support.",
      keywords: ["immigration lawyer toronto", "permanent residence canada", "family sponsorship", "work permit", "express entry"]
    }
  },
  {
    id: "criminal-law",
    name: "Criminal Law",
    slug: "criminal-law",
    shortDescription: "Experienced criminal defense representation for all types of charges.",
    bannerImage: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop",
    content: {
      overview: "Criminal charges can have serious consequences for your freedom, reputation, and future. Our team provides defense representation while protecting your rights throughout the legal process.",
      sections: [
        {
          title: "Criminal Defense",
          content: [
            "Every person accused of a crime deserves a strong defense and protection of their rights.",
            "We handle all types of criminal charges from summary offenses to serious indictable matters.",
            "Our team provides strategic defense planning and in court."
          ]
        },
        {
          title: "Bail & Release",
          content: [
            "Obtaining release from custody is often the first priority in criminal matters.",
            "We assist with bail applications and ensure proper release conditions.",
            "Our team works quickly to secure your release and protect your interests."
          ]
        },
        {
          title: "Appeals",
          content: [
            "If you have been convicted, you may have grounds for appeal.",
            "We handle appeals to higher courts and seek to overturn wrongful convictions.",
            "Our team has experience with complex appellate matters and procedural issues."
          ]
        }
      ],
      keyServices: [
        "Criminal defense representation",
        "Bail applications",
        "Impaired driving charges",
        "Assault and violent crimes",
        "Drug offenses",
        "Theft and fraud charges",
        "Criminal appeals",
        "Youth criminal matters"
      ],
      whyChooseUs: [
        "24/7 availability for urgent matters",
        "Compassionate support during difficult times"
      ]
    },
    seo: {
      title: "Criminal Lawyer Toronto | Criminal Defense Services | Mall & Chhibbar",
      description: "Experienced criminal defense representation in Toronto. DUI, assault, drug charges, and all criminal matters with aggressive legal defense.",
      keywords: ["criminal lawyer toronto", "criminal defense", "DUI lawyer", "assault charges", "drug charges"]
    }
  }
];

// Helper function to get practice area by slug
export const getPracticeAreaBySlug = (slug: string): PracticeArea | undefined => {
  return practiceAreas.find(area => area.slug === slug);
};

// Helper function to get all practice area slugs (useful for routing)
export const getAllPracticeAreaSlugs = (): string[] => {
  return practiceAreas.map(area => area.slug);
};