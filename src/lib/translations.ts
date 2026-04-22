export type Language = "fr" | "en";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    whyUs: string;
    process: string;
    testimonials: string;
    contact: string;
    contactUs: string;
  };
  
  // Hero section
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    getQuote: string;
    discoverServices: string;
    certified: string;
    certifiedDesc: string;
    international: string;
    internationalDesc: string;
    responsive: string;
    responsiveDesc: string;
    clientsSatisfied: string;
    yearsExperience: string;
    projectsDelivered: string;
    supportClient: string;
  };
  
  // Trust section
  trust: {
    clients: string;
    experience: string;
    satisfaction: string;
    delivery: string;
    theyTrustUs: string;
  };
  
  // Partners
  partners: {
    btp: string;
    mining: string;
    healthcare: string;
    industrial: string;
    public: string;
    transport: string;
  };
  
  // About section
  about: {
    badge: string;
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    excellence: {
      title: string;
      description: string;
    };
    proximity: {
      title: string;
      description: string;
    };
    locationDescription: string;
    location: string;
    address: string;
  };
  
  // Services section
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      epi: {
        title: string;
        description: string;
        features: string[];
      };
      workwear: {
        title: string;
        description: string;
        features: string[];
      };
      hygiene: {
        title: string;
        description: string;
        features: string[];
      };
      safety: {
        title: string;
        description: string;
        features: string[];
      };
      technical: {
        title: string;
        description: string;
        features: string[];
      };
      supplies: {
        title: string;
        description: string;
        features: string[];
      };
    };
    learnMore: string;
  };
  
  // Why Us section
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    internationalStandards: {
      title: string;
      description: string;
    };
    unbeatablePrices: {
      title: string;
      description: string;
    };
    customizableProducts: {
      title: string;
      description: string;
    };
    fastDelivery: {
      title: string;
      description: string;
    };
    dedicatedSupport: {
      title: string;
      description: string;
    };
    continuousInnovation: {
      title: string;
      description: string;
    };
  };
  
  // Process section
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      contact: {
        title: string;
        description: string;
      };
      audit: {
        title: string;
        description: string;
      };
      quote: {
        title: string;
        description: string;
      };
      delivery: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    step: string;
  };
  
  // Testimonials section
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    testimonials: {
      name: string;
      role: string;
      company: string;
      content: string;
      rating: number;
    }[];
  };
  
  // CTA section
  cta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    getFreeQuote: string;
    callUs: string;
    emailUs: string;
  };
  
  // Footer
  footer: {
    description: string;
    services: string;
    company: string;
    needQuote: string;
    needQuoteDesc: string;
    writeUs: string;
    legal: string;
    privacy: string;
    rights: string;
    servicesList: string[];
    companyList: string[];
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      whyUs: "Pourquoi nous",
      process: "Processus",
      testimonials: "Témoignages",
      contact: "Contact",
      contactUs: "Nous contacter",
    },
    hero: {
      badge: "Disponible",
      title: "Votre partenaire de",
      titleHighlight: "confiance",
      titleEnd: "en RDC",
      subtitle: "IMM Corporation révolutionne l'offre de services en République Démocratique du Congo. Équipements de sécurité, solutions d'hygiène et services professionnels - au standard international.",
      getQuote: "Demander un devis",
      discoverServices: "Découvrir nos services",
      certified: "Certifié",
      certifiedDesc: "Qualité ISO",
      international: "International",
      internationalDesc: "Standards EU",
      responsive: "Réactif",
      responsiveDesc: "Livraison rapide",
      clientsSatisfied: "Clients satisfaits",
      yearsExperience: "Années d'expérience",
      projectsDelivered: "Projets livrés",
      supportClient: "Support client",
    },
    trust: {
      clients: "Clients actifs",
      experience: "Années d'expertise",
      satisfaction: "Taux de satisfaction",
      delivery: "Délai de livraison",
      theyTrustUs: "Ils nous font confiance",
    },
    partners: {
      btp: "Génie civil",
      mining: "Industries minières",
      healthcare: "Centres de santé",
      industrial: "Secteur industriel",
      public: "Institutions publiques",
      transport: "Transport & Logistique",
    },
    about: {
      badge: "Qui sommes-nous",
      title: "Une entreprise multi-services d'excellence",
      subtitle: "Fondée sur une vision d'excellence, IMM Corporation est active dans les secteurs-clés de l'économie congolaise. Nous développons un réseau de partenaires capable de répondre aux besoins tant professionnels que particuliers.",
      mission: {
        title: "Notre Mission",
        description: "Révolutionner l'offre de services en RDC en capitalisant sur le savoir-faire acquis en Occident par nos fondateurs, pour proposer des solutions de qualité internationale.",
      },
      vision: {
        title: "Notre Vision",
        description: "Contribuer activement au développement de l'économie congolaise en rendant accessibles des équipements et services professionnels de premier ordre.",
      },
      excellence: {
        title: "Excellence",
        description: "Chaque produit et service est soumis à des standards rigoureux de qualité. Nous ne transigeons jamais sur la sécurité et la fiabilité.",
      },
      proximity: {
        title: "Proximité",
        description: "Un réseau de partenaires solide et une présence locale à Kinshasa nous permettent de répondre efficacement aux besoins de nos clients.",
      },
      locationDescription: "au cœur des affaires en RDC",
      location: "Basée à",
      address: "6081, Avenue Lokele - C/o Restaurant Super Aubaine",
    },
    services: {
      badge: "Nos services",
      title: "Des solutions complètes pour votre sécurité",
      subtitle: "IMM Corporation propose une offre diversifiée de produits et services répondant aux plus hauts standards de qualité, adaptés au marché congolais.",
      items: {
        epi: {
          title: "Équipements de Protection Individuelle",
          description: "Casques, gants, lunettes, harnais et équipements complets conformes aux normes internationales. Protection optimale pour chaque corps de métier.",
          features: ["Conformes aux normes CE", "Personnalisables", "Prix compétitifs"],
        },
        workwear: {
          title: "Vêtements de Travail",
          description: "Vêtements ignifugés en matériaux haute performance (nylon, coton traité). Résistants au feu, durables et confortables pour une utilisation quotidienne.",
          features: ["Matériaux ignifugés", "Haute visibilité", "Sur mesure disponible"],
        },
        hygiene: {
          title: "Solutions d'Hygiène",
          description: "Distributeurs de gel hydroalcoolique et produits d'hygiène professionnels. Solutions complètes pour les espaces de travail et lieux publics.",
          features: ["Distributeurs automatiques", "Gel certifié", "Installation incluse"],
        },
        safety: {
          title: "Équipements de Sécurité",
          description: "Signalisation, extincteurs, matériel de premiers secours et équipements de sécurité incendie. Tout le nécessaire pour un environnement de travail sûr.",
          features: ["Normes internationales", "Formation incluse", "Maintenance"],
        },
        technical: {
          title: "Services Techniques",
          description: "Conseil, installation et maintenance de vos équipements. Nos experts vous accompagnent de l'audit à la mise en service complète.",
          features: ["Audit gratuit", "Installation", "Suivi personnalisé"],
        },
        supplies: {
          title: "Fournitures Professionnelles",
          description: "Large gamme de fournitures pour entreprises et institutions. Commandes en gros avec des tarifs préférentiels et livraison rapide.",
          features: ["Catalogue étendu", "Tarifs dégressifs", "Livraison express"],
        },
      },
      learnMore: "En savoir plus",
    },
    whyUs: {
      badge: "Pourquoi nous choisir",
      title: "Ce qui nous distingue",
      subtitle: "IMM Corporation n'est pas un simple fournisseur. Nous sommes un partenaire stratégique engagé dans la réussite de vos projets.",
      internationalStandards: {
        title: "Standards internationaux",
        description: "Nos produits respectent les normes européennes et internationales. Un savoir-faire acquis en Occident, appliqué localement.",
      },
      unbeatablePrices: {
        title: "Prix imbattables",
        description: "Des équipements de qualité à des prix qui battent toute concurrence sur le marché congolais, sans compromis sur la sécurité.",
      },
      customizableProducts: {
        title: "Produits personnalisables",
        description: "Chaque équipement peut être adapté en fonction des besoins spécifiques de vos activités et de vos équipes.",
      },
      fastDelivery: {
        title: "Livraison rapide",
        description: "Un stock local à Kinshasa et une logistique optimisée pour des délais de livraison parmi les plus courts du marché.",
      },
      dedicatedSupport: {
        title: "Accompagnement dédié",
        description: "Un conseiller dédié pour chaque client, de l'identification des besoins jusqu'au service après-vente.",
      },
      continuousInnovation: {
        title: "Innovation continue",
        description: "Nous introduisons régulièrement de nouveaux produits et technologies pour anticiper vos besoins futurs.",
      },
    },
    process: {
      badge: "Notre processus",
      title: "Comment nous travaillons",
      subtitle: "Un processus structuré et transparent, pensé pour vous offrir une expérience fluide et professionnelle à chaque étape.",
      steps: {
        contact: {
          title: "Prise de contact",
          description: "Contactez-nous par téléphone, email ou via notre formulaire. Nous répondons sous 24h avec une première analyse de votre besoin.",
        },
        audit: {
          title: "Audit & Conseil",
          description: "Nos experts évaluent vos besoins spécifiques, analysent votre environnement de travail et vous recommandent les solutions les plus adaptées.",
        },
        quote: {
          title: "Devis personnalisé",
          description: "Recevez un devis détaillé et transparent, avec des options adaptées à votre budget. Aucun frais caché, tout est clair dès le départ.",
        },
        delivery: {
          title: "Livraison & Installation",
          description: "Livraison rapide à Kinshasa et dans toute la RDC. Installation professionnelle incluse pour les équipements qui le nécessitent.",
        },
        support: {
          title: "Suivi & Support",
          description: "Un service après-vente réactif et un suivi régulier pour garantir votre satisfaction et le bon fonctionnement de vos équipements.",
        },
      },
      step: "Étape",
    },
    testimonials: {
      badge: "Témoignages",
      title: "La parole à nos clients",
      subtitle: "Découvrez ce que nos partenaires disent de notre collaboration et de la qualité de nos services.",
      testimonials: [
        {
          name: "Jean-Pierre Kabongo",
          role: "Directeur Général",
          company: "KinBTP Construction",
          content: "IMM Corporation a transformé la sécurité sur nos chantiers. La qualité des EPI fournis est comparable aux standards européens, à un prix accessible. Notre taux d'accidents a chuté de 60% depuis notre partenariat.",
          rating: 5,
        },
        {
          name: "Marie-Claire Tshombe",
          role: "Responsable HSE",
          company: "Gecamines SA",
          content: "La réactivité et le professionnalisme d'IMM sont remarquables. Livraison en 48h, équipements personnalisés à notre image de marque, et un suivi après-vente irréprochable. Un vrai partenaire stratégique.",
          rating: 5,
        },
        {
          name: "Patrick Mbuyi",
          role: "Administrateur",
          company: "Hôpital Général de Kinshasa",
          content: "Les distributeurs de gel hydroalcoolique fournis par IMM sont d'excellente qualité. L'installation a été rapide et professionnelle. Le personnel et les patients sont satisfaits.",
          rating: 5,
        },
        {
          name: "Cécile Ngandu",
          role: "Chef de Projet",
          company: "Congo Mining Corp",
          content: "Nous avons équipé plus de 200 travailleurs avec les vêtements ignifugés d'IMM. La durabilité est impressionnante, même dans des conditions extrêmes. Un investissement qui en vaut la peine.",
          rating: 5,
        },
      ],
    },
    cta: {
      badge: "Passez à l'action",
      title: "Prêt à sécuriser votre",
      titleHighlight: "environnement de travail",
      subtitle: "Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.",
      getFreeQuote: "Demander un devis gratuit",
      callUs: "Nous appeler",
      emailUs: "Nous écrire",
    },
    footer: {
      description: "Entreprise multi-services d'excellence, active dans les secteurs-clés de l'économie congolaise depuis plus de 10 ans.",
      services: "Services",
      company: "Entreprise",
      needQuote: "Besoin d'un devis ?",
      needQuoteDesc: "Décrivez votre besoin et recevez une proposition personnalisée sous 24h.",
      writeUs: "Nous écrire",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      rights: "Tous droits réservés.",
      servicesList:[
        "Équipements de sécurité",
        "Vêtements de travail",
        "Solutions d'hygiène",
        "Services techniques",
        "Fournitures professionnelles",
      ],
      companyList: [
        "À propos",
        "Pourquoi nous",
        "Notre processus",
        "Témoignages",
        "Contact",
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      whyUs: "Why Us",
      process: "Process",
      testimonials: "Testimonials",
      contact: "Contact",
      contactUs: "Contact Us",
    },
    hero: {
      badge: "Available",
      title: "Your trusted",
      titleHighlight: "partner",
      titleEnd: "in DRC",
      subtitle: "IMM Corporation revolutionizes service offerings in the Democratic Republic of Congo. Safety equipment, hygiene solutions and professional services - at international standards.",
      getQuote: "Get a Quote",
      discoverServices: "Discover Our Services",
      certified: "Certified",
      certifiedDesc: "ISO Quality",
      international: "International",
      internationalDesc: "EU Standards",
      responsive: "Responsive",
      responsiveDesc: "Fast Delivery",
      clientsSatisfied: "Clients Satisfied",
      yearsExperience: "Years of Experience",
      projectsDelivered: "Projects Delivered",
      supportClient: "Client Support",
    },
    trust: {
      clients: "Active Clients",
      experience: "Years of Experience",
      satisfaction: "Satisfaction Rate",
      delivery: "Delivery Time",
      theyTrustUs: "They Trust Us",
    },
    partners: {
      btp: "Civil Engineering",
      mining: "Mining Industries",
      healthcare: "Healthcare Centers",
      industrial: "Industrial Sector",
      public: "Public Institutions",
      transport: "Transport & Logistics",
    },
    about: {
      badge: "Who we are",
      title: "A multi-service excellence company",
      subtitle: "Founded on a vision of excellence, IMM Corporation is active in key sectors of the Congolese economy. We develop a network of partners capable of meeting both professional and individual needs.",
      mission: {
        title: "Our Mission",
        description: "To revolutionize service offerings in DRC by leveraging the expertise acquired in the West by our founders, to propose international quality solutions.",
      },
      vision: {
        title: "Our Vision",
        description: "To actively contribute to the development of the Congolese economy by making top-tier professional equipment and services accessible.",
      },
      excellence: {
        title: "Excellence",
        description: "Every product and service is subject to rigorous quality standards. We never compromise on safety and reliability.",
      },
      proximity: {
        title: "Proximity",
        description: "A strong partner network and local presence in Kinshasa allow us to effectively respond to our clients' needs.",
      },
      location: "Based in",
      address: "6081, Avenue Lokele - C/o Restaurant Super Aubaine",
      locationDescription: "in the heart of business in DRC",
    },
    services: {
      badge: "Our Services",
      title: "Complete solutions for your safety",
      subtitle: "IMM Corporation offers a diversified range of products and services meeting the highest quality standards, adapted to the Congolese market.",
      items: {
        epi: {
          title: "Personal Protective Equipment",
          description: "Helmets, gloves, goggles, harnesses and complete equipment compliant with international standards. Optimal protection for every profession.",
          features: ["CE Compliant", "Customizable", "Competitive Prices"],
        },
        workwear: {
          title: "Workwear",
          description: "Fire-resistant clothing in high-performance materials (treated nylon, cotton). Fire-resistant, durable and comfortable for daily use.",
          features: ["Fire-resistant Materials", "High Visibility", "Custom Available"],
        },
        hygiene: {
          title: "Hygiene Solutions",
          description: "Hand sanitizer dispensers and professional hygiene products. Complete solutions for workspaces and public places.",
          features: ["Automatic Dispensers", "Certified Gel", "Installation Included"],
        },
        safety: {
          title: "Safety Equipment",
          description: "Signage, fire extinguishers, first aid equipment and fire safety equipment. Everything needed for a safe work environment.",
          features: ["International Standards", "Training Included", "Maintenance"],
        },
        technical: {
          title: "Technical Services",
          description: "Consulting, installation and maintenance of your equipment. Our experts support you from audit to complete commissioning.",
          features: ["Free Audit", "Installation", "Personalized Follow-up"],
        },
        supplies: {
          title: "Professional Supplies",
          description: "Wide range of supplies for companies and institutions. Bulk orders with preferential rates and fast delivery.",
          features: ["Extensive Catalog", "Decreasing Rates", "Express Delivery"],
        },
      },
      learnMore: "Learn More",
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "What Sets Us Apart",
      subtitle: "IMM Corporation is not just a supplier. We are a strategic partner committed to the success of your projects.",
      internationalStandards: {
        title: "International Standards",
        description: "Our products respect European and international standards. Expertise acquired in the West, applied locally.",
      },
      unbeatablePrices: {
        title: "Unbeatable Prices",
        description: "Quality equipment at prices that beat all competition in the Congolese market, without compromising on safety.",
      },
      customizableProducts: {
        title: "Customizable Products",
        description: "Each equipment can be adapted according to the specific needs of your activities and teams.",
      },
      fastDelivery: {
        title: "Fast Delivery",
        description: "Local stock in Kinshasa and optimized logistics for delivery times among the shortest in the market.",
      },
      dedicatedSupport: {
        title: "Dedicated Support",
        description: "A dedicated advisor for each client, from needs identification to after-sales service.",
      },
      continuousInnovation: {
        title: "Continuous Innovation",
        description: "We regularly introduce new products and technologies to anticipate your future needs.",
      },
    },
    process: {
      badge: "Our Process",
      title: "How We Work",
      subtitle: "A structured and transparent process, designed to offer you a smooth and professional experience at every step.",
      steps: {
        contact: {
          title: "Initial Contact",
          description: "Contact us by phone, email or through our form. We respond within 24 hours with a first analysis of your need.",
        },
        audit: {
          title: "Audit & Consultation",
          description: "Our experts evaluate your specific needs, analyze your work environment and recommend the most suitable solutions.",
        },
        quote: {
          title: "Personalized Quote",
          description: "Receive a detailed and transparent quote, with options adapted to your budget. No hidden fees, everything is clear from the start.",
        },
        delivery: {
          title: "Delivery & Installation",
          description: "Fast delivery in Kinshasa and throughout DRC. Professional installation included for equipment that requires it.",
        },
        support: {
          title: "Follow-up & Support",
          description: "Responsive after-sales service and regular follow-up to ensure your satisfaction and proper functioning of your equipment.",
        },
      },
      step: "Step",
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Discover what our partners say about our collaboration and the quality of our services.",
      testimonials: [
        {
          name: "Jean-Pierre Kabongo",
          role: "General Manager",
          company: "KinBTP Construction",
          content: "IMM Corporation has transformed safety on our construction sites. The quality of the PPE provided is comparable to European standards, at an affordable price. Our accident rate has dropped by 60% since our partnership.",
          rating: 5,
        },
        {
          name: "Marie-Claire Tshombe",
          role: "Health and Safety Manager",
          company: "Gecamines SA",
          content: "The responsiveness and professionalism of IMM are remarkable. Delivery in 48 hours, customized equipment to our brand, and impeccable after-sales service. A true strategic partner.",
          rating: 5,
        },
        {
          name: "Patrick Mbuyi",
          role: "Administrator",
          company: "Hôpital Général de Kinshasa",
          content: "The alcohol gel dispensers provided by IMM are of excellent quality. The installation was quick and professional. The staff and patients are satisfied.",
          rating: 5,
        },
        {
          name: "Cécile Ngandu",
          role: "Project Manager",
          company: "Congo Mining Corp",
          content: "We equipped more than 200 workers with IMM's flame-resistant clothing. The durability is impressive, even in extreme conditions. A worthwhile investment.",
          rating: 5,
        },
      ],
    },
    cta: {
      badge: "Take Action",
      title: "Ready to secure your",
      titleHighlight: "work environment",
      subtitle: "Contact us today for a free and personalized quote. Our team of experts is at your disposal to answer all your questions.",
      getFreeQuote: "Get a Free Quote",
      callUs: "Call Us",
      emailUs: "Write to Us",
    },
    footer: {
      description: "Multi-service excellence company, active in key sectors of the Congolese economy for over 10 years.",
      services: "Services",
      company: "Company",
      needQuote: "Need a Quote?",
      needQuoteDesc: "Describe your need and receive a personalized proposal within 24 hours.",
      writeUs: "Write to Us",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
      servicesList: [
        "Safety Equipment",
        "Work Clothing",
        "Hygiene Solutions",
        "Technical Services",
        "Professional Supplies",
      ],
      companyList: [
        "About",
        "Why Us",
        "Our Process",
        "Testimonials",
        "Contact",
      ],
    },
  },
};
