import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="relative mb-12">
        <Button
          asChild
          size="lg"
          className="bg-blue-700 hover:bg-primary-dark text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300 rounded-full px-6 py-4"
        >
          <Link to="/book-now" className="flex items-center space-x-2">
            <Camera className="h-5 w-5" />
            <span className="font-medium">Book Session</span>
          </Link>
        </Button>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;