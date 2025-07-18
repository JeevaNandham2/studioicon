import { useEffect } from 'react';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Star } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import portrait1 from '@/assets/port1.jpeg';
import portrait2 from '@/assets/port3.jpeg';
import portrait3 from '@/assets/Media 5.jpeg';
import portarait4 from '@/assets/port2.jpeg';
import portarat5 from '@/assets/port6.jpeg';




const PortraitPhotography = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const packages = [
    {
      name: "Individual Portrait",
      price: "₹15,000",
      duration: "1 hour",
      features: ["1 hour studio session", "30+ edited photos", "Online gallery", "USB with all images"]
    },
    {
      name: "Couple Portrait",
      price: "₹25,000",
      duration: "1.5 hours",
      features: ["1.5 hour session", "Multiple outfit changes", "50+ edited photos", "Online gallery", "Print release", "USB with all images"]
    },
    {
      name: "Family Portrait",
      price: "₹35,000",
      duration: "2 hours",
      features: ["2 hour session", "Multiple setups", "80+ edited photos", "Online gallery", "Print release", "USB with all images"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf7] text-gray-800 font-serif relative overflow-hidden">
      <BackButton />

      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <Camera className="absolute top-10 left-10 w-32 h-32 text-gray-300 animate-spin-slow" />
        <Star className="absolute bottom-10 right-10 w-24 h-24 text-gray-300 animate-pulse" />
      </motion.div>

      <section className="py-16 px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-light mb-4">StudioIcon</h1>
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-8">Lifestyle Portraits</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 relative">
          <motion.div
            className="absolute left-0 md:-left-22 top-1/2 transform -translate-y-1/2 text-4xl text-blue-600 font-serif italic hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["'Timeless Beauty '", "Candid Moments"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>
          <img src={portrait1} alt="Portrait 1" className="w-90 md:w-96 rounded-lg shadow-md object-cover" />
          <img src={portarat5} alt="Portrait 2" className="w-80 md:w-96 rounded-lg shadow-md object-cover" />
          <motion.div
            className="absolute right-0 md:-right-22 top-1/2 transform -translate-y-1/2 text-4xl text-orange-400 font-serif italic hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["'Elegant Frames '", "'Memorable Stories'"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.div>
        </div>
        <Card className="bg-white/80 p-8 max-w-3xl mx-auto rounded-xl shadow-lg">
          <CardContent className="p-0 text-center">
            <h2 className="text-3xl font-light mb-4">Welcome</h2>
            <p className="text-gray-600">
              We are so glad you're here! Our goal is to create beautiful, relaxed portraits that capture your essence and tell your story. Whether it's an individual session, couple portraits, or family moments, we specialize in authentic and heartfelt photography.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="py-12 px-6 text-center relative z-10">
        <h2 className="text-4xl font-light mb-8">Journal</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portrait3} alt="Session 1" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">East Coast Love</h3>
              <p className="text-sm text-gray-600 mb-4">A serene beach session capturing love and calm moments.</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full">
                <Link to="/portfolio">Read Full Post</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portrait2} alt="Session 2" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cali Engagement</h3>
              <p className="text-sm text-gray-600 mb-4">A dreamy engagement session along the California coast.</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full">
                <Link to="/portfolio">Read Full Post</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={portarait4} alt="Session 3" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Rooftop Hang</h3>
              <p className="text-sm text-gray-600 mb-4">Relaxed rooftop portraits during golden hour.</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full">
                <Link to="/portfolio">Read Full Post</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 text-center relative z-10">
        <h2 className="text-4xl font-light mb-8">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white rounded-lg shadow-lg p-8 hover:scale-105 transition-transform">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-orange-500 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500 mb-4 italic">{pkg.duration}</p>
                  <ul className="text-left text-gray-600 mb-6 space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white rounded-full">
                    <Link to="/book-now">Choose Package</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortraitPhotography;
