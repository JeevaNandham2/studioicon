import { useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import maternityRedNew from '@/assets/maternity.jpeg';
import maternityService from '@/assets/maternity3.jpeg';
import womensHealth from '@/assets/maternity4.jpeg';
import smallCardImage from '@/assets/maternity7.jpeg';
import smallcard1 from '@/assets/maternity6.jpeg';
import smallcard2 from '@/assets/maternity5.jpeg';

const MaternityPhotography = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const latestWorks = [
    {
      title: 'Elegant Maternity Shoot',
      image: maternityService,
      description: 'A warm and graceful maternity session capturing the beauty of motherhood.',
    },
    {
      title: 'Natural Light Portraits',
      image: womensHealth,
      description: 'Soft natural light photography for expecting mothers, highlighting serenity.',
    },
  ];

  const packages = [
    {
      name: 'Essential Package',
      price: '₹25,000',
      duration: '1 Hour',
      features: [
        '50+ edited photos',
        'Online gallery',
        'USB with all images',
      ],
    },
    {
      name: 'Premium Package',
      price: '₹45,000',
      duration: '2 Hours',
      features: [
        '100+ edited photos',
        'Multiple outfit changes',
        'Partner included',
        'Online gallery',
        'Print release',
        'USB with all images',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff8f4] text-gray-800 font-serif">
      <BackButton />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={maternityRedNew}
            alt="Maternity Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto text-gray-900">
          <Card className="bg-white/90 p-8 rounded-xl shadow-lg">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-5xl font-light mb-4">
                Maternity & New Life Photography
              </h2>
              <p className="mb-6 text-lg">
                Capturing the beauty of new beginnings, our maternity sessions offer timeless imagery for you and your loved ones.
              </p>
              <Button className="bg-orange-400 hover:bg-orange-500 text-white rounded-full px-6 py-3">
                <Link to="/book-now">Book a Session</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-light mb-6">
          Cherish Every Moment of Motherhood
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          We create intimate maternity portraits that celebrate the journey of motherhood in a cozy, inviting environment. Each photo is a lasting memory of this special time.
        </p>
      </section>

      <section className="py-10 px-6 bg-[#fff2e8]">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light text-orange-400 tracking-widest">OUR WORK</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {latestWorks.map((work, index) => (
            <Card key={index} className="bg-white shadow-xl rounded-lg overflow-hidden">
              <img src={work.image} alt={work.title} className="w-full h-82 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{work.title}</h3>
                <p className="text-gray-600 mb-6">{work.description}</p>
                <Button variant="outline" className="border-orange-400 text-orange-500 hover:bg-orange-50 rounded-full">
                  <Link to="/portfolio">View Full Gallery</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-orange-400 mb-4">Our Packages</h2>
          <p className="text-lg text-gray-600">
            Choose from our carefully curated maternity photography packages designed for your comfort and joy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#fff8f4] p-8 rounded-2xl shadow-xl border border-orange-200 hover:scale-105 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-orange-500">{pkg.name}</h3>
              <div className="text-3xl font-extrabold text-orange-600 mb-4">{pkg.price}</div>
              <p className="text-gray-500 mb-4 italic">{pkg.duration}</p>
              <ul className="space-y-2 mb-6 text-left">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-orange-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white rounded-full">
                <Link to="/book-now">Choose Package</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-light text-orange-400 mb-4">Special Moment</h2>
        </div>
        <div className="flex justify-center">
          <Card className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={smallCardImage} alt="Special Maternity" className="w-full h-58 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Moments of Joy</h3>
              <p className="text-gray-600 text-sm">
                A glimpse into our latest maternity session highlighting joy and connection.
              </p>
            </CardContent>
          </Card>

           <Card className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={smallcard1} alt="Special Maternity" className="w-full h-58 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Moments of proud</h3>
              <p className="text-gray-600 text-sm">
                A glimpse into our latest maternity session highlighting joy and connection.
              </p>
            </CardContent>
          </Card>

           <Card className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={smallcard2} alt="Special Maternity" className="w-full h-58 object-cover" />
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Moments of happiness</h3>
              <p className="text-gray-600 text-sm">
                A glimpse into our latest maternity session highlighting joy and connection.
              </p>
            </CardContent>
          </Card>

          
        </div>
      </section>
    </div>
  );
};

export default MaternityPhotography;
