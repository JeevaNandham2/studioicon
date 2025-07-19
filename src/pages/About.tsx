import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import { Camera, Heart, Award, Users, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: Award, title: 'Award Winning', description: 'Featured in top photography magazines' },
    { icon: Users, title: '500+ Happy Clients', description: 'Couples and families trust our vision' },
    { icon: Star, title: '5-Star Reviews', description: 'Consistently rated excellent service' },
    { icon: Camera, title: '8+ Years Experience', description: 'Professional photography expertise' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/5 relative overflow-hidden">
      <BackButton />
      
      {/* Elegant Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 border border-primary/15 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full float-animation"></div>
        <Sparkles className="absolute top-60 left-1/3 w-8 h-8 text-primary/20 sparkle-animation" />
        <Heart className="absolute top-80 right-1/4 w-6 h-6 text-accent/20 sparkle-animation delay-1000" />
      </div>

      {/* Invitation-Style Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-12 slide-in-left">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Sparkles className="mx-4 w-6 h-6 text-primary sparkle-animation" />
              <div className="w-24 h-[2px] bg-gradient-to-r from-primary via-transparent to-transparent"></div>
            </div>
            
            <p className="font-script text-3xl text-primary mb-6 color-shift">Nice to meet you</p>
            <h1 className="font-serif text-7xl md:text-8xl text-foreground mb-8 leading-tight zoom-in">
              Studio Icon
            </h1>
            <p className="font-script text-4xl text-primary mb-8 slide-in-right">Photography</p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-primary rounded-full sparkle-animation"></div>
              <div className="w-32 h-[1px] bg-gradient-to-r from-primary via-transparent to-transparent"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto zoom-in delay-500">
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
              Where artistry meets passion, and every frame tells a story worth remembering
            </p>
          </div>
        </div>
      </section>

      {/* Elegant Story Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative slide-in-left">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="/lovable-uploads/a517ee2d-3cc6-4b17-a27b-9a60a5a8c610.png" 
                  alt="Studio Icon Photography" 
                  className="w-full h-full object-cover hover-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-full sparkle-animation"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-sm float-animation"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-primary/20 rounded-full sparkle-animation delay-1000"></div>
            </div>
            
            <div className="space-y-8 slide-in-right">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-[2px] bg-primary"></div>
                  <Star className="mx-3 w-5 h-5 text-primary sparkle-animation" />
                  <div className="w-16 h-[2px] bg-primary"></div>
                </div>
                <h2 className="text-6xl md:text-7xl font-serif text-foreground mb-8 leading-tight">Our Story</h2>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="text-xl font-light">
                  Studio Icon was born from a passion for capturing life's most precious moments. 
                  Founded with the vision of creating timeless memories, we specialize in wedding, 
                  portrait, and fashion photography that speaks to the heart.
                </p>
                <p>
                  Our approach combines artistic vision with technical excellence, ensuring that 
                  every photograph is not just an image, but a piece of art that tells your unique story.
                </p>
                <p>
                  Based in Chennai, we bring years of experience and an eye for detail to every session, 
                  creating memories that will be treasured for generations to come.
                </p>
              </div>
              
              <div className="pt-6">
                <Button size="lg" className="font-serif text-lg px-10 py-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover-glow">
                  <Camera className="mr-2 w-5 h-5" />
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              MY <span className="text-primary">PHILOSOPHY</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8" />
            <p className="font-body text-xl text-muted-foreground leading-relaxed mb-12">
              "Perfect moments aren't about perfection – they're about authenticity, emotion, and connection. 
              My job isn't to create artificial beauty, but to capture the genuine beauty that already exists 
              in your story."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
              <div className="text-center animate-on-scroll">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Authentic Emotion</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  I capture real moments and genuine emotions, not posed perfection
                </p>
              </div>
              
              <div className="text-center animate-on-scroll" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Artistic Vision</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Combining technical expertise with creative artistry for stunning results
                </p>
              </div>
              
              <div className="text-center animate-on-scroll" style={{ animationDelay: '400ms' }}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">Personal Connection</h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Building relationships with clients to capture their true essence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              RECOGNITION & <span className="text-primary">ACHIEVEMENTS</span>
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Honored to be recognized by industry leaders and, more importantly, 
              by the amazing clients who trust me with their precious moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.title}
                className="text-center animate-on-scroll bg-background p-8 rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="font-body text-muted-foreground text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                MY <span className="text-primary">PROCESS</span>
              </h2>
              <div className="w-16 h-1 bg-primary mb-6" />
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Discovery Call</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      We start with a conversation about your vision, style preferences, and what makes your story unique.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Custom Planning</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Together, we plan every detail from locations to timing, ensuring your session reflects your personality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Magic Happens</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      During your session, I guide you naturally while capturing authentic moments and genuine emotions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">Beautiful Delivery</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      Your carefully edited images are delivered in a stunning online gallery, ready to treasure forever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img 
                src="/lovable-uploads/b1b7223c-e566-4281-82bf-6409cf3a62e7.png" 
                alt="StudioIcon Process" 
                className="rounded-lg shadow-elegant w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              I'd love to hear about your vision and create something beautiful together. 
              Let's schedule a call to discuss your dream session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-accent px-8 py-4 text-lg font-medium"
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium"
              >
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;