import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import studioIconLogo from '@/assets/Studiologo-removebg-preview.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'ABOUT', href: '/about' },
    { name: 'JOURNAL', href: '/journal' },
    { name: 'CONTACT', href: '/contact' },
    // { name: 'SHOP', href: '/shop' },
  ];

  const serviceItems = [
    { name: 'Wedding Photography', path: '/services/wedding' },
    { name: 'Maternity Photography', path: '/services/maternity' },
    { name: 'Portrait Photography', path: '/services/portrait' },
    { name: 'Fashion Photography', path: '/services/fashion' },
    { name: 'Event Photography', path: '/services/event' },
    { name: 'Commercial Photography', path: '/services/commercial' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group relative z-60"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="relative">
                <img 
                  src={studioIconLogo} 
                  alt="StudioIcon" 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Menu Button */}
            <button
              className="relative z-60 p-2 text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm font-display tracking-wider">MENU</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-background transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center relative">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-sm font-display tracking-wider">CLOSE</span>
              <X className="h-4 w-4" />
            </div>
          </button>

          {/* Logo in menu */}
          <div className="absolute top-6 left-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src={studioIconLogo} 
                alt="StudioIcon" 
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="text-center space-y-8 mt-20">
            {navigation.map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ${
                  isMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  to={item.href}
                  className={`block font-display text-2xl md:text-6xl font-light tracking-widest transition-all duration-300 hover:text-primary ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-foreground hover:scale-105'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* Services in Mobile Menu */}
            <div
              className={`transform transition-all duration-500 ${
                isMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${navigation.length * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="font-display text-2xl md:text-4xl font-light tracking-widest text-primary">SERVICES</div>
                <div className="space-y-2">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block font-display text-xl md:text-2xl font-light tracking-wider transition-all duration-300 hover:text-primary text-muted-foreground hover:scale-105"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button in Menu */}
          <div 
            className={`mt-16 transform transition-all duration-500 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <Link
              to="/book-now"
              className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-display tracking-wider text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK SESSION
            </Link>
          </div>

          {/* Social Links or Additional Info */}
          <div 
            className={`absolute bottom-6 left-6 right-6 flex justify-between items-center text-sm text-muted-foreground transform transition-all duration-500 ${
              isMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* <span>© 2025 StudioIcon</span>
            <span>Professional Photography</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;