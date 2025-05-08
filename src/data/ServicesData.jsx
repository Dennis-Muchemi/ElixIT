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
  MessageSquare,
  Wrench,
  RefreshCw
} from 'lucide-react';

export const heroContent = {
  title: "Transform Your Digital Presence with Our",
  highlightedText: "Web Development Services",
  description: "Custom-coded solutions and WordPress expertise to help your business succeed online.",
  buttonText: "Explore Our Services"
};

export const serviceCategories = [
  {
    id: 'custom-web-development',
    label: 'Website Development',
    icon: Code,
    hero: {
      title: "Custom",
      description: "Hand-coded websites built from scratch for unique functionality and performance",
      image: "/Services/custom_website_1.jpg"
    },
    overview: {
      title: "Custom-Coded Website Solutions",
      description: "We build websites from scratch using clean, efficient code to deliver exactly what your business needs.",
      keyPoints: [
        "Fully customized designs and features",
        "Clean, efficient coding practices",
        "Optimal performance and speed",
        "Unique functionality tailored to your needs"
      ]
    },
    features: [
      {
        title: "Custom Functionality",
        description: "Tailored features specific to your business needs",
        icon: Code
      },
      {
        title: "Performance Optimization",
        description: "Fast-loading, efficient websites",
        icon: Cpu
      },
      {
        title: "Responsive Design",
        description: "Perfect on all devices",
        icon: Smartphone
      },
      {
        title: "Technical Expertise",
        description: "Professional HTML, CSS, JavaScript development",
        icon: Database
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your requirements",
        duration: "1 day"
      },
      {
        title: "Planning",
        description: "Architecture and technical planning",
        duration: "1 day"
      },
      {
        title: "Design",
        description: "Creating visual mockups",
        duration: "3-4 days"
      },
      {
        title: "Development",
        description: "Hand-coding your website",
        duration: "4-6 days"
      },
      {
        title: "Testing",
        description: "Quality assurance across devices",
        duration: "1 day"
      },
      {
        title: "Launch",
        description: "Deployment and going live",
        duration: "1 day"
      }
    ],
    technologies: [
      {
        name: "HTML5",
        icon: "/common/html_2.jpg"
      },
      {
        name: "CSS3",
        icon: "/common/css_2.png"
      },
      {
        name: "JavaScript",
        icon: "/common/javascript_1.png"
      },
      {
        name: "React",
        icon: "/common/react_3.png"
      }
    ],
    faqs: [
      {
        question: "Why choose custom coding over website builders?",
        answer: "Custom coding provides full control over design, functionality, and performance. It allows for unique features that template-based solutions can't deliver."
      },
      {
        question: "How long does a custom website take to build?",
        answer: "A typical custom website takes 10 - 14 days from start to finish, and sometimes weeks depending on complexity."
      },
      {
        question: "Is custom coding more expensive than using builders?",
        answer: "Initially yes, but custom websites often provide better long-term value through better performance, SEO advantages, and the ability to expand functionality exactly as needed."
      },
      {
        question: "Will I be able to update my custom website?",
        answer: "We can build custom admin interfaces or integrate content management systems to allow you to make updates easily."
      }
    ],
    caseStudies: [
      {
        title: "E-Commerce Store Rebuild",
        description: "Custom-coded solution replacing template site",
        metrics: [
          { label: "Page Load Speed", value: "-70%" },
          { label: "Conversion Rate", value: "+45%" },
          { label: "Mobile Sales", value: "+125%" }
        ],
        image: "/images/case-studies/custom-code-case.jpg"
      }
    ]
  },
  {
    id: 'wordpress-development',
    label: 'WordPress Development',
    icon: Layout,
    hero: {
      title: "Professional",
      description: "Custom WordPress websites with powerful functionality and easy content management",
      image: "/Services/wordpress_3.png"
    },
    overview: {
      title: "Expert WordPress Development Solutions",
      description: "We create custom WordPress websites that combine beautiful design, powerful functionality, and easy content management.",
      keyPoints: [
        "Custom theme development",
        "Plugin integration and configuration",
        "E-commerce solutions with WooCommerce",
        "Performance optimization"
      ]
    },
    features: [
      {
        title: "Custom Themes",
        description: "Unique WordPress designs tailored to your brand",
        icon: Paintbrush
      },
      {
        title: "Plugin Integration",
        description: "Extending functionality with the right plugins",
        icon: Database
      },
      {
        title: "WooCommerce",
        description: "Professional e-commerce solutions",
        icon: ShoppingBag
      },
      {
        title: "Easy Management",
        description: "User-friendly content updates",
        icon: Layout
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Understanding your needs",
        duration: "1 day"
      },
      {
        title: "Design",
        description: "Creating your WordPress theme",
        duration: "2-3 days"
      },
      {
        title: "Development",
        description: "Building your custom WordPress site",
        duration: "3-5 days"
      },
      {
        title: "Plugin Setup",
        description: "Configuring functionality",
        duration: "1-2 days"
      },
      {
        title: "Testing",
        description: "Quality assurance",
        duration: "1 day"
      },
      {
        title: "Launch & Training",
        description: "Going live and teaching you to manage content",
        duration: "1 day"
      }
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "/common/wordpress.jpg"
      },
      {
        name: "WooCommerce",
        icon: "/common/woocommerce.jpg"
      },
      {
        name: "PHP",
        icon: "/common/php.jpg"
      },
      {
        name: "MySQL",
        icon: "/common/mysql.png"
      }
    ],
    faqs: [
      {
        question: "Can you customize existing WordPress themes?",
        answer: "Yes, we can customize existing themes or build completely custom themes from scratch."
      },
      {
        question: "Do you provide WordPress maintenance?",
        answer: "Yes, we offer regular updates, security monitoring, and ongoing support for WordPress websites."
      },
      {
        question: "Can you migrate my existing site to WordPress?",
        answer: "Yes, we can migrate your content from another platform to WordPress while maintaining SEO value."
      },
      {
        question: "Is WordPress secure?",
        answer: "With proper setup and maintenance, WordPress is very secure. We implement security best practices for all sites."
      }
    ],
    caseStudies: [
      {
        title: "Business WordPress Platform",
        description: "Custom WordPress implementation with advanced functionality",
        metrics: [
          { label: "Content Updates", value: "10x faster" },
          { label: "Organic Traffic", value: "+85%" },
          { label: "Conversion Rate", value: "+45%" }
        ],
        image: "/images/case-studies/wordpress-case.jpg"
      }
    ]
  },
  {
    id: 'website-redesign',
    label: 'Redesign Services',
    icon: RefreshCw,
    hero: {
      title: "Website",
      description: "Transform your outdated website into a modern, high-performing digital asset",
      image: "/Services/website_redesign.jpg"
    },
    overview: {
      title: "Modernizing Outdated Websites",
      description: "We transform existing websites into modern, effective digital platforms that drive results and improve user experience.",
      keyPoints: [
        "Modern design implementation",
        "User experience improvements",
        "Mobile responsiveness upgrades",
        "Performance optimization"
      ]
    },
    features: [
      {
        title: "Modern Design",
        description: "Contemporary aesthetics and interfaces",
        icon: Paintbrush
      },
      {
        title: "Mobile Optimization",
        description: "Fully responsive on all devices",
        icon: Smartphone
      },
      {
        title: "UX Improvements",
        description: "Enhanced navigation and usability",
        icon: Layout
      },
      {
        title: "Performance Boost",
        description: "Faster loading and better performance",
        icon: Cpu
      }
    ],
    process: [
      {
        title: "Site Audit",
        description: "Evaluating current website",
        duration: "1 day"
      },
      {
        title: "Planning",
        description: "Mapping improvements",
        duration: "1-2 days"
      },
      {
        title: "Design",
        description: "Creating new visual direction",
        duration: "3 - 4 days"
      },
      {
        title: "Development",
        description: "Building the redesigned site",
        duration: "5 - 6 days"
      },
      {
        title: "Content Migration",
        description: "Moving and updating content",
        duration: "1 week"
      },
      {
        title: "Launch",
        description: "Going live with the new site",
        duration: "1 - 2 days"
      }
    ],
    technologies: [
      {
        name: "HTML5",
        icon: "/common/html_2.jpg"
      },
      {
        name: "CSS3",
        icon: "/common/css_1.png"
      },
      {
        name: "WordPress",
        icon: "/common/wordpress_logo.png"
      },
      {
        name: "JavaScript",
        icon: "/common/javascript_1.png"
      }
    ],
    faqs: [
      {
        question: "How do you preserve our SEO during redesign?",
        answer: "We implement proper redirects, maintain key SEO elements, and ensure all valuable content is preserved or enhanced."
      },
      {
        question: "Can you keep our site running during redesign?",
        answer: "Yes, we develop your new site on a staging server while your current site remains live until launch."
      },
      {
        question: "Will we lose content during redesign?",
        answer: "No, we carefully migrate all valuable content from your existing site to the redesigned version."
      },
      {
        question: "How long does a website redesign take?",
        answer: "Most redesigns take 4-8 weeks, depending on the size and complexity of your current site."
      }
    ],
    caseStudies: [
      {
        title: "Corporate Site Transformation",
        description: "Complete redesign with modern UX principles",
        metrics: [
          { label: "Bounce Rate", value: "-60%" },
          { label: "Mobile Traffic", value: "+130%" },
          { label: "Lead Generation", value: "+85%" }
        ],
        image: "/images/case-studies/redesign-case.jpg"
      }
    ]
  },
  {
    id: 'seo-optimization',
    label: 'SEO Optimization',
    icon: Search,
    hero: {
      title: "Website",
      description: "Improve your search rankings and drive more targeted traffic to your website",
      image: "/Services/SEO_3.webp"
    },
    overview: {
      title: "Comprehensive SEO Solutions",
      description: "We optimize your website's technical foundation, content, and authority to improve search engine visibility and rankings.",
      keyPoints: [
        "Technical SEO improvements",
        "Keyword optimization",
        "Content strategy",
        "Performance enhancements"
      ]
    },
    features: [
      {
        title: "Technical SEO",
        description: "Site structure and backend optimization",
        icon: Code
      },
      {
        title: "On-Page SEO",
        description: "Content and keyword optimization",
        icon: Layout
      },
      {
        title: "Performance Optimization",
        description: "Speed and mobile improvements",
        icon: Cpu
      },
      {
        title: "Analytics & Reporting",
        description: "Tracking progress and results",
        icon: BarChart
      }
    ],
    process: [
      {
        title: "SEO Audit",
        description: "Comprehensive site evaluation",
        duration: "1-2 days"
      },
      {
        title: "Strategy",
        description: "Custom SEO plan development",
        duration: "1 day"
      },
      {
        title: "Implementation",
        description: "Applying technical improvements",
        duration: "2-4 days"
      },
      {
        title: "Content Optimization",
        description: "Enhancing content for SEO",
        duration: "Ongoing"
      },
      {
        title: "Monitoring",
        description: "Tracking and adjusting strategy",
        duration: "Ongoing"
      }
    ],
    technologies: [
      {
        name: "Google Analytics",
        icon: "/common/google_analytics.jpg"
      },
      {
        name: "SEMrush",
        icon: "/common/semrush.jpg"
      },
      {
        name: "Ahrefs",
        icon: "/common/ahrefs.jpg"
      },
      {
        name: "Google Search Console",
        icon: "/common/google_search_console.png"
      }
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. Initial improvements can be seen in 2-3 months, with significant results typically visible in 4-6 months."
      },
      {
        question: "What types of SEO do you provide?",
        answer: "We provide technical SEO, on-page optimization, content strategy, and general website performance improvements."
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer: "No reputable SEO company can guarantee rankings. We implement best practices that consistently improve rankings for our clients."
      },
      {
        question: "Do you provide SEO reports?",
        answer: "Yes, we provide detailed monthly reports showing progress, rankings, traffic, and recommendations."
      }
    ],
    caseStudies: [
      {
        title: "Local Business SEO Success",
        description: "Comprehensive SEO strategy for small business",
        metrics: [
          { label: "Organic Traffic", value: "+210%" },
          { label: "First-Page Keywords", value: "+450%" },
          { label: "Lead Generation", value: "+85%" }
        ],
        image: "/Services/SEO_3.webp"
      }
    ]
  },
  {
    id: 'website-maintenance',
    label: 'Website Maintenance',
    icon: Wrench,
    hero: {
      title: "Professional",
      description: "Keep your website secure, up-to-date, and performing at its best",
      image: "/Services/website_maintenance.jpeg"
    },
    overview: {
      title: "Comprehensive Website Care",
      description: "We provide ongoing maintenance and support to ensure your website remains secure, up-to-date, and performs optimally.",
      keyPoints: [
        "Regular updates and security patches",
        "Performance monitoring and optimization",
        "Content updates and management",
        "Technical support and troubleshooting"
      ]
    },
    features: [
      {
        title: "Security Updates",
        description: "Regular security patches and monitoring",
        icon: Shield
      },
      {
        title: "Performance Tuning",
        description: "Speed and functionality optimization",
        icon: Cpu
      },
      {
        title: "Content Management",
        description: "Regular content updates and management",
        icon: Layout
      },
      {
        title: "Backup Services",
        description: "Regular site and database backups",
        icon: Database
      }
    ],
    process: [
      {
        title: "Initial Audit",
        description: "Website health assessment",
        duration: "1 -3 days"
      },
      {
        title: "Setup",
        description: "Establishing monitoring and backup systems",
        duration: "1 week"
      },
      {
        title: "Regular Maintenance",
        description: "Scheduled updates and checks",
        duration: "Monthly"
      },
      {
        title: "Support",
        description: "Ongoing technical assistance",
        duration: "As needed"
      }
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "/common/wordpress_logo.png"
      },
      {
        name: "CloudFlare",
        icon: "/common/cloudflare.jpg"
      },
      {
        name: "Google Analytics",
        icon: "/common/google_analytics.jpg"
      },
      {
        name: "Uptime Robot",
        icon: "/common/uptime_robot.png"
      }
    ],
    faqs: [
      {
        question: "What's included in website maintenance?",
        answer: "Our maintenance includes software updates, security monitoring, regular backups, performance optimization, and technical support."
      },
      {
        question: "How often do you perform updates?",
        answer: "We perform security updates immediately when available, and other updates on a scheduled monthly basis."
      },
      {
        question: "Do you monitor website uptime?",
        answer: "Yes, we use automated monitoring to alert us of any downtime so we can address issues promptly."
      },
      {
        question: "Can you help with content updates?",
        answer: "Yes, our maintenance plans include a set number of content updates each month, with additional updates available as needed."
      }
    ],
    caseStudies: [
      {
        title: "E-Commerce Maintenance Success",
        description: "Ongoing maintenance preventing issues and optimizing performance",
        metrics: [
          { label: "Uptime", value: "99.9%" },
          { label: "Page Speed", value: "+45%" },
          { label: "Security Incidents", value: "0" }
        ],
        image: "/images/case-studies/maintenance-case.jpg"
      }
    ]
  },
  {
    id: 'content-migration',
    label: 'Content Migration',
    icon: Database,
    hero: {
      title: "Professional",
      description: "Seamlessly transfer your website content to a new platform or redesigned site",
      image: "/Services/data-migration.jpg"
    },
    overview: {
      title: "Expert Content Migration Services",
      description: "We handle the complex process of transferring your valuable content to new platforms while preserving structure, formatting, and SEO value.",
      keyPoints: [
        "Complete content transfer",
        "Structure and formatting preservation",
        "SEO value retention",
        "Proper redirects implementation"
      ]
    },
    features: [
      {
        title: "Data Extraction",
        description: "Comprehensive content collection",
        icon: Database
      },
      {
        title: "Content Mapping",
        description: "Organizing content for new structure",
        icon: Layout
      },
      {
        title: "SEO Preservation",
        description: "Maintaining search engine rankings",
        icon: Search
      },
      {
        title: "Redirect Setup",
        description: "Proper URL redirection",
        icon: RefreshCw
      }
    ],
    process: [
      {
        title: "Content Audit",
        description: "Analyzing existing content",
        duration: "1 week"
      },
      {
        title: "Planning",
        description: "Migration strategy development",
        duration: "1 -3 days"
      },
      {
        title: "Extraction",
        description: "Content collection and organization",
        duration: "1 week"
      },
      {
        title: "Migration",
        description: "Transferring to new platform",
        duration: "1 week"
      },
      {
        title: "QA Testing",
        description: "Verification and quality assurance",
        duration: "1 week"
      }
    ],
    technologies: [
      {
        name: "WordPress",
        icon: "/common/wordpress_logo.png"
      },
      {
        name: "MySQL",
        icon: "/common/mysql.png"
      },
      {
        name: "CSV Tools",
        icon: "/common/csv.jpg"
      },
      {
        name: "Custom Scripts",
        icon: "/common/Custom_Script.png"
      }
    ],
    faqs: [
      {
        question: "Can you migrate from any platform?",
        answer: "Yes, we can migrate content from virtually any CMS or website platform to your new solution."
      },
      {
        question: "Will migration affect my SEO?",
        answer: "With proper implementation, migration should maintain or improve SEO. We use proper redirects and preserve content structure to minimize any negative impact."
      },
      {
        question: "How long does content migration take?",
        answer: "Migration time depends on the amount of content, but typically takes 2-4 weeks for medium-sized websites."
      },
      {
        question: "Will all my content be preserved?",
        answer: "Yes, we ensure all your valuable content is properly transferred, including images, videos, downloads, and specialized content types."
      }
    ],
    caseStudies: [
      {
        title: "Enterprise Platform Migration",
        description: "Large-scale content migration to new CMS",
        metrics: [
          { label: "Content Preserved", value: "100%" },
          { label: "SEO Rankings", value: "Maintained" },
          { label: "Migration Time", value: "50% faster than estimated" }
        ],
        image: "/images/case-studies/migration-case.jpg"
      }
    ]
  }
];