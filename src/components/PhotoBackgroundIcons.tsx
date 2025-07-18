import { Camera, Aperture, Image, Film, Focus, Palette, Star, Heart, Sparkles } from 'lucide-react';

const PhotoBackgroundIcons = () => {
  const icons = [
    { Icon: Camera, color: 'text-primary/20', size: 'w-16 h-16', position: 'top-20 left-10', animation: 'animate-pulse' },
    { Icon: Aperture, color: 'text-accent/30', size: 'w-12 h-12', position: 'top-40 right-20', animation: 'animate-bounce' },
    { Icon: Image, color: 'text-secondary/25', size: 'w-14 h-14', position: 'top-60 left-20', animation: 'animate-pulse' },
    { Icon: Film, color: 'text-primary/15', size: 'w-18 h-18', position: 'bottom-40 right-10', animation: 'animate-bounce' },
    { Icon: Focus, color: 'text-accent/20', size: 'w-10 h-10', position: 'bottom-60 left-16', animation: 'animate-pulse' },
    { Icon: Palette, color: 'text-secondary/30', size: 'w-12 h-12', position: 'top-80 right-40', animation: 'animate-bounce' },
    { Icon: Star, color: 'text-primary/25', size: 'w-8 h-8', position: 'bottom-80 right-60', animation: 'animate-pulse' },
    { Icon: Heart, color: 'text-accent/35', size: 'w-10 h-10', position: 'top-32 left-60', animation: 'animate-bounce' },
    { Icon: Sparkles, color: 'text-secondary/20', size: 'w-14 h-14', position: 'bottom-32 left-40', animation: 'animate-pulse' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.animation}`}
          style={{ animationDelay: `${index * 0.5}s`, animationDuration: '3s' }}
        >
          <item.Icon className={`${item.size} ${item.color} drop-shadow-lg`} />
        </div>
      ))}
      
      {/* Floating particles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/2 w-3 h-3 bg-secondary/25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-60 right-1/4 w-1.5 h-1.5 bg-primary/35 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};

export default PhotoBackgroundIcons;