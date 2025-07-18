import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Camera, Film, Users, ArrowLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import bridal1 from "@/assets/event2.jpeg";
import bridal2 from "@/assets/event3.jpeg";
import bridal3 from "@/assets/event4.jpeg";
import bridal4 from "@/assets/event5.jpeg";

const EventPhotography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Capturing Life's Beautiful Moments";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      name: "Basic Event",
      price: "₹20,000",
      duration: "4 hours",
      photos: "100+ edited photos",
      features: ["Event coverage", "Basic editing", "Online gallery", "Print release"]
    },
    {
      name: "Premium Event",
      price: "₹35,000",
      duration: "6 hours",
      photos: "200+ edited photos",
      features: ["Full event coverage", "Two photographers", "Advanced editing", "Online gallery", "Same day preview"]
    },
    {
      name: "Elite Event",
      price: "₹50,000",
      duration: "8 hours",
      photos: "300+ edited photos",
      features: ["Complete coverage", "Multiple photographers", "Videography", "Premium editing", "Online gallery", "Highlight reel"]
    }
  ];

  const images = [bridal1, bridal2, bridal3, bridal4];

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      <BackButton />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">Professional Photography Studio</span>
          <motion.h1 
            className="text-4xl md:text-6xl font-accent mb-4 text-gray-800 leading-tight"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {displayedText}
          </motion.h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Where artistry meets emotion. Professional event photography that tells your unique story with elegance and creativity.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100 w-full md:w-auto" asChild>
              <Link to="/book-now">Book Session</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Animated Image Cards Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-lg">
              <img src={img} alt={`Bridal ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
            <Camera className="w-10 h-10 mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Photography</h3>
            <p className="text-sm text-gray-500">Complete event photography with premium lenses.</p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
            <Film className="w-10 h-10 mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Videography</h3>
            <p className="text-sm text-gray-500">Cinematic videography capturing every moment.</p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
            <Users className="w-10 h-10 mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Multiple Shooters</h3>
            <p className="text-sm text-gray-500">Dedicated team for multi-angle coverage.</p>
          </div>

          <div className="bg-white shadow-xl p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition">
            <BadgeCheck className="w-10 h-10 mb-4 text-orange-400" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Premium Edits</h3>
            <p className="text-sm text-gray-500">Advanced post-processing and color grading.</p>
          </div>
        </motion.div>
      </section>

      {/* Animated Pricing Section */}
      <section className="py-16 px-6">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-10 text-gray-800">Event Packages</h2>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-wrap justify-center gap-8">
          {packages.map((pkg, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="w-[280px] bg-white shadow-2xl rounded-2xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-3 text-center">{pkg.name}</h3>
              <div className="text-2xl font-extrabold mb-2 text-center">{pkg.price}</div>
              <p className="text-sm text-gray-500 text-center mb-4">{pkg.duration} • {pkg.photos}</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>{feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link to="/book-now">Choose</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
          <p className="text-md md:text-lg text-gray-600 mb-8">
            We specialize in capturing life's most precious events with a combination of professionalism, creativity, and passion. Our team ensures every detail is documented beautifully.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EventPhotography;
