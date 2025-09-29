import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About IEEE', href: 'https://ieee.org' },
    { label: 'Student Activities', href: '#' },
    { label: 'Membership Benefits', href: '#' },
    { label: 'Career Center', href: '#' },
    { label: 'Publications', href: '#publications' },
    { label: 'Conferences', href: '#' }
  ];

  const societies = [
    { label: 'Communication Society', href: '#societies' },
    { label: 'Computer Society', href: '#societies' },
    { label: 'IEEE SIGHT', href: '#societies' },
    { label: 'Women in Engineering', href: '#societies' },
    { label: 'Young Professionals', href: '#' },
    { label: 'Student Activities', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-ieee-dark-gray text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IEEE Branch Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">IEEE</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">IEEE Student Branch</h3>
                  <p className="text-sm text-gray-400">SMVITM</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advancing Technology for Humanity. We are committed to fostering innovation, 
                technical excellence, and professional development among future engineers.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-white/10 hover:bg-primary rounded-full transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm flex items-center"
                    >
                      {link.label}
                      {link.href.startsWith('http') && (
                        <ExternalLink className="w-3 h-3 ml-1" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* IEEE Societies */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">IEEE Societies</h4>
              <ul className="space-y-2">
                {societies.map((society, index) => (
                  <li key={index}>
                    <a
                      href={society.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {society.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Shri Madhwa Vadiraja Institute of</p>
                    <p>Technology and Management</p>
                    <p>Bantakal, Udupi, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="mailto:ieee@smvitm.edu"
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    ieee@smvitm.edu
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:+918123456789"
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    +91 81234 56789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} IEEE Student Branch – SMVITM. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>

        {/* IEEE Affiliation Note */}
        <div className="border-t border-gray-700 py-4">
          <p className="text-center text-xs text-gray-500">
            This student branch is officially affiliated with the Institute of Electrical and Electronics Engineers (IEEE)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;