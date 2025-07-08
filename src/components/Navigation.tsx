import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-orbitron text-xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                3D ARTIST
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.href.substring(1);
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20'
                        : 'text-foreground hover:text-neon-cyan hover:bg-neon-cyan/5'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="font-inter">{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-foreground hover:text-neon-cyan"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md" />
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto bg-card border border-border rounded-lg p-6 shadow-glass">
              <div className="flex items-center justify-between mb-6">
                <div className="font-orbitron text-lg font-bold">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    MENU
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-neon-cyan"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20'
                          : 'text-foreground hover:text-neon-cyan hover:bg-neon-cyan/5'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-inter">{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};