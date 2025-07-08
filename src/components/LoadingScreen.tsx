
import { useEffect, useState } from 'react';
import logoAnimated from '@/assets/logo-animated.jpg';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-deep-space transition-all duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center animate-fade-in">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <img 
            src={logoAnimated} 
            alt="Developer Logo" 
            className="w-32 h-32 mx-auto animate-glow-pulse rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-glow rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <h1 className="font-orbitron text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          LOADING PORTFOLIO
        </h1>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden mx-auto mb-4">
          <div 
            className="h-full bg-gradient-primary transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="font-inter text-sm text-muted-foreground">
          {progress}%
        </div>
      </div>
    </div>
  );
};
