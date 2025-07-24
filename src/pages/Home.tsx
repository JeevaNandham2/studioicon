import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Users, Heart, Star, ArrowRight } from 'lucide-react';
import indianBridalNew from '../assets/Media 5.jpeg';
import beachCoupleNew from '../assets/shared image 18.jpeg';
import maternityRedNew from '../assets/home1.jpeg';
import bridalBeautyNew from '../assets/Media 3.jpeg';
import weddingCoupleNew from '../assets/Media 4.jpeg';
import wedding from '../assets/wedding.jpeg';
import maternity from '../assets/maternity.jpeg';
import portrate from '../assets/portrati.jpeg';
import event from '../assets/event1.jpeg';
import fashion from '../assets/fashion1.jpeg';
import port1 from '../assets/fashion2.jpeg';
import port2 from '../assets/maternity4.jpeg';
import port3 from '../assets/port4.jpeg';
import port4 from '../assets/port1.jpeg';
import port5 from '../assets/fashion3.jpeg';
import port6 from '../assets/fashion5.jpeg';
import port7 from '../assets/about1.jpeg';
import port8 from '../assets/about3.jpeg';
import home1 from '../assets/home1.jpeg'


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    {
      src: indianBridalNew,
      alt: "Indian Bridal Photography",
      title: "WEDDING",
      subtitle: "Bridal Details"
    },
    {
      src: beachCoupleNew,
      alt: "Beach Couple Photography", 
      title: "COUPLE",
      subtitle: "Beach Sessions"
    },
    {
      src: maternityRedNew,
      alt: "Maternity Photography",
      title: "MATERNITY", 
      subtitle: "Expecting Moments"
    },
    {
      src: bridalBeautyNew,
      alt: "Bridal Beauty Photography",
      title: "PORTRAIT",
      subtitle: "Beauty Sessions"
    },
    {
      src: weddingCoupleNew,
      alt: "Wedding Couple Photography",
      title: "WEDDING",
      subtitle: "Love Stories"
    }
  ];


  // Auto-change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const services = [
    {
      title: "Wedding Photography",
      price: "₹25,000",
      image: wedding,
      icon: Heart,
      link: "/services/wedding"
    },
    {
      title: "Maternity Photography", 
      price: "₹15,000",
      image: maternity,
      icon: Heart,
      link: "/services/maternity"
    },
    {
      title: "Portrait Photography",
      price: "₹12,000", 
      image: portrate,
      icon: Users,
      link: "/services/portrait"
    },
    {
      title: "Fashion Photography",
      price: "₹18,000",
      image: fashion ,
      icon: Camera,
      link: "/services/fashion"
    },
    {
      title: "Event Photography",
      price: "₹20,000",
      image: event,
      icon: Users,
      link: "/services/event"
    },
    {
      title: "Commercial Photography",
      price: "₹22,000",
      image: indianBridalNew,
      icon: Star,
      link: "/services/commercial"
    }
  ];

  const portfolioImages = [port1,port2,port3,port4,port6,];
  const portfolio = [port7, port8,port3,port1,maternity];


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-yellow-200/20 rounded-full animate-bounce delay-700"></div>
        <Camera className="absolute top-60 left-1/4 w-8 h-8 text-orange-300/30 animate-pulse delay-300" />
        <Heart className="absolute top-80 right-1/3 w-6 h-6 text-pink-300/30 animate-bounce delay-1500" />
        <Star className="absolute bottom-60 left-1/3 w-7 h-7 text-yellow-300/30 animate-pulse delay-800" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8 z-10 relative">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif text-foreground leading-tight">
                <span className="font-script text-orange-500 text-6xl lg:text-7xl xl:text-8xl">Capturing</span>
                <br />
                 <span className="text-purple-400 font-normal">Your</span>
                <br />
                <span className="text-orange-500 font-normal">Perfect</span>
                <br />
             <span className="font-accent text-purple-400 drop-shadow-[0_0_10px_rgba(74,0,138,0.10)]">
  Moments
