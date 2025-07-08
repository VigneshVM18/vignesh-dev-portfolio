
import { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ThreeScene } from '@/components/ThreeScene';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* 3D Background Scene */}
      <ThreeScene />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-deep-space border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="font-inter text-muted-foreground">
            © 2024 Front-End Developer Portfolio. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
