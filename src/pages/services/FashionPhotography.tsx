import { useEffect } from 'react';
import { Camera, Users, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import { motion } from 'framer-motion';
import fashion1 from '@/assets/fashion.jpeg';
import fashion2 from '@/assets/fashion2.jpeg';
import fashion3 from '@/assets/fashion3.jpeg';
import fashion4 from '@/assets/fashion4.jpeg';
import fashion5 from '@/assets/fashion5.jpeg';
import fashion6 from '@/assets/fashion6.jpeg';

const FashionPhotography = () => {
  
  // Ensure page scrolls to top when navigated to this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const packages = [
    {
      name: "Essential Fashion",
      price: "₹15,000",
      duration: "2 hours",
      photos: "30+ edited photos",
      features: ["Studio session", "Basic retouching", "Online gallery", "Print release"]
    },
    {
      name: "Premium Fashion",
      price: "₹25,000",
      duration: "4 hours",
      photos: "60+ edited photos",
      features: ["Studio + outdoor", "Advanced retouching", "Styling consultation", "Online gallery", "Print release"]
    },
    {
      name: "Elite Fashion",
      price: "₹40,000",
      duration: "6 hours",
      photos: "100+ edited photos",
      features: ["Multiple locations", "Professional styling", "Hair & makeup artist", "Premium retouching", "Online gallery", "Print release"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 font-serif overflow-x-hidden scroll-smooth">

      <BackButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-accent text-orange-500 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          StudioIcon
        </motion.h1>
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-8">Fashion Editorials</p>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Redefine your fashion moments with our creative direction, premium styling, and editorial-grade photography.
        </motion.p>
        <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-full shadow-md" asChild>
          <Link to="/book-now">Book Fashion Session</Link>
        </Button>

        {/* Fashion Gallery Section */}
        <div className="flex flex-wrap justify-center mt-16 gap-6">
          {[fashion1, fashion2, fashion3, fashion4].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="w-40 h-60 md:w-52 md:h-72 lg:w-60 lg:h-80 overflow-hidden rounded-xl shadow-lg"
            >
              <img src={img} alt={`Fashion Small ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[{
            icon: Camera,
            title: "Editorial Shots",
            desc: "Bold, stylish, and perfectly composed fashion portraits."
          },
          {
            icon: Users,
            title: "Creative Team",
            desc: "Work with our expert stylists and makeup artists."
          },
          {
            icon: Star,
            title: "Retouching Mastery",
            desc: "High-end skin retouching and color grading."
          },
          {
            icon: Clock,
            title: "Time Efficiency",
            desc: "Flexible shoot durations to fit your schedule."
          }].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Our Packages</h2>
          <p className="text-lg text-gray-500">Select the perfect fit for your fashion portfolio or brand.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="rounded-xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-3xl text-orange-500 font-bold mb-4">{pkg.price}</p>
                  <p className="text-sm text-gray-400 mb-2">{pkg.duration}</p>
                  <p className="text-sm text-gray-400 mb-4">{pkg.photos}</p>
                  <ul className="text-gray-600 mb-6 space-y-2 text-left">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-3">
                    <Link to="/book-now">Select Package</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-light mb-4">Recent Works</h2>
          <p className="text-lg text-gray-500">Discover our latest fashion editorials and creative shoots.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[fashion1, fashion6, fashion5, fashion4].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all w-full h-96"
            >
              <img src={img} alt={`Recent Work ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-100" asChild>
            <Link to="/portfolio">View Full Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FashionPhotography;
