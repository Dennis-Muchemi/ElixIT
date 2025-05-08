'use client'

import React, { useMemo } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white">ElixIT</span>
            </Link>
            <p className="text-slate-400 mb-6">
              Transforming businesses through innovative digital experiences that combine cutting-edge technology with human-centered design.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-4">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/contact" text="Contact" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              <FooterLink href="/services/custom-web-development" text="Custom Website Development" />
              <FooterLink href="/services/wordpress-development" text="Wordpress Development" />
              <FooterLink href="/services/website-redesign" text="Website redesign" />
              <FooterLink href="/services/seo-optimization" text="Other Services" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <ContactInfo 
                icon={<Mail className="w-5 h-5" />}
                text="hello@elixit.com"
              />
              <ContactInfo 
                icon={<Phone className="w-5 h-5" />}
                text="+1 (234) 567-890"
              />
              {/*}
              <ContactInfo 
                icon={<MapPin className="w-5 h-5" />}
                text="123 Design Street, Creative City, CD 12345"
              />
              */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {year} ElixIT. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <Link 
    href={href} 
    className="block text-slate-400 hover:text-white transition-colors duration-300"
  >
    {text}
  </Link>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white transform hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

const ContactInfo = ({ icon, text }: ContactInfoProps) => (
  <div className="flex items-start space-x-3 text-slate-400">
    <span className="mt-1">{icon}</span>
    <span>{text}</span>
  </div>
);

export default Footer;