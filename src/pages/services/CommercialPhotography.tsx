import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Camera, TrendingUp, DollarSign } from "lucide-react";
import BackButton from "@/components/BackButton";
import product1 from "@/assets/Media 5.jpeg";
import product2 from "@/assets/event3.jpeg";
import product3 from "@/assets/fashion3.jpeg";
import product4 from "@/assets/event5.jpeg";

const CommercialPhotography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Elevate Your Brand With Stunning Commercial Visuals";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Building, title: "Corporate Shoots", desc: "Professional imagery for your business profile." },
    { icon: Camera, title: "Product Photography", desc: "High-quality product visuals for e-commerce and catalogs." },
    { icon: TrendingUp, title: "Marketing Content", desc: "Strategic photography to boost your brand image." },
    { icon: DollarSign, title: "Advertising Shoots", desc: "Creative visuals for campaigns and promotions." },
  ];

  const pricing = [
    {
      name: "Starter Package",
      price: "₹15,000",
      features: ["2 Hours Shoot", "20 Edited Images", "Online Gallery", "Basic Retouching"]
    },
    {
      name: "Business Package",
      price: "₹30,000",
      features: ["4 Hours Shoot", "50 Edited Images", "Product & Corporate Shots", "Advanced Retouching"]
    },
    {
      name: "Premium Package",
      price: "₹50,000",
      features: ["Full Day Shoot", "100+ Edited Images", "All Types of Shoots", "Same Day Delivery"]
    }
  ];

  const images = [product1, product2, product3, product4];

  return (
    <div className="min-h-screen text-gray-800 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-white animate-pulse opacity-20 z-0"></div>
      <BackButton />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 text-center px-6 bg-gradient-to-r from-gray-100 to-white z-10">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {displayedText}
        </motion.h1>
        <p className="text-md md:text-lg font-accent text-orange-500 max-w-2xl mx-auto mb-10">
          Commercial photography that sells your product and promotes your brand.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button className="bg-orange-500 hover:bg-gray-800 text-white w-full md:w-auto" asChild>
            <Link to="/portfolio">View Commercial Work</Link>
          </Button>
          <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 w-full md:w-auto" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-white z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((srv, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
              <srv.icon className="w-10 h-10 mb-4 text-gray-700 mx-auto" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{srv.title}</h3>
              <p className="text-sm text-gray-500">{srv.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio Image Grid */}
      <section className="py-16 px-6 md:px-20 z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="rounded-xl overflow-hidden shadow-lg">
              <img src={img} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50 z-10">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-10 text-gray-800">Our Packages</h2>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-wrap justify-center gap-8">
          {pricing.map((pkg, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="w-[280px] bg-white shadow-2xl rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{pkg.name}</h3>
              <div className="text-2xl font-extrabold mb-2 text-center">{pkg.price}</div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-gray-800 rounded-full mr-3"></span>{feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-400 hover:bg-gray-800 text-white" asChild>
                <Link to="/book-now">Select Package</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 px-6 md:px-20 bg-orange-500 text-white text-center z-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-6">Let's Work Together</h3>
        <p className="text-md md:text-lg mb-8 max-w-xl mx-auto">
          Get in touch for high-quality commercial photography services that help your brand stand out.
        </p>
        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
};

export default CommercialPhotography;
