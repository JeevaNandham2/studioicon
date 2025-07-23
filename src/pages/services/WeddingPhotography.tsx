import { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Heart, Camera, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import weddingCoupleNew from '../../assets/fashion.jpeg';
import indianBridalNew from '@/assets/portfolio/indian-bridal-new.jpg';
import wedding1 from '../../assets/wedding1.jpeg';

const WeddingPhotography = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const packages = [
    {
      name: "Essential Wedding",
      price: "₹80,000",
      duration: "8 hours",
      features: [
        
        "8 hours of coverage",
        "500+ edited photos",
        "Online gallery",
        "USB with all images"
      ]
    },
    {
      name: "Premium Wedding",
      price: "₹1,10,000",
      duration: "Full Day",
      features: [
        
        "Full day coverage",
        "800+ edited photos",
        "Second photographer",
        "Online gallery",
        "Premium album",
        "USB with all images"
      ],
      popular: true
    },
    {
      name: "Luxury Wedding",
      price: "₹1,60,000",
      duration: "2 Days",
      features: [
        "Pre-wedding consultation",
        "Drone Shoot",
        "2 days coverage",
        "1200+ edited photos",
        "Two photographers",
        "Videographer",
        "Online gallery",
        "Luxury album",
        "USB with all images",
        "Same day preview"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Senthil & Pornima",
      review: "We were blown away by the photos! The team captured every moment beautifully.",
      rating: 5
    },
    {
      name: "Lokesh & Saranya",
      review: "From pre-wedding to reception, everything was perfect. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8f0] to-[#fdf6f0] text-gray-800 font-serif">
      <BackButton />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={weddingCoupleNew} 
            alt="Wedding Photography" 
            className="w-full h-full object-cover scale-105 transition-transform duration-[4000ms] hover:scale-110"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl mx-auto text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Badge className="mb-6 border-yellow-400 border-2 bg-white/70 text-yellow-600 px-4 py-2 text-lg rounded-full shadow-md">
            Wedding Invitation
          </Badge>
          <motion.h1 
            className="font-display text-5xl md:text-7xl font-light mb-6 leading-tight italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Your Love Story
            <span className="block font-cursive text-6xl md:text-8xl text-orange-400 mt-2">
              Elegantly Captured
            </span>
          </motion.h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-8 opacity-90 italic">
            Creating timeless moments with art and emotion.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 text-lg rounded-full shadow-lg"
            asChild
          >
            <Link to="/book-now">Book Your Wedding</Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 italic text-orange-500">
              What Makes Our Wedding Photography Special
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[{ icon: Heart, title: "Emotional Storytelling", description: "Capturing genuine emotions and intimate moments" }, { icon: Camera, title: "Artistic Vision", description: "Creative compositions with modern techniques" }, { icon: Clock, title: "Full Day Coverage", description: "From getting ready to the last dance" }, { icon: Users, title: "Two Photographers", description: "Multiple perspectives of your special day" }].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="text-center p-8 bg-white backdrop-blur-md shadow-lg rounded-2xl border border-yellow-200">
                  <CardContent className="p-0">
                    <feature.icon className="h-12 w-12 text-green-500 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/80">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-black italic">
            Why Choose Us?
          </h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto"
          >
            <span className="text-blue-300 font-extrabold text-5xl">
              <Typewriter
                words={[
                  'We capture raw emotions.',
                  'We deliver cinematic quality.',
                  'We offer same-day previews.',
                  'We create memories, not just photos.'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#ffffff]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-orange-500 italic">
              Wedding Packages
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.3 }}
              >
                <Card className={`relative p-8 bg-gradient-to-br from-yellow-50 to-orange-100 border-2 ${pkg.popular ? 'border-yellow-500' : 'border-yellow-200'} rounded-xl shadow-xl hover:scale-105 transition-transform`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-4 py-1 rounded-full animate-pulse">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-0 text-center">
                    <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{pkg.price}</div>
                    <div className="text-gray-500 mb-6 italic">{pkg.duration}</div>
                    <ul className="space-y-3 mb-8 text-left text-gray-700">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full">
                      <Link to="/book-now">Choose Package</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-orange-500 italic">
              Wedding Gallery
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="relative h-96 rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg">
              <img src={wedding1} alt="Bridal Portrait" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="relative h-96 rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 shadow-lg">
              <img src={weddingCoupleNew} alt="Wedding Couple" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
              <Link to="/portfolio">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-orange-500 italic">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 text-left shadow-md rounded-xl bg-white/90 border border-yellow-200">
                  <CardContent className="p-0">
                    <p className="text-lg mb-4 italic">"{testimonial.review}"</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 mr-1" />
                      ))}
                      <span className="ml-2 font-semibold text-yellow-700">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPhotography;
