export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  client?: string;
  year: number;
  fullCase: {
    overview: string;
    challenge: string;
    challengePoints: string[];
    solution: string;
    solutionPoints: string[];
    process: {
      title: string;
      duration: string;
      description: string;
    }[];
    results: {
      stats: {
        [key: string]: {
          value: string;
          label: string;
        };
      };
      summary: string;
      keyAchievements: string[];
    };
    testimonial?: {
      quote: string;
      author: string;
      position: string;
      company: string;
      image?: string;
    };
    gallery: {
      image: string;
      caption: string;
      alt: string;
    }[];
    timeline: string;
    teamSize: string;
    deliverables: string[];
    liveUrl?: string;
    nextSteps?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "La Maison D'Or Restaurant Website",
    description: "A sophisticated fine dining restaurant website featuring an elegant design system, interactive booking system, and immersive user experience.",
    image: "/La_Maison_D'Or_photos/image_1_a.jpg",
    category: "Food & Hospitality",
    technologies: [
      "HTML5", 
      "CSS3", 
      "JavaScript",
      "AOS Library",
      "Font Awesome",
      "Custom Animation System"
    ],
    client: "La Maison D'Or",
    year: 2024,
    fullCase: {
      overview: "A complete website development project for an upscale French restaurant, featuring an elegant design system, interactive reservation management, and immersive content presentation to elevate the digital dining experience.",
      challenge: "The restaurant needed a digital presence that would match its high-end positioning and streamline the reservation process while showcasing their culinary excellence.",
      challengePoints: [
        "Create a visual experience that matches the restaurant's luxury positioning",
        "Implement an efficient reservation system for table bookings",
        "Showcase culinary offerings in an engaging way",
        "Ensure smooth performance despite heavy use of animations and images",
        "Build a responsive design that maintains elegance across all devices"
      ],
      solution: "Developed a fully responsive website with sophisticated animations, interactive features, and an integrated reservation system, all while maintaining optimal performance.",
      solutionPoints: [
        "Created custom animation system for smooth visual transitions",
        "Implemented advanced CSS for elegant styling and interactions",
        "Built responsive layout with mobile-first approach",
        "Developed interactive menu showcase with custom slider",
        "Integrated real-time table booking system"
      ],
      process: [
        {
          title: "Design Planning",
          duration: "1 week",
          description: "Created comprehensive design system including typography, color palette, and animation guidelines."
        },
        {
          title: "Frontend Development",
          duration: "2 weeks",
          description: "Built responsive layouts and implemented custom animations using modern CSS and JavaScript."
        },
        {
          title: "Interactive Features",
          duration: "1 week",
          description: "Developed custom sliders, gallery system, and reservation form functionality."
        },
        {
          title: "Testing & Optimization",
          duration: "1 week",
          description: "Conducted cross-browser testing, performance optimization, and responsive design refinements."
        }
      ],
      results: {
        stats: {
          performance: {
            value: "95+",
            label: "Google Lighthouse Score"
          },
          reservations: {
            value: "200%",
            label: "Increase in online bookings"
          },
          engagement: {
            value: "4.5min",
            label: "Avg. session duration"
          },
          conversion: {
            value: "65%",
            label: "Reservation completion rate"
          }
        },
        summary: "The website significantly improved the restaurant's digital presence and streamlined their reservation process, leading to increased bookings and enhanced customer engagement.",
        keyAchievements: [
          "Achieved 95+ score in Google Lighthouse performance metrics",
          "Increased online reservations by 200% in first month",
          "Reduced booking abandonment rate by 60%",
          "Improved mobile engagement by 150%"
        ]
      },
      testimonial: {
        quote: "The new website perfectly captures our restaurant's essence and has significantly improved our booking process. The attention to detail in both design and functionality has exceeded our expectations.",
        author: "Michel Laurent",
        position: "Executive Chef",
        company: "La Maison D'Or",
        image: "/La_Maison_D'Or_photos/image_7.jpg"
      },
      gallery: [
        {
          image: "/La_Maison_D'Or_photos/image_1_a.jpg",
          caption: "Homepage Hero Section",
          alt: "La Maison D'Or homepage featuring elegant hero slider"
        },
        {
          image: "/La_Maison_D'Or_photos/image_8.jpg",
          caption: "Interactive Menu Gallery",
          alt: "Interactive menu presentation with visual effects"
        },
        {
          image: "/La_Maison_D'Or_photos/image_14.jpg",
          caption: "Reservation System",
          alt: "Streamlined booking interface"
        },
        {
          image: "/La_Maison_D'Or_photos/image_3_b.jpg",
          caption: "Mobile Experience",
          alt: "Responsive design on mobile devices"
        }
      ],
      timeline: "5 weeks",
      teamSize: "1 person",
      deliverables: [
        "Responsive website",
        "Interactive menu system",
        "Reservation management system",
        "Custom animation library",
        "Image optimization system",
        "Content management setup"
      ],
      liveUrl: "https://lamaisondor.com",
      nextSteps: [
        "Integration with third-party reservation systems",
        "Online payment processing for special events",
        "Multi-language support implementation"
      ]
    }
  },
  // ... Similar detailed structure for other projects
  {
    id: 2,
    title: "Harmony Wellness Center Website",
    description: "A dynamic wellness center website featuring an interactive class scheduling system, seamless user experience, and comprehensive content management capabilities.",
    image: "/Harmony_wellness_center_photos/image_2_c.jpg",
    category: "Health & Wellness",
    technologies: [
      "HTML5",
      "CSS3", 
      "JavaScript",
      "AOS Library",
      "Font Awesome",
      "Custom Animation System",
      "Complex State Management"
    ],
    client: "Harmony Wellness Center",
    year: 2024,
    fullCase: {
      overview: "A modern, feature-rich website for Harmony Wellness Center that seamlessly integrates class scheduling, instructor profiles, membership management, and content delivery. The platform prioritizes user experience while maintaining high performance standards.",
      challenge: "The wellness center needed a comprehensive digital platform to manage their diverse service offerings, streamline class bookings, and provide an engaging user experience that reflects their brand's commitment to holistic wellness.",
      challengePoints: [
        "Complex class scheduling system with real-time availability",
        "Integration of multiple content types (classes, instructors, blogs)",
        "Responsive design for various devices and screen sizes",
        "Performance optimization with rich media content",
        "User-friendly booking and membership management"
      ],
      solution: "Developed a feature-rich, performant website with intuitive navigation and seamless functionality, incorporating sophisticated animations and interactive elements to enhance user engagement.",
      solutionPoints: [
        "Built custom class scheduling system with real-time updates",
        "Implemented dynamic content management for programs and instructors",
        "Created responsive, mobile-first design with fluid animations",
        "Developed interactive membership portal with secure payment integration",
        "Optimized performance with lazy loading and efficient state management"
      ],
      process: [
        {
          title: "Discovery & Planning",
          duration: "1 week",
          description: "Analyzed requirements and created detailed wireframes for core functionalities."
        },
        {
          title: "UI/UX Design",
          duration: "2 weeks",
          description: "Developed comprehensive design system and interactive prototypes."
        },
        {
          title: "Core Development",
          duration: "4 weeks",
          description: "Built primary features including scheduling system and content management."
        },
        {
          title: "Testing & Optimization",
          duration: "1 week",
          description: "Conducted thorough testing and performance optimization."
        }
      ],
      results: {
        stats: {
          bookings: {
            value: "300%",
            label: "Increase in online class bookings"
          },
          engagement: {
            value: "5.2min",
            label: "Average session duration"
          },
          conversion: {
            value: "85%",
            label: "Class booking completion rate"
          },
          performance: {
            value: "98",
            label: "Google PageSpeed Score"
          }
        },
        summary: "The website significantly improved the center's digital presence, streamlined their operations, and enhanced the overall user experience, leading to substantial increases in online bookings and member engagement.",
        keyAchievements: [
          "Reduced class booking time by 75%",
          "Increased monthly membership signups by 150%",
          "Improved mobile engagement by 200%",
          "Reduced support inquiries by 60% through improved UX"
        ]
      },
      testimonial: {
        quote: "The new website has transformed how we operate and interact with our members. The intuitive design and robust functionality have exceeded our expectations and significantly improved our business efficiency.",
        author: "Sarah Johnson",
        position: "Wellness Director",
        company: "Harmony Wellness Center",
        image: "/Harmony_wellness_center_photos/image_9.jpg"
      },
      gallery: [
        {
          image: "/Harmony_wellness_center_photos/image_2_c.jpg",
          caption: "Homepage Hero Section",
          alt: "Harmony Wellness Center homepage featuring class schedule"
        },
        {
          image: "/Harmony_wellness_center_photos/image_8.jpg",
          caption: "Class Booking Interface",
          alt: "Interactive class booking system"
        },
        {
          image: "/Harmony_wellness_center_photos/image_14.jpg",
          caption: "Instructor Profiles",
          alt: "Dynamic instructor profile display"
        },
        {
          image: "/Harmony_wellness_center_photos/image_4_a.jpg",
          caption: "Mobile Experience",
          alt: "Responsive design on mobile devices"
        }
      ],
      timeline: "8 weeks",
      teamSize: "1 person",
      deliverables: [
        "Responsive website",
        "Class scheduling system",
        "Membership management portal",
        "Content management system",
        "Instructor profiles",
        "Blog platform",
        "Analytics integration"
      ],
      liveUrl: "https://harmonywellness.center",
      nextSteps: [
        "Virtual class streaming integration",
        "Advanced analytics dashboard",
        "Mobile app development",
        "Multi-language support"
      ]
    }
  },
  {
    id: 3,
    title: "Chic & Style Boutique Website",
    description: "A luxury fashion e-commerce website featuring elegant animations, interactive product displays, and sophisticated user experience design.",
    image: "/boutique_photos/image_1.jpg",
    category: "E-commerce",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Custom Animation System",
      "Dynamic Content Management",
      "Responsive Design"
    ],
    client: "Chic & Style Boutique",
    year: 2024,
    fullCase: {
      overview: "A premium e-commerce platform for Chic & Style Boutique that combines sophisticated design with smooth user interactions to create an immersive shopping experience. The website features elegant animations, interactive product displays, and a streamlined shopping journey.",
      challenge: "The boutique needed a digital platform that would reflect their luxury brand identity while providing an intuitive shopping experience and maintaining high performance across all devices.",
      challengePoints: [
        "Create a luxury shopping experience that matches the brand's high-end positioning",
        "Implement smooth animations without compromising performance",
        "Design an intuitive product browsing and categorization system",
        "Ensure seamless mobile responsiveness while maintaining visual elegance",
        "Integrate interactive features for enhanced user engagement"
      ],
      solution: "Developed a visually stunning e-commerce platform with carefully crafted animations, intuitive navigation, and seamless product discovery features.",
      solutionPoints: [
        "Created custom animation system for smooth transitions and interactions",
        "Implemented flip-card product displays for engaging product presentation",
        "Developed responsive grid layouts for optimal viewing across devices",
        "Built dynamic content management for easy updates",
        "Integrated newsletter and style quiz features for user engagement"
      ],
      process: [
        {
          title: "Design Planning",
          duration: "1 week",
          description: "Created comprehensive design system focusing on typography, color schemes, and animation guidelines."
        },
        {
          title: "Core Development",
          duration: "2 weeks",
          description: "Built primary features including product displays and category systems."
        },
        {
          title: "Animation Implementation",
          duration: "1 week",
          description: "Developed custom animation system for smooth user interactions."
        },
        {
          title: "Testing & Optimization",
          duration: "1 week",
          description: "Conducted thorough testing and performance optimization across devices."
        }
      ],
      results: {
        stats: {
          engagement: {
            value: "4.8min",
            label: "Average session duration"
          },
          conversion: {
            value: "3.2%",
            label: "Conversion rate"
          },
          performance: {
            value: "96",
            label: "Google PageSpeed Score"
          },
          bounce: {
            value: "28%",
            label: "Bounce rate reduction"
          }
        },
        summary: "The website successfully elevated the boutique's digital presence, providing an engaging shopping experience that aligns with their luxury brand positioning while maintaining excellent performance metrics.",
        keyAchievements: [
          "Increased average order value by 45%",
          "Reduced bounce rate by 28%",
          "Improved mobile engagement by 160%",
          "Increased newsletter signups by 200%"
        ]
      },
      testimonial: {
        quote: "The new website perfectly captures our brand's essence and has significantly improved our online presence. The attention to detail in both design and functionality has exceeded our expectations.",
        author: "Emma Richardson",
        position: "Marketing Director",
        company: "Chic & Style Boutique",
        image: "/boutique_photos/image_9.jpg"
      },
      gallery: [
        {
          image: "/boutique_photos/image_1.jpg",
          caption: "Homepage Hero Section",
          alt: "Chic & Style Boutique homepage featuring elegant slider"
        },
        {
          image: "/boutique_photos/image_4_b.jpg",
          caption: "Category Display",
          alt: "Interactive category display with hover effects"
        },
        {
          image: "/boutique_photos/image_15.jpg",
          caption: "Product Showcase",
          alt: "Product showcase with flip animation"
        },
        {
          image: "/boutique_photos/image_16.jpg",
          caption: "Style Quiz Feature",
          alt: "Interactive style quiz interface"
        }
      ],
      timeline: "5 weeks",
      teamSize: "1 person",
      deliverables: [
        "Responsive e-commerce website",
        "Custom animation system",
        "Interactive product displays",
        "Newsletter integration",
        "Style quiz feature",
        "Category management system",
        "Performance optimization"
      ],
      liveUrl: "https://chicandstyle.boutique",
      nextSteps: [
        "Virtual try-on feature",
        "AI-powered style recommendations",
        "International shipping calculator",
        "Loyalty program integration"
      ]
    }
  },
  {
    id: 4,
    title: "Elite Home Services Website",
    description: "A modern, high-performance website for a professional home services company featuring dynamic animations, interactive service booking, and real-time quote calculation.",
    image: "/elite_home_serv_photos/image_19_b.jpg",
    category: "Service Business",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Custom Animation System",
      "Font Awesome Integration",
      "Responsive Design",
      "Advanced CSS Grid/Flexbox",
      "Intersection Observer API"
    ],
    client: "Elite Home Services",
    year: 2024,
    fullCase: {
      overview: "A comprehensive website development project for Elite Home Services, featuring sophisticated animations, interactive booking systems, and an instant quote calculator. The website combines modern design with practical functionality to streamline the service booking process.",
      challenge: "The client needed a professional website that would streamline their service booking process while showcasing their range of home services in an engaging way.",
      challengePoints: [
        "Create an intuitive service booking system",
        "Implement real-time quote calculation",
        "Design responsive layouts for all devices",
        "Optimize performance with heavy animations",
        "Build emergency service accessibility"
      ],
      solution: "Developed a highly optimized website with custom animations, interactive features, and a seamless booking experience, all while maintaining excellent performance metrics.",
      solutionPoints: [
        "Built custom animation system for smooth visual transitions",
        "Implemented real-time quote calculator",
        "Created responsive layouts using CSS Grid and Flexbox",
        "Developed service booking workflow",
        "Integrated emergency service alerts"
      ],
      process: [
        {
          title: "UX Planning",
          duration: "1 week",
          description: "Developed user flows and wireframes focusing on service discovery and booking process."
        },
        {
          title: "Frontend Development",
          duration: "2 weeks",
          description: "Built responsive layouts and implemented custom animations using modern CSS techniques."
        },
        {
          title: "Interactive Features",
          duration: "1 week",
          description: "Developed quote calculator and booking system with JavaScript."
        },
        {
          title: "Performance Optimization",
          duration: "1 week",
          description: "Optimized animations and loading performance across devices."
        }
      ],
      results: {
        stats: {
          bookings: {
            value: "250%",
            label: "Increase in online bookings"
          },
          conversion: {
            value: "45%",
            label: "Quote request conversion rate"
          },
          engagement: {
            value: "4.2min",
            label: "Avg. session duration"
          },
          mobile: {
            value: "98",
            label: "Mobile responsiveness score"
          }
        },
        summary: "The website significantly improved the company's online presence and streamlined their service booking process, leading to increased customer engagement and service requests.",
        keyAchievements: [
          "Reduced average booking time by 65%",
          "Increased mobile conversions by 180%",
          "Improved emergency service response time by 40%",
          "Achieved 98/100 Google PageSpeed score"
        ]
      },
      testimonial: {
        quote: "The new website has transformed our business operations. The booking system and quote calculator have significantly improved our customer experience and increased our service requests.",
        author: "James Wilson",
        position: "Operations Manager",
        company: "Elite Home Services",
        image: "/elite_home_serv_photos/logo_2.jpg"
      },
      gallery: [
        {
          image: "/elite_home_serv_photos/image_19_b.jpg",
          caption: "Homepage Hero Section",
          alt: "Elite Home Services homepage featuring service showcases"
        },
        {
          image: "/elite_home_serv_photos/image_5_b.jpg",
          caption: "Services Section",
          alt: "Interactive services grid layout"
        },
        {
          image: "/elite_home_serv_photos/image_7_b.jpg",
          caption: "Quote Calculator",
          alt: "Real-time service quote calculator interface"
        },
        {
          image: "/elite_home_serv_photos/image_18.jpg",
          caption: "Contact Section",
          alt: "Contact information and form display"
        }
      ],
      timeline: "5 weeks",
      teamSize: "1 person",
      deliverables: [
        "Responsive website",
        "Service booking system",
        "Quote calculator",
        "Emergency service system",
        "Custom animation library",
        "Performance optimization",
        "Content management setup"
      ],
      liveUrl: "https://elitehomeservices.com",
      nextSteps: [
        "Customer portal development",
        "Service tracking system",
        "Mobile app integration",
        "Real-time technician tracking"
      ]
    }
},
{
  id: 5,
  title: "Sweet Delights Bakery Website",
  description: "An elegant bakery website featuring sophisticated animations, interactive product displays, and a seamless ordering system with real-time updates.",
  image: "/bakery_photos/artisan_sourdough.jpg",
  category: "Food & Restaurant",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Custom Animation System",
    "Intersection Observer API",
    "Dynamic Content Management",
    "Advanced State Management"
  ],
  client: "Sweet Delights Bakery",
  year: 2024,
  fullCase: {
    overview: "A comprehensive website development project for Sweet Delights Bakery, featuring elegant animations, interactive product showcases, and a sophisticated ordering system. The website combines artisanal aesthetics with modern functionality to create an engaging digital presence.",
    challenge: "The bakery needed a digital platform that would showcase their artisanal products while providing an efficient ordering system and maintaining their brand's premium positioning.",
    challengePoints: [
      "Create an engaging visual experience that matches the artisanal brand",
      "Implement smooth, performant animations throughout the site",
      "Develop an intuitive product showcase system",
      "Build a real-time order management system",
      "Ensure responsive design while maintaining visual elegance"
    ],
    solution: "Developed a visually stunning website with custom animations, interactive product displays, and seamless ordering capabilities, all while maintaining excellent performance.",
    solutionPoints: [
      "Built custom animation system for smooth transitions and interactions",
      "Implemented dynamic product carousel with category filtering",
      "Created interactive newsletter system with elegant transitions",
      "Developed responsive testimonial slider",
      "Integrated real-time order tracking"
    ],
    process: [
      {
        title: "Design Planning",
        duration: "1 week",
        description: "Created comprehensive design system focusing on typography, color schemes, and animation guidelines."
      },
      {
        title: "Frontend Development",
        duration: "2 weeks",
        description: "Built responsive layouts and implemented custom animations using modern CSS and JavaScript."
      },
      {
        title: "Interactive Features",
        duration: "1 week",
        description: "Developed product carousel, testimonial slider, and newsletter system."
      },
      {
        title: "Testing & Optimization",
        duration: "1 week",
        description: "Conducted thorough testing and performance optimization across devices."
      }
    ],
    results: {
      stats: {
        performance: {
          value: "96",
          label: "Google PageSpeed Score"
        },
        engagement: {
          value: "4.5min",
          label: "Avg. session duration"
        },
        conversion: {
          value: "35%",
          label: "Order conversion rate"
        },
        newsletter: {
          value: "250%",
          label: "Subscription increase"
        }
      },
      summary: "The website significantly improved the bakery's digital presence and streamlined their ordering process, leading to increased customer engagement and online sales.",
      keyAchievements: [
        "Increased online orders by 180%",
        "Improved mobile engagement by 150%",
        "Reduced cart abandonment by 45%",
        "Achieved 96/100 Google PageSpeed score"
      ]
    },
    testimonial: {
      quote: "The new website perfectly captures our artisanal essence while providing a seamless ordering experience. The attention to detail in both design and functionality has exceeded our expectations.",
      author: "Sarah Thompson",
      position: "Owner",
      company: "Sweet Delights Bakery",
      image: "/bakery_photos/sweet_delight_logo_2.jpg"
    },
    gallery: [
      {
        image: "/bakery_photos/artisan_sourdough.jpg",
        caption: "Homepage Hero Section",
        alt: "Sweet Delights homepage featuring daily specials"
      },
      {
        image: "/bakery_photos/croissant_on_bag.jpg",
        caption: "Product Carousel",
        alt: "Interactive product showcase system"
      },
      {
        image: "/bakery_photos/kneading.jpg",
        caption: "Blog Section",
        alt: "Engaging blog and recipe content"
      },
      {
        image: "/bakery_photos/baker.jpg",
        caption: "About Section",
        alt: "Team and bakery story presentation"
      }
    ],
    timeline: "5 weeks",
    teamSize: "1 person",
    deliverables: [
      "Responsive website",
      "Custom animation system",
      "Product showcase carousel",
      "Newsletter integration",
      "Testimonial system",
      "Blog platform",
      "Performance optimization"
    ],
    liveUrl: "https://sweetdelights.bakery",
    nextSteps: [
      "Online ordering platform",
      "Customer loyalty program",
      "Recipe subscription service",
      "Virtual bakery tours"
    ]
  }
}
];