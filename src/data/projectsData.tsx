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
    title: "Fashion Store Redesign",
    description: "A complete overhaul of the online shopping experience for a luxury fashion brand.",
    image: "/images/projects/fashion-store/hero.jpg",
    category: "E-commerce",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    client: "LuxMode Fashion",
    year: 2024,
    fullCase: {
      overview: "A comprehensive digital transformation project that revolutionized the online shopping experience for a luxury fashion retailer, resulting in significant improvements in user engagement and sales metrics.",
      challenge: "The existing e-commerce platform was struggling with poor performance, low conversion rates, and an outdated user interface that didn't reflect the brand's luxury positioning.",
      challengePoints: [
        "Site speed was averaging 6+ seconds for initial load",
        "Mobile conversion rate was 40% lower than industry standard",
        "Outdated design wasn't reflecting brand luxury status",
        "Complex checkout process leading to cart abandonment",
        "Limited integration with inventory management system"
      ],
      solution: "We developed a modern, high-performance e-commerce platform using Next.js and a headless CMS, focusing on user experience and conversion optimization.",
      solutionPoints: [
        "Implemented server-side rendering for optimal performance",
        "Developed mobile-first responsive design",
        "Created seamless checkout experience with smart validation",
        "Integrated real-time inventory management",
        "Built custom product visualization features"
      ],
      process: [
        {
          title: "Discovery",
          duration: "2 weeks",
          description: "Conducted extensive user research and competitive analysis to identify key opportunities and pain points."
        },
        {
          title: "Design",
          duration: "6 weeks",
          description: "Created comprehensive design system and interactive prototypes with continuous stakeholder feedback."
        },
        {
          title: "Development",
          duration: "12 weeks",
          description: "Iterative development with continuous integration and weekly deployments to staging environment."
        },
        {
          title: "Testing & Launch",
          duration: "4 weeks",
          description: "Comprehensive testing across devices and browsers, followed by phased rollout to users."
        }
      ],
      results: {
        stats: {
          conversionRate: {
            value: "156%",
            label: "Increase in conversion rate"
          },
          monthlyUsers: {
            value: "2.3M",
            label: "Monthly active users"
          },
          loadTime: {
            value: "74%",
            label: "Faster page load time"
          },
          salesIncrease: {
            value: "3.2x",
            label: "Increase in sales"
          }
        },
        summary: "The redesigned platform has significantly improved all key performance metrics, leading to substantial business growth and improved customer satisfaction.",
        keyAchievements: [
          "Reduced page load time from 6.2s to 1.8s",
          "Increased average order value by 42%",
          "Reduced cart abandonment rate by 67%",
          "Improved mobile conversion rate by 156%"
        ]
      },
      testimonial: {
        quote: "The new platform has transformed our online presence and significantly improved our bottom line. The attention to detail and focus on user experience has made all the difference.",
        author: "Sarah Johnson",
        position: "Chief Digital Officer",
        company: "LuxMode Fashion",
        image: "/images/testimonials/sarah-johnson.jpg"
      },
      gallery: [
        {
          image: "/images/projects/fashion-store/homepage.jpg",
          caption: "Homepage Design",
          alt: "LuxMode Fashion homepage showing hero section with featured products"
        },
        {
          image: "/images/projects/fashion-store/product-page.jpg",
          caption: "Product Detail Page",
          alt: "Product page showing detailed view with size selector and add to cart"
        },
        {
          image: "/images/projects/fashion-store/mobile-view.jpg",
          caption: "Mobile Experience",
          alt: "Mobile view of the shopping experience"
        },
        {
          image: "/images/projects/fashion-store/checkout.jpg",
          caption: "Checkout Flow",
          alt: "Streamlined checkout process with progress indicator"
        }
      ],
      timeline: "4 months",
      teamSize: "6 people",
      deliverables: [
        "Custom e-commerce platform",
        "Admin dashboard",
        "Inventory management system",
        "Analytics integration",
        "Mobile apps for iOS and Android"
      ],
      liveUrl: "https://luxmode.fashion",
      nextSteps: [
        "International marketplace expansion",
        "AI-powered product recommendations",
        "AR try-on feature implementation"
      ]
    }
  },
  // ... Similar detailed structure for other projects
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "A complete overhaul of the online shopping experience for a luxury fashion brand.",
    image: "/images/projects/fashion-store/hero.jpg",
    category: "E-commerce",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    client: "LuxMode Fashion",
    year: 2024,
    fullCase: {
      overview: "A comprehensive digital transformation project that revolutionized the online shopping experience for a luxury fashion retailer, resulting in significant improvements in user engagement and sales metrics.",
      challenge: "The existing e-commerce platform was struggling with poor performance, low conversion rates, and an outdated user interface that didn't reflect the brand's luxury positioning.",
      challengePoints: [
        "Site speed was averaging 6+ seconds for initial load",
        "Mobile conversion rate was 40% lower than industry standard",
        "Outdated design wasn't reflecting brand luxury status",
        "Complex checkout process leading to cart abandonment",
        "Limited integration with inventory management system"
      ],
      solution: "We developed a modern, high-performance e-commerce platform using Next.js and a headless CMS, focusing on user experience and conversion optimization.",
      solutionPoints: [
        "Implemented server-side rendering for optimal performance",
        "Developed mobile-first responsive design",
        "Created seamless checkout experience with smart validation",
        "Integrated real-time inventory management",
        "Built custom product visualization features"
      ],
      process: [
        {
          title: "Discovery",
          duration: "2 weeks",
          description: "Conducted extensive user research and competitive analysis to identify key opportunities and pain points."
        },
        {
          title: "Design",
          duration: "6 weeks",
          description: "Created comprehensive design system and interactive prototypes with continuous stakeholder feedback."
        },
        {
          title: "Development",
          duration: "12 weeks",
          description: "Iterative development with continuous integration and weekly deployments to staging environment."
        },
        {
          title: "Testing & Launch",
          duration: "4 weeks",
          description: "Comprehensive testing across devices and browsers, followed by phased rollout to users."
        }
      ],
      results: {
        stats: {
          conversionRate: {
            value: "156%",
            label: "Increase in conversion rate"
          },
          monthlyUsers: {
            value: "2.3M",
            label: "Monthly active users"
          },
          loadTime: {
            value: "74%",
            label: "Faster page load time"
          },
          salesIncrease: {
            value: "3.2x",
            label: "Increase in sales"
          }
        },
        summary: "The redesigned platform has significantly improved all key performance metrics, leading to substantial business growth and improved customer satisfaction.",
        keyAchievements: [
          "Reduced page load time from 6.2s to 1.8s",
          "Increased average order value by 42%",
          "Reduced cart abandonment rate by 67%",
          "Improved mobile conversion rate by 156%"
        ]
      },
      testimonial: {
        quote: "The new platform has transformed our online presence and significantly improved our bottom line. The attention to detail and focus on user experience has made all the difference.",
        author: "Sarah Johnson",
        position: "Chief Digital Officer",
        company: "LuxMode Fashion",
        image: "/images/testimonials/sarah-johnson.jpg"
      },
      gallery: [
        {
          image: "/images/projects/fashion-store/homepage.jpg",
          caption: "Homepage Design",
          alt: "LuxMode Fashion homepage showing hero section with featured products"
        },
        {
          image: "/images/projects/fashion-store/product-page.jpg",
          caption: "Product Detail Page",
          alt: "Product page showing detailed view with size selector and add to cart"
        },
        {
          image: "/images/projects/fashion-store/mobile-view.jpg",
          caption: "Mobile Experience",
          alt: "Mobile view of the shopping experience"
        },
        {
          image: "/images/projects/fashion-store/checkout.jpg",
          caption: "Checkout Flow",
          alt: "Streamlined checkout process with progress indicator"
        }
      ],
      timeline: "4 months",
      teamSize: "6 people",
      deliverables: [
        "Custom e-commerce platform",
        "Admin dashboard",
        "Inventory management system",
        "Analytics integration",
        "Mobile apps for iOS and Android"
      ],
      liveUrl: "https://luxmode.fashion",
      nextSteps: [
        "International marketplace expansion",
        "AI-powered product recommendations",
        "AR try-on feature implementation"
      ]
    }
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description: "A complete overhaul of the online shopping experience for a luxury fashion brand.",
    image: "/images/projects/fashion-store/hero.jpg",
    category: "E-commerce",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    client: "LuxMode Fashion",
    year: 2024,
    fullCase: {
      overview: "A comprehensive digital transformation project that revolutionized the online shopping experience for a luxury fashion retailer, resulting in significant improvements in user engagement and sales metrics.",
      challenge: "The existing e-commerce platform was struggling with poor performance, low conversion rates, and an outdated user interface that didn't reflect the brand's luxury positioning.",
      challengePoints: [
        "Site speed was averaging 6+ seconds for initial load",
        "Mobile conversion rate was 40% lower than industry standard",
        "Outdated design wasn't reflecting brand luxury status",
        "Complex checkout process leading to cart abandonment",
        "Limited integration with inventory management system"
      ],
      solution: "We developed a modern, high-performance e-commerce platform using Next.js and a headless CMS, focusing on user experience and conversion optimization.",
      solutionPoints: [
        "Implemented server-side rendering for optimal performance",
        "Developed mobile-first responsive design",
        "Created seamless checkout experience with smart validation",
        "Integrated real-time inventory management",
        "Built custom product visualization features"
      ],
      process: [
        {
          title: "Discovery",
          duration: "2 weeks",
          description: "Conducted extensive user research and competitive analysis to identify key opportunities and pain points."
        },
        {
          title: "Design",
          duration: "6 weeks",
          description: "Created comprehensive design system and interactive prototypes with continuous stakeholder feedback."
        },
        {
          title: "Development",
          duration: "12 weeks",
          description: "Iterative development with continuous integration and weekly deployments to staging environment."
        },
        {
          title: "Testing & Launch",
          duration: "4 weeks",
          description: "Comprehensive testing across devices and browsers, followed by phased rollout to users."
        }
      ],
      results: {
        stats: {
          conversionRate: {
            value: "156%",
            label: "Increase in conversion rate"
          },
          monthlyUsers: {
            value: "2.3M",
            label: "Monthly active users"
          },
          loadTime: {
            value: "74%",
            label: "Faster page load time"
          },
          salesIncrease: {
            value: "3.2x",
            label: "Increase in sales"
          }
        },
        summary: "The redesigned platform has significantly improved all key performance metrics, leading to substantial business growth and improved customer satisfaction.",
        keyAchievements: [
          "Reduced page load time from 6.2s to 1.8s",
          "Increased average order value by 42%",
          "Reduced cart abandonment rate by 67%",
          "Improved mobile conversion rate by 156%"
        ]
      },
      testimonial: {
        quote: "The new platform has transformed our online presence and significantly improved our bottom line. The attention to detail and focus on user experience has made all the difference.",
        author: "Sarah Johnson",
        position: "Chief Digital Officer",
        company: "LuxMode Fashion",
        image: "/images/testimonials/sarah-johnson.jpg"
      },
      gallery: [
        {
          image: "/images/projects/fashion-store/homepage.jpg",
          caption: "Homepage Design",
          alt: "LuxMode Fashion homepage showing hero section with featured products"
        },
        {
          image: "/images/projects/fashion-store/product-page.jpg",
          caption: "Product Detail Page",
          alt: "Product page showing detailed view with size selector and add to cart"
        },
        {
          image: "/images/projects/fashion-store/mobile-view.jpg",
          caption: "Mobile Experience",
          alt: "Mobile view of the shopping experience"
        },
        {
          image: "/images/projects/fashion-store/checkout.jpg",
          caption: "Checkout Flow",
          alt: "Streamlined checkout process with progress indicator"
        }
      ],
      timeline: "4 months",
      teamSize: "6 people",
      deliverables: [
        "Custom e-commerce platform",
        "Admin dashboard",
        "Inventory management system",
        "Analytics integration",
        "Mobile apps for iOS and Android"
      ],
      liveUrl: "https://luxmode.fashion",
      nextSteps: [
        "International marketplace expansion",
        "AI-powered product recommendations",
        "AR try-on feature implementation"
      ]
    }
  }
];