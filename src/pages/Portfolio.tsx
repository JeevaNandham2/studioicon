import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';
import img1 from '@/assets/Media 3.jpeg';
import img2 from '@/assets/Media 4.jpeg';
import img3 from '@/assets/Media 5.jpeg';
import img4 from '@/assets/about1.jpeg';
import img5 from '@/assets/wedding.jpeg';
import img6 from '@/assets/about3.jpeg';
import img7 from '@/assets/maternity5.jpeg';
import img8 from '@/assets/event1.jpeg';
import img9 from '@/assets/fashion2.jpeg';
import img10 from '@/assets/fashion4.jpeg';
import img11 from '@/assets/event4.jpeg';
import img12 from '@/assets/fashion.jpeg';
import img13 from '@/assets/wedding1.jpeg';
import img14 from '@/assets/about2.jpeg';
import img15 from '@/assets/home4.jpeg';
import img16 from '@/assets/port4.jpeg';
import img17 from '@/assets/port3.jpeg';
import img18 from '@/assets/port1.jpeg';
import img19 from '@/assets/maternity6.jpeg';
 import img20 from '@/assets/home1.jpeg';
import img21 from '@/assets/home2.jpeg';
 import img22 from '@/assets/home3.jpeg';
import img23 from '@/assets/portrati.jpeg';
 import img24 from '@/assets/shared image 18.jpeg';
 import img25 from '@/assets/wedding.jpeg';
 import img26 from '@/assets/maternity5.jpeg';
 import img27 from '@/assets/maternity4.jpeg';
import img28 from '@/assets/maternity3.jpeg';
 import img29 from '@/assets/fashion5.jpeg';
import img30 from '@/assets/event5.jpeg';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
     img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
     img21, img22, img23, img24, img25, img26, img27, img28, img29, img30
  ].map((src, idx) => ({
    id: idx + 1,
    src,
    title: `Gallery Image ${idx + 1}`,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <BackButton />

      <section className="py-20 text-center">
        <h1 className="text-5xl font-accent mb-6 animate-bounce text-purple-500">Gallery Showcase</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Explore 30 handpicked images from weddings, fashion shoots, portraits, and more.
        </p>
      </section>

      <section className="py-10 px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(image.src)}
          >
            <img src={image.src} alt={image.title} className="w-full h-50 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold transition-opacity duration-300">
              {image.title}
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-20 bg-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Inspired by the Moments?</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">Let's capture your story next. Book a session and let's make magic together!</p>
        <Button asChild size="lg" className="bg-white text-gray-800 hover:bg-gray-200">
          <a href="/book-now">Book Your Session</a>
        </Button>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <motion.img
            src={selectedImage}
            alt="Selected"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
          <button className="absolute top-6 right-6 text-white text-3xl hover:text-red-400">×</button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