</span>

              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-serif">
                Creating timeless memories through exceptional photography. 
                From portraits to events, we bring your vision to life with artistic 
                excellence and professional expertise.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-medium rounded-full"
                asChild
              >
                <Link to="/portfolio">
                  VIEW PORTFOLIO →
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 text-base font-medium rounded-full"
                asChild
              >
                <Link to="/contact">
                  CONTACT
                </Link>
              </Button>
            </div>
            
            {/* Statistics */}
            <div className="pt-8 mt-12 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1"></div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide"></div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1"></div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide"></div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1"></div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image Carousel */}
          <div className="relative h-[500px] lg:h-[600px] xl:h-[700px] z-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Overlay with Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-sm font-medium tracking-wider opacity-90 mb-1">
                      {image.title}
                    </div>
                    <div className="text-2xl font-script">
                      & {image.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Carousel Dots */}
            <div className="absolute -bottom-6 right-8 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-orange-500 w-6' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Image Cards */}
      <section className="py-5 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/10 via-transparent to-pink-200/10" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-3 h-3 bg-orange-300/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-32 right-16 w-2 h-2 bg-pink-300/40 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-yellow-300/40 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/src/assets/event1.jpeg",
              "/src/assets/port4.jpeg", 
              "/src/assets/home2.jpeg",
              "/src/assets/port3.jpeg"
            ].map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                  index % 2 === 0 ? 'float-animation' : 'float-animation'
                }`}
                style={{ animationDelay: `${index * 2.5}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center sparkle-animation">
                    <Star className="w-6 h-6 text-white" />

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-orange-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border border-pink-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-yellow-200/30 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-gradient-to-r from-orange-200/20 to-pink-200/20 rounded-full float-animation"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-accent text-foreground mb-4">
              <span className="font-accent text-orange-500">What We</span> Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive photography services tailored to meet your unique vision and requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur hover-lift">
                <Link to={service.link}>
                  <div className="relative h-74 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <service.icon className="w-8 h-8 text-white/80" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-serif text-white mb-2">{service.title}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-white/90">
                          <Star className="w-4 h-4 text-orange-400 mr-2" />
                          <span>Professional Equipment</span>
                        </div>
                        <div className="flex items-center text-sm text-white/90">
                          <Heart className="w-4 h-4 text-orange-400 mr-2" />
                          <span>High-Resolution Images</span>
                        </div>
                        <div className="flex items-center text-sm text-white/90">
                          <Camera className="w-4 h-4 text-orange-400 mr-2" />
                          <span>24-48 Hour Delivery</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform mt-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 hover-glow" asChild>
              <Link to="/book-now">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-accent text-foreground">
                <span className="font-accent text-orange-500">About</span> Studio Icon
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over a decade of experience in capturing life's most precious moments, Studio Icon 
                has established itself as a premier photography service. We specialize in creating 
                timeless images that tell your unique story.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of professional photographers combines technical expertise with artistic vision 
                to deliver exceptional results that exceed expectations.
              </p>
              <Button variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
           <div className="grid grid-cols-2 gap-4">
        {portfolio
          .filter((_, index) => index !== 2) // Removes the 4th image (index 3)
          .map((img, index) => (
            <div key={index} className={`relative overflow-hidden rounded-2xl ${index === 1 ? 'mt-8' : ''}`}>
              <img 
                src={img}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-74 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Continuous Scrolling */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-30 left-10 w-20 h-30 border border-orange-200/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center mb-16 px-6">
          <h2 className="text-5xl font-accent text-foreground mb-4">
            <span className="font-accent text-orange-500">Our</span> Portfolio
          </h2>
          <p className="text-xl text-muted-foreground">A showcase of our finest work across various photography disciplines</p>
        </div>
        
        <div className="relative">
          <div className="flex space-x-6 animate-[scroll_30s_linear_infinite]">
            {/* First set of images */}
            {[...portfolioImages, ...portfolioImages, ...portfolioImages].map((img, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-96 group relative overflow-hidden rounded-2xl shadow-lg hover-lift">
                <img 
                  src={img}
                  alt={`Portfolio showcase ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-script text-xl text-orange-300">Captured Beauty</p>
                  <p className="text-sm">Photography Excellence</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for seamless scroll */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        </div>
        
        <div className="text-center mt-12 px-6">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 hover-glow" asChild>
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;