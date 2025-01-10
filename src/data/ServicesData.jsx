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
    highlightedText: "Expert Services",
    description: "We combine creativity, technology, and strategy to help businesses thrive in the digital age.",
    buttonText: "Explore Our Services"
  };
  
  export const serviceCategories = [
    {
      id: 'web-development',
      label: 'Web Development',
      icon: Code,
      hero: {
        title: "Custom Web Development Solutions",
        description: "Create powerful, scalable web applications that drive your business forward",
        image: "/images/services/web-dev-hero.jpg"
      },
      overview: {
        title: "Transforming Ideas into Powerful Web Solutions",
        description: "Our web development service delivers custom, high-performance websites and applications that engage users and drive business growth.",
        keyPoints: [
          "Cutting-edge technology stack",
          "Responsive design implementation",
          "Performance optimization",
          "Scalable architecture"
        ]
      },
      features: [
        {
          title: "Custom Web Applications",
          description: "Tailored solutions that perfectly match your business needs",
          icon: Globe
        },
        {
          title: "Progressive Web Apps",
          description: "Modern web apps with native-like functionality",
          icon: Layout
        },
        {
          title: "E-commerce Integration",
          description: "Secure and scalable online shopping solutions",
          icon: ShoppingBag
        },
        {
          title: "CMS Development",
          description: "Easy-to-manage content systems",
          icon: Database
        }
      ],
      process: [
        {
          title: "Discovery",
          description: "Understanding your requirements and objectives",
          duration: "1-2 weeks"
        },
        {
          title: "Planning & Design",
          description: "Creating detailed specifications and wireframes",
          duration: "2-3 weeks"
        },
        {
          title: "Development",
          description: "Building your solution with agile methodology",
          duration: "8-12 weeks"
        },
        {
          title: "Testing",
          description: "Comprehensive quality assurance",
          duration: "2-3 weeks"
        },
        {
          title: "Deployment",
          description: "Launch and initial monitoring",
          duration: "1 week"
        }
      ],
      technologies: [
        {
          name: "React",
          icon: "/images/tech/react.svg"
        },
        {
          name: "Next.js",
          icon: "/images/tech/nextjs.svg"
        },
        {
          name: "Node.js",
          icon: "/images/tech/nodejs.svg"
        },
        // Add more technologies
      ],
      faqs: [
        {
          question: "How long does it take to build a custom website?",
          answer: "The timeline varies based on complexity, but typically ranges from 8-16 weeks for a complete custom solution."
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer: "Yes, we offer flexible maintenance packages to ensure your website remains secure and up-to-date."
        },
        {
          question: "Can you help migrate an existing website?",
          answer: "Absolutely! We have extensive experience in website migrations and can ensure a smooth transition."
        },
        {
          question: "What technologies do you use?",
          answer: "We use modern technologies like React, Next.js, Node.js, and other cutting-edge tools depending on project requirements."
        }
      ],
      caseStudies: [
        {
          title: "E-commerce Platform Redesign",
          description: "Complete rebuild of an online store resulting in 150% increase in sales",
          metrics: [
            { label: "Conversion Rate", value: "+85%" },
            { label: "Page Load Speed", value: "-60%" },
            { label: "Mobile Traffic", value: "+125%" }
          ],
          image: "/images/case-studies/ecommerce-redesign.jpg"
        }
        // Add more case studies
      ]
    },
    {
        id: 'ui-ux-design',
        label: 'UI/UX Design',
        icon: Paintbrush,
        hero: {
          title: "User-Centered Design Solutions",
          description: "Create intuitive, engaging user experiences that delight your customers",
          image: "/images/services/ui-ux-hero.jpg"
        },
        overview: {
          title: "Design That Drives Engagement",
          description: "Our design process focuses on creating intuitive, beautiful interfaces that enhance user experience and drive business results.",
          keyPoints: [
            "User-centered design approach",
            "Interactive prototyping",
            "Accessibility compliance",
            "Brand consistency"
          ]
        },
        features: [
          {
            title: "User Interface Design",
            description: "Beautiful, intuitive interfaces that users love",
            icon: Layout
          },
          {
            title: "User Experience Design",
            description: "Seamless interactions and user flows",
            icon: MessageSquare
          },
          {
            title: "Design Systems",
            description: "Scalable and consistent design frameworks",
            icon: Paintbrush
          },
          {
            title: "Interactive Prototyping",
            description: "Test and validate designs before development",
            icon: Smartphone
          }
        ],
        process: [
          {
            title: "Research",
            description: "Understanding users and business goals",
            duration: "1-2 weeks"
          },
          {
            title: "Wireframing",
            description: "Creating structural design layouts",
            duration: "1-2 weeks"
          },
          {
            title: "UI Design",
            description: "Detailed interface design and branding",
            duration: "2-3 weeks"
          },
          {
            title: "Prototyping",
            description: "Interactive prototype development",
            duration: "1-2 weeks"
          },
          {
            title: "User Testing",
            description: "Validation and refinement",
            duration: "1 week"
          }
        ],
        technologies: [
          {
            name: "Figma",
            icon: "/images/tech/figma.svg"
          },
          {
            name: "Adobe XD",
            icon: "/images/tech/adobe-xd.svg"
          },
          {
            name: "Sketch",
            icon: "/images/tech/sketch.svg"
          }
        ],
        faqs: [
          {
            question: "What's your design process like?",
            answer: "Our design process is iterative and collaborative, involving research, wireframing, design, prototyping, and testing phases."
          },
          {
            question: "Do you provide design systems?",
            answer: "Yes, we create comprehensive design systems that ensure consistency across all your digital products."
          },
          {
            question: "How do you handle design revisions?",
            answer: "We include multiple revision rounds in our process and work closely with you until the design meets your requirements."
          },
          {
            question: "Can you work with existing brand guidelines?",
            answer: "Absolutely! We can work with your existing brand guidelines or help develop new ones."
          }
        ],
        caseStudies: [
          {
            title: "FinTech App Redesign",
            description: "Complete UX overhaul leading to 200% increase in user engagement",
            metrics: [
              { label: "User Satisfaction", value: "+92%" },
              { label: "Task Completion", value: "+75%" },
              { label: "User Retention", value: "+120%" }
            ],
            image: "/images/case-studies/fintech-redesign.jpg"
          }
        ]
      },
      {
            id: 'ecommerce',
            label: 'E-Commerce',
            icon: ShoppingBag,
            hero: {
            title: "E-Commerce Excellence",
            description: "Build powerful online stores that drive sales and delight customers",
            image: "/images/services/ecommerce-hero.jpg"
            },
            overview: {
            title: "Complete E-Commerce Solutions",
            description: "We create custom e-commerce experiences that maximize conversions and streamline operations.",
            keyPoints: [
                "Custom shopping experiences",
                "Secure payment integration",
                "Inventory management",
                "Analytics and reporting"
            ]
            },
            features: [
            {
                title: "Custom E-Commerce",
                description: "Tailored online shopping solutions",
                icon: ShoppingBag
            },
            {
                title: "Payment Integration",
                description: "Secure, multi-payment gateway setup",
                icon: Shield
            },
            {
                title: "Inventory Management",
                description: "Automated stock control systems",
                icon: Database
            },
            {
                title: "Analytics Dashboard",
                description: "Comprehensive sales reporting",
                icon: BarChart
            }
            ],
            process: [
            {
                title: "Analysis",
                description: "Understanding your business model",
                duration: "1 week"
            },
            {
                title: "Architecture",
                description: "Platform and feature planning",
                duration: "2 weeks"
            },
            {
                title: "Development",
                description: "Store setup and customization",
                duration: "6-8 weeks"
            },
            {
                title: "Integration",
                description: "Payment and shipping setup",
                duration: "2 weeks"
            },
            {
                title: "Launch",
                description: "Testing and deployment",
                duration: "1 week"
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
                question: "Which e-commerce platform do you recommend?",
                answer: "We recommend platforms based on your specific needs, scale, and budget. We work with Shopify, WooCommerce, and custom solutions."
            },
            {
                question: "Can you migrate my existing store?",
                answer: "Yes, we provide full migration services including products, customers, and order history."
            },
            {
                question: "Do you handle payment integration?",
                answer: "Yes, we integrate multiple payment gateways and ensure PCI compliance."
            },
            {
                question: "What about shipping integration?",
                answer: "We integrate with major shipping providers and can set up custom shipping rules."
            }
            ],
            caseStudies: [
            {
                title: "Fashion Retailer Launch",
                description: "New e-commerce store with 300% ROI in first year",
                metrics: [
                { label: "Conversion Rate", value: "4.5%" },
                { label: "Average Order Value", value: "+45%" },
                { label: "Monthly Revenue", value: "+250%" }
                ],
                image: "/images/case-studies/fashion-ecommerce.jpg"
            }
            ]
        },
        {
            id: 'backend-services',
            label: 'Backend Services',
            icon: Database,
            hero: {
              title: "Robust Backend Solutions",
              description: "Build scalable, secure, and high-performance backend systems",
              image: "/images/services/backend-hero.jpg"
            },
            overview: {
              title: "Enterprise-Grade Backend Development",
              description: "We create powerful backend systems that handle complex business logic, ensure data security, and enable seamless scaling.",
              keyPoints: [
                "Scalable architecture design",
                "API development",
                "Database optimization",
                "Cloud infrastructure"
              ]
            },
            features: [
              {
                title: "API Development",
                description: "RESTful and GraphQL API solutions",
                icon: Code
              },
              {
                title: "Database Design",
                description: "Optimized data architecture",
                icon: Database
              },
              {
                title: "Cloud Services",
                description: "AWS, Azure, and GCP solutions",
                icon: Globe
              },
              {
                title: "Security",
                description: "Enterprise-grade security measures",
                icon: Shield
              }
            ],
            process: [
              {
                title: "Architecture Planning",
                description: "System design and technology selection",
                duration: "2 weeks"
              },
              {
                title: "Database Design",
                description: "Data modeling and optimization",
                duration: "2-3 weeks"
              },
              {
                title: "Development",
                description: "API and service implementation",
                duration: "8-12 weeks"
              },
              {
                title: "Security Review",
                description: "Security testing and hardening",
                duration: "2 weeks"
              },
              {
                title: "Deployment",
                description: "Cloud deployment and monitoring setup",
                duration: "1-2 weeks"
              }
            ],
            technologies: [
              {
                name: "Node.js",
                icon: "/images/tech/nodejs.svg"
              },
              {
                name: "PostgreSQL",
                icon: "/images/tech/postgresql.svg"
              },
              {
                name: "AWS",
                icon: "/images/tech/aws.svg"
              },
              {
                name: "Docker",
                icon: "/images/tech/docker.svg"
              }
            ],
            faqs: [
              {
                question: "How do you ensure scalability?",
                answer: "We design systems with microservices architecture, implement caching strategies, and use cloud auto-scaling capabilities."
              },
              {
                question: "What about data security?",
                answer: "We implement industry-standard security practices, encryption, and regular security audits."
              },
              {
                question: "Can you handle high-traffic applications?",
                answer: "Yes, we design systems to handle millions of requests with proper load balancing and optimization."
              },
              {
                question: "Do you provide documentation?",
                answer: "Yes, we provide comprehensive API documentation, system architecture diagrams, and deployment guides."
              }
            ],
            caseStudies: [
              {
                title: "SaaS Platform Scale-up",
                description: "Rebuilt backend to handle 10x user growth",
                metrics: [
                  { label: "Response Time", value: "-70%" },
                  { label: "Server Costs", value: "-45%" },
                  { label: "API Uptime", value: "99.99%" }
                ],
                image: "/images/case-studies/backend-scale.jpg"
              }
            ]
          },
          {
            id: 'analytics',
            label: 'Analytics',
            icon: BarChart,
            hero: {
              title: "Data-Driven Insights",
              description: "Transform your data into actionable business intelligence",
              image: "/images/services/analytics-hero.jpg"
            },
            overview: {
              title: "Advanced Analytics Solutions",
              description: "We help businesses make data-driven decisions through comprehensive analytics implementation and reporting.",
              keyPoints: [
                "Custom analytics setup",
                "Data visualization",
                "Performance tracking",
                "Conversion optimization"
              ]
            },
            features: [
              {
                title: "Custom Dashboards",
                description: "Real-time performance monitoring",
                icon: BarChart
              },
              {
                title: "User Tracking",
                description: "Detailed user behavior analysis",
                icon: Search
              },
              {
                title: "Conversion Optimization",
                description: "Data-driven CRO strategies",
                icon: Layout
              },
              {
                title: "Performance Metrics",
                description: "Comprehensive KPI tracking",
                icon: Cpu
              }
            ],
            process: [
              {
                title: "Requirements Analysis",
                description: "Understanding your data needs",
                duration: "1 week"
              },
              {
                title: "Setup Planning",
                description: "Analytics architecture design",
                duration: "1-2 weeks"
              },
              {
                title: "Implementation",
                description: "Tracking setup and testing",
                duration: "2-3 weeks"
              },
              {
                title: "Dashboard Creation",
                description: "Custom report development",
                duration: "1-2 weeks"
              },
              {
                title: "Training",
                description: "Team training and documentation",
                duration: "1 week"
              }
            ],
            technologies: [
              {
                name: "Google Analytics",
                icon: "/images/tech/google-analytics.svg"
              },
              {
                name: "Mixpanel",
                icon: "/images/tech/mixpanel.svg"
              },
              {
                name: "Tableau",
                icon: "/images/tech/tableau.svg"
              },
              {
                name: "Power BI",
                icon: "/images/tech/power-bi.svg"
              }
            ],
            faqs: [
              {
                question: "What analytics tools do you work with?",
                answer: "We work with various tools including Google Analytics, Mixpanel, Tableau, and can recommend the best solution for your needs."
              },
              {
                question: "Can you help with existing analytics setup?",
                answer: "Yes, we can audit and optimize your current analytics implementation."
              },
              {
                question: "Do you provide regular reporting?",
                answer: "Yes, we can set up automated reports and provide regular insights analysis."
              },
              {
                question: "How do you handle data privacy?",
                answer: "We ensure all analytics implementations comply with GDPR and other privacy regulations."
              }
            ],
            caseStudies: [
              {
                title: "E-commerce Analytics Overhaul",
                description: "Implemented advanced analytics leading to 40% revenue increase",
                metrics: [
                  { label: "Revenue Growth", value: "+40%" },
                  { label: "Customer Insights", value: "+85%" },
                  { label: "Marketing ROI", value: "+60%" }
                ],
                image: "/images/case-studies/analytics-case.jpg"
              }
            ]
          },
          {
            id: 'mobile-apps',
            label: 'Mobile Apps',
            icon: Smartphone,
            hero: {
              title: "Native & Cross-Platform Mobile Solutions",
              description: "Create engaging mobile experiences for iOS and Android",
              image: "/images/services/mobile-hero.jpg"
            },
            overview: {
              title: "Comprehensive Mobile Development",
              description: "We develop high-performance mobile applications that provide seamless user experiences across all platforms.",
              keyPoints: [
                "Native app development",
                "Cross-platform solutions",
                "UI/UX excellence",
                "Performance optimization"
              ]
            },
            features: [
              {
                title: "Native Development",
                description: "iOS and Android applications",
                icon: Smartphone
              },
              {
                title: "Cross-Platform Apps",
                description: "React Native solutions",
                icon: Globe
              },
              {
                title: "App Store Optimization",
                description: "Visibility and ranking improvement",
                icon: Search
              },
              {
                title: "Mobile Backend",
                description: "Scalable backend services",
                icon: Database
              }
            ],
            process: [
              {
                title: "Strategy",
                description: "Platform and technology selection",
                duration: "1-2 weeks"
              },
              {
                title: "Design",
                description: "UX/UI design for mobile",
                duration: "2-3 weeks"
              },
              {
                title: "Development",
                description: "App development and testing",
                duration: "8-12 weeks"
              },
              {
                title: "Testing",
                description: "Quality assurance and beta testing",
                duration: "2-3 weeks"
              },
              {
                title: "Launch",
                description: "App store submission and launch",
                duration: "1-2 weeks"
              }
            ],
            technologies: [
              {
                name: "React Native",
                icon: "/images/tech/react-native.svg"
              },
              {
                name: "Swift",
                icon: "/images/tech/swift.svg"
              },
              {
                name: "Kotlin",
                icon: "/images/tech/kotlin.svg"
              },
              {
                name: "Firebase",
                icon: "/images/tech/firebase.svg"
              }
            ],
            faqs: [
              {
                question: "Native vs Cross-platform - which should I choose?",
                answer: "The choice depends on your specific needs, budget, and timeline. We can help you make the best decision for your project."
              },
              {
                question: "How long does it take to develop a mobile app?",
                answer: "Typical development time ranges from 3-6 months depending on complexity and features."
              },
              {
                question: "Do you handle app store submissions?",
                answer: "Yes, we manage the entire process of submitting to both Apple App Store and Google Play Store."
              },
              {
                question: "Can you update my existing app?",
                answer: "Yes, we can take over existing apps for updates, maintenance, and new feature development."
              }
            ],
            caseStudies: [
              {
                title: "Fitness App Launch",
                description: "Cross-platform app with 100K+ downloads in first month",
                metrics: [
                  { label: "User Rating", value: "4.8/5" },
                  { label: "User Retention", value: "68%" },
                  { label: "App Downloads", value: "100K+" }
                ],
                image: "/images/case-studies/mobile-app-case.jpg"
              }
            ]
          }
    // Similar structure for other services...
  ];