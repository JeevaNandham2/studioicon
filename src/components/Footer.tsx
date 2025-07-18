import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logoIcon from '@/assets/Studiologo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden ">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden ">
        <svg 
          className="relative block w-full h-20" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-background"
          ></path>
        </svg>
      </div>
      
      <div className="bg-gradient-to-br from-secondary/30 via-primary/10 to-accent/20 pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <img src={logoIcon} alt="StudioIcon" className="h-15 w-20" />
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Professional photography studio specializing in weddings, portraits, and maternity photography. 
                Creating timeless memories with artistic vision and emotional depth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/services/wedding" className="text-muted-foreground hover:text-primary transition-colors">Wedding Photography</Link></li>
                <li><Link to="/services/maternity" className="text-muted-foreground hover:text-primary transition-colors">Maternity Photography</Link></li>
                <li><Link to="/services/portrait" className="text-muted-foreground hover:text-primary transition-colors">Portrait Photography</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">studioicon144@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Chennai, Tamil Nadu</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link 
                  to="/book-now" 
                  className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 StudioIcon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;