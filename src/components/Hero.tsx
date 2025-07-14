
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Profile Avatar */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden relative">
              <img 
                src="/lovable-uploads/dc861e69-cf0d-4cf6-a03d-05657902e6b8.png" 
                alt="Vignesh VM - Front-End Developer Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-2 border-neon-cyan shadow-glow-primary animate-glow-pulse"></div>
            </div>
          </div>

          {/* Main Headlines */}
          <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              VIGNESH VM
            </span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl">FRONT-END DEVELOPER</span>
          </h1>

          {/* Bio */}
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Highly motivated and detail-oriented Front-End Developer with over 2 years of hands-on experience 
            building modern, responsive, and user-centric web applications. Proficient in HTML5, CSS3, 
            Tailwind CSS, JavaScript (ES6+), and React.js, with expertise in component-based architecture 
            and creating scalable front-end solutions.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8 text-sm text-muted-foreground">
            <span>91 8608358233</span>
            <span className="hidden sm:inline">•</span>
            <span>vmvignesh.dev@outlook.com</span>
            <span className="hidden sm:inline">•</span>
            <span>Chennai, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-neon-cyan" />
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50 -z-10"></div>
    </section>
  );
};
