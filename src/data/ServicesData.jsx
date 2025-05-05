// data/ServiceData.tsx
import { 
  Code, 
  Paintbrush, 
  ShoppingBag, 
  Database, 
  BarChart, 
  Smartphone, 
  Globe,
  Search,
  Layout,
  Shield,
  Cpu,
  MessageSquare
} from 'lucide-react';

export const heroContent = {
  title: "Transform Your Digital Presence with Our",
  highlightedText: "Professional Services",
  description: "We combine creativity, strategy, and innovative solutions to help your business succeed online.",
  buttonText: "Explore Our Services"
};

export const serviceCategories = [
  {
    id: 'website-design',
    label: 'Website Design',
    icon: Code,
    hero: {
      title: "Custom Website Design Solutions",
      description: "Create stunning, high-performance websites that drive results",
      image: "/images/services/web-dev-hero.jpg"
    },
    overview: {
      title: "Transforming Ideas into Powerful Websites",
      description: "Our website design service delivers custom, responsive websites that engage users and drive business growth.",
      keyPoints: [
        "Custom website development",
        "Responsive design",
        "CMS integration",
        "Performance optimization"
      ]
    },
    features: [
      {
        title: "Custom Design",
        description: "Unique websites tailored to your brand",
        icon: Layout
      },
      {
        title: "CMS Development",
        description: "Easy-to-manage content systems",
        icon: Database
      },
      {
        title: "Responsive Design",
        description: "Perfect on all devices",
        icon: Smartphone
      },
      {
        title: "SEO Optimization",
        description: "Built for search engines",
        icon: Search
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your needs",
        duration: "1 week"
      },
      {
        title: "Design",
        description: "Creating your website's look",
        duration: "2-3 weeks"
      },
      {
        title: "Development",
        description: "Building your website",
        duration: "4-6 weeks"
      },
      {
        title: "Testing",
        description: "Ensuring everything works",
        duration: "1 week"
      },
      {
        title: "Launch",
        description: "Going live",
        duration: "1 week"
      }
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "/images/tech/wordpress.svg"
      },
      {
        name: "React",
        icon: "/images/tech/react.svg"
      },
      {
        name: "Next.js",
        icon: "/images/tech/nextjs.svg"
      }
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "A typical custom website takes 8-12 weeks from start to finish."
      },
      {
        question: "Do you provide hosting?",
        answer: "Yes, we offer reliable hosting solutions with regular maintenance."
      },
      {
        question: "Can you update my existing website?",
        answer: "Yes, we can modernize and improve your current website."
      },
      {
        question: "Do you handle domain registration?",
        answer: "Yes, we can help with domain registration and management."
      }
    ],
    caseStudies: [
      {
        title: "Business Website Redesign",
        description: "Modern redesign leading to 200% increase in leads",
        metrics: [
          { label: "Conversion Rate", value: "+150%" },
          { label: "Page Load Speed", value: "-60%" },
          { label: "Mobile Traffic", value: "+125%" }
        ],
        image: "/images/case-studies/website-redesign.jpg"
      }
    ]
  },
  {
    id: 'web-development',
    label: 'Web Development',
    icon: Code,
    hero: {
      title: "Professional Web Development Solutions",
      description: "Build powerful, scalable web applications that drive your business forward",
      image: "/images/services/web-dev-hero.jpg"
    },
    overview: {
      title: "Expert Web Development Services",
      description: "We develop custom web applications and solutions that provide powerful functionality and seamless user experiences.",
      keyPoints: [
        "Custom web applications",
        "Frontend & backend development",
        "API integration",
        "Database architecture"
      ]
    },
    features: [
      {
        title: "Custom Development",
        description: "Tailored web applications and solutions",
        icon: Code
      },
      {
        title: "API Development",
        description: "Custom APIs and integrations",
        icon: Database
      },
      {
        title: "E-commerce Solutions",
        description: "Custom shopping experiences",
        icon: ShoppingBag
      },
      {
        title: "Performance",
        description: "Fast, scalable applications",
        icon: Cpu
      }
    ],
    process: [
      {
        title: "Planning",
        description: "Technical requirements and architecture",
        duration: "2 weeks"
      },
      {
        title: "Development",
        description: "Building core functionality",
        duration: "8-12 weeks"
      },
      {
        title: "Integration",
        description: "Connecting systems and APIs",
        duration: "2-3 weeks"
      },
      {
        title: "Testing",
        description: "Quality assurance and optimization",
        duration: "2 weeks"
      },
      {
        title: "Deployment",
        description: "Launch and monitoring",
        duration: "1 week"
      }
    ],
    technologies: [
      {
        name: "React",
        icon: "/images/tech/react.svg"
      },
      {
        name: "Node.js",
        icon: "/images/tech/nodejs.svg"
      },
      {
        name: "MongoDB",
        icon: "/images/tech/mongodb.svg"
      },
      {
        name: "AWS",
        icon: "/images/tech/aws.svg"
      }
    ],
    faqs: [
      {
        question: "What type of web applications can you build?",
        answer: "We build various applications including e-commerce platforms, customer portals, booking systems, and custom business applications."
      },
      {
        question: "Do you work with specific technologies?",
        answer: "We specialize in modern technologies like React, Node.js, and cloud platforms, but can adapt based on project requirements."
      },
      {
        question: "Can you integrate with existing systems?",
        answer: "Yes, we can integrate with your existing software, APIs, and databases."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer maintenance and support packages to keep your application running smoothly."
      }
    ],
    caseStudies: [
      {
        title: "Enterprise Web Application",
        description: "Custom platform development with complex integrations",
        metrics: [
          { label: "Processing Time", value: "-75%" },
          { label: "User Efficiency", value: "+200%" },
          { label: "Cost Savings", value: "$500K/year" }
        ],
        image: "/images/case-studies/webapp-case.jpg"
      }
    ]
},
  {
    id: 'branding',
    label: 'Branding & Identity',
    icon: Paintbrush,
    hero: {
      title: "Strategic Brand Development",
      description: "Build a memorable brand that connects with your audience",
      image: "/images/services/branding-hero.jpg"
    },
    overview: {
      title: "Creating Distinctive Brand Identities",
      description: "We develop compelling brand experiences that resonate with your audience and drive business growth.",
      keyPoints: [
        "Brand strategy development",
        "Visual identity design",
        "Brand guidelines",
        "Marketing collateral"
      ]
    },
    features: [
      {
        title: "Logo Design",
        description: "Memorable brand symbols",
        icon: Paintbrush
      },
      {
        title: "Brand Strategy",
        description: "Comprehensive positioning",
        icon: Layout
      },
      {
        title: "Style Guides",
        description: "Consistent brand rules",
        icon: MessageSquare
      },
      {
        title: "Marketing Materials",
        description: "Cohesive brand assets",
        icon: Globe
      }
    ],
    process: [
      {
        title: "Research",
        description: "Understanding your market",
        duration: "1-2 weeks"
      },
      {
        title: "Strategy",
        description: "Developing positioning",
        duration: "2 weeks"
      },
      {
        title: "Design",
        description: "Creating visual identity",
        duration: "3-4 weeks"
      },
      {
        title: "Guidelines",
        description: "Documenting standards",
        duration: "2 weeks"
      }
    ],
    technologies: [
      {
        name: "Adobe Creative Suite",
        icon: "/images/tech/adobe.svg"
      },
      {
        name: "Figma",
        icon: "/images/tech/figma.svg"
      },
      {
        name: "Sketch",
        icon: "/images/tech/sketch.svg"
      }
    ],
    faqs: [
      {
        question: "What's included in brand identity?",
        answer: "Logo, color palette, typography, style guide, and basic marketing materials."
      },
      {
        question: "How long does branding take?",
        answer: "A complete brand identity typically takes 6-8 weeks."
      },
      {
        question: "Can you update existing branding?",
        answer: "Yes, we can refresh and modernize your current brand identity."
      }
    ],
    caseStudies: [
      {
        title: "Startup Brand Launch",
        description: "Complete brand identity for tech startup",
        metrics: [
          { label: "Brand Recognition", value: "+200%" },
          { label: "Customer Trust", value: "+85%" },
          { label: "Market Position", value: "Top 3" }
        ],
        image: "/images/case-studies/brand-launch.jpg"
      }
    ]
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: BarChart,
    hero: {
      title: "Results-Driven Digital Marketing",
      description: "Grow your online presence and reach your target audience",
      image: "/images/services/marketing-hero.jpg"
    },
    overview: {
      title: "Strategic Digital Marketing Solutions",
      description: "We create data-driven marketing campaigns that increase visibility and drive conversions.",
      keyPoints: [
        "SEO optimization",
        "Social media management",
        "Email marketing",
        "Content strategy"
      ]
    },
    features: [
      {
        title: "SEO Services",
        description: "Improve search rankings",
        icon: Search
      },
      {
        title: "Social Media",
        description: "Engage your audience",
        icon: Globe
      },
      {
        title: "Email Marketing",
        description: "Convert and retain customers",
        icon: MessageSquare
      },
      {
        title: "Analytics",
        description: "Track performance",
        icon: BarChart
      }
    ],
    process: [
      {
        title: "Audit",
        description: "Analyzing current presence",
        duration: "1 week"
      },
      {
        title: "Strategy",
        description: "Planning campaigns",
        duration: "2 weeks"
      },
      {
        title: "Implementation",
        description: "Executing campaigns",
        duration: "Ongoing"
      },
      {
        title: "Optimization",
        description: "Improving results",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        name: "Google Analytics",
        icon: "/images/tech/google-analytics.svg"
      },
      {
        name: "SEMrush",
        icon: "/images/tech/semrush.svg"
      },
      {
        name: "Mailchimp",
        icon: "/images/tech/mailchimp.svg"
      }
    ],
    faqs: [
      {
        question: "How long until I see results?",
        answer: "Initial results are typically visible within 3-6 months, with SEO taking longer to fully mature."
      },
      {
        question: "What channels do you work with?",
        answer: "We work across all major digital channels including search, social, email, and display advertising."
      },
      {
        question: "Do you provide regular reports?",
        answer: "Yes, we provide detailed monthly reports and performance analytics."
      }
    ],
    caseStudies: [
      {
        title: "E-commerce Marketing Success",
        description: "Comprehensive digital marketing campaign",
        metrics: [
          { label: "Organic Traffic", value: "+200%" },
          { label: "Conversion Rate", value: "+75%" },
          { label: "ROI", value: "350%" }
        ],
        image: "/images/case-studies/marketing-success.jpg"
      }
    ]
  },
  {
    id: 'technical-services',
    label: 'Technical Services',
    icon: Cpu,
    hero: {
      title: "Professional Technical Services",
      description: "Keep your digital presence secure, fast, and reliable with our expert technical solutions",
      image: "/images/services/technical-hero.jpg"
    },
    overview: {
      title: "Comprehensive Technical Support & Management",
      description: "We provide expert technical services to ensure your web presence runs smoothly, securely, and efficiently.",
      keyPoints: [
        "Web hosting & server management",
        "Security implementation",
        "Performance optimization",
        "Regular maintenance & updates"
      ]
    },
    features: [
      {
        title: "Hosting Management",
        description: "Professional web hosting setup and maintenance",
        icon: Database
      },
      {
        title: "Security Services",
        description: "SSL certificates and security measures",
        icon: Shield
      },
      {
        title: "Performance",
        description: "Speed and optimization services",
        icon: Cpu
      },
      {
        title: "Maintenance",
        description: "Regular updates and backups",
        icon: Code
      }
    ],
    process: [
      {
        title: "Audit",
        description: "Technical environment assessment",
        duration: "1 week"
      },
      {
        title: "Planning",
        description: "Service and solution planning",
        duration: "1 week"
      },
      {
        title: "Implementation",
        description: "Service setup and configuration",
        duration: "1-2 weeks"
      },
      {
        title: "Monitoring",
        description: "Ongoing support and maintenance",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        name: "AWS",
        icon: "/images/tech/aws.svg"
      },
      {
        name: "CloudFlare",
        icon: "/images/tech/cloudflare.svg"
      },
      {
        name: "cPanel",
        icon: "/images/tech/cpanel.svg"
      },
      {
        name: "Linux",
        icon: "/images/tech/linux.svg"
      }
    ],
    faqs: [
      {
        question: "What hosting services do you provide?",
        answer: "We offer managed hosting solutions including server setup, domain management, and regular maintenance."
      },
      {
        question: "How do you handle security?",
        answer: "We implement SSL certificates, firewalls, regular security updates, and monitoring to protect your website."
      },
      {
        question: "Do you provide backup services?",
        answer: "Yes, we perform regular backups and maintain secure copies of your website and database."
      },
      {
        question: "What's included in maintenance?",
        answer: "Our maintenance includes updates, security patches, performance monitoring, and technical support."
      }
    ],
    caseStudies: [
      {
        title: "Enterprise Infrastructure Upgrade",
        description: "Complete technical overhaul improving security and performance",
        metrics: [
          { label: "Load Time", value: "-70%" },
          { label: "Uptime", value: "99.9%" },
          { label: "Security Score", value: "+85%" }
        ],
        image: "/images/case-studies/technical-case.jpg"
      }
    ]
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingBag,
    hero: {
      title: "Custom E-Commerce Solutions",
      description: "Build powerful online stores that drive sales",
      image: "/images/services/ecommerce-hero.jpg"
    },
    overview: {
      title: "Complete E-Commerce Development",
      description: "We create custom online shopping experiences that maximize conversions and streamline operations.",
      keyPoints: [
        "Custom store development",
        "Payment integration",
        "Inventory management",
        "Shopping experience optimization"
      ]
    },
    features: [
      {
        title: "Custom Stores",
        description: "Tailored to your needs",
        icon: ShoppingBag
      },
      {
        title: "Secure Payments",
        description: "Multiple payment options",
        icon: Shield
      },
      {
        title: "Inventory System",
        description: "Stock management",
        icon: Database
      },
      {
        title: "Analytics",
        description: "Sales tracking",
        icon: BarChart
      }
    ],
    process: [
      {
        title: "Planning",
        description: "Store architecture",
        duration: "2 weeks"
      },
      {
        title: "Design",
        description: "Store design",
        duration: "3 weeks"
      },
      {
        title: "Development",
        description: "Store building",
        duration: "6-8 weeks"
      },
      {
        title: "Testing",
        description: "Quality assurance",
        duration: "2 weeks"
      }
    ],
    technologies: [
      {
        name: "Shopify",
        icon: "/images/tech/shopify.svg"
      },
      {
        name: "WooCommerce",
        icon: "/images/tech/woocommerce.svg"
      },
      {
        name: "Stripe",
        icon: "/images/tech/stripe.svg"
      }
    ],
    faqs: [
      {
        question: "Which platform is best for me?",
        answer: "We'll recommend the best platform based on your specific needs, scale, and budget."
      },
      {
        question: "Can you handle migrations?",
        answer: "Yes, we can migrate your existing store to a new platform while preserving all data."
      },
      {
        question: "What payment gateways do you support?",
        answer: "We integrate with all major payment providers including Stripe, PayPal, and Square."
      }
    ],
    caseStudies: [
      {
        title: "Fashion Store Launch",
        description: "Custom e-commerce solution",
        metrics: [
          { label: "Sales Growth", value: "+300%" },
          { label: "Cart Completion", value: "75%" },
          { label: "Mobile Orders", value: "65%" }
        ],
        image: "/images/case-studies/ecommerce-launch.jpg"
      }
    ]
  },
  {
    id: 'content-creation',
    label: 'Content Creation',
    icon: MessageSquare,
    hero: {
      title: "Strategic Content Creation",
      description: "Engage your audience with compelling content",
      image: "/images/services/content-hero.jpg"
    },
    overview: {
      title: "Professional Content Development",
      description: "We create engaging content that tells your story and connects with your audience.",
      keyPoints: [
        "Website copywriting",
        "Blog content",
        "Visual content",
        "Content strategy"
      ]
    },
    features: [
      {
        title: "Web Copy",
        description: "Engaging website content",
        icon: Layout
      },
      {
        title: "Blog Posts",
        description: "Regular articles",
        icon: MessageSquare
      },
      {
        title: "Visual Content",
        description: "Graphics and images",
        icon: Paintbrush
      },
      {
        title: "Strategy",
        description: "Content planning",
        icon: Search
      }
    ],
    process: [
      {
        title: "Research",
        description: "Topic research",
        duration: "1 week"
      },
      {
        title: "Planning",
        description: "Content calendar",
        duration: "1 week"
      },
      {
        title: "Creation",
        description: "Content development",
        duration: "Ongoing"
      },
      {
        title: "Review",
        description: "Quality check",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "/images/tech/wordpress.svg"
      },
      {
        name: "Canva",
        icon: "/images/tech/canva.svg"
      },
      {
        name: "Grammarly",
        icon: "/images/tech/grammarly.svg"
      }
    ],
    faqs: [
      {
        question: "How often is content delivered?",
        answer: "We create custom content schedules based on your needs, typically weekly or monthly."
      },
      {
        question: "What types of content do you create?",
        answer: "We create website copy, blog posts, articles, social media content, and marketing materials."
      },
      {
        question: "Do you handle distribution?",
        answer: "Yes, we can help distribute content across your website, social media, and email channels."
      }
    ],
    caseStudies: [
      {
        title: "Content Marketing Success",
        description: "Comprehensive content strategy",
        metrics: [
          { label: "Organic Traffic", value: "+180%" },
          { label: "Engagement", value: "+95%" },
          { label: "Lead Generation", value: "+150%" }
        ],
        image: "/images/case-studies/content-success.jpg"
      }
    ]
  }
];