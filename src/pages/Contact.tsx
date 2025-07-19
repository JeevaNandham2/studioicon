import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Camera, Smile, Star, CheckCircle } from 'lucide-react';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import heroStudio from '@/assets/contactgif3.gif';
import contactGif from '@/assets/Studiologo-removebg-preview.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '919566931353';
    const textMessage = `*Photography Inquiry*
🧡 *Name:* ${formData.name}
💌 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📅 *Date:* ${formData.date}
🎯 *Session:* ${formData.sessionType}
📝 *Message:* ${formData.message}
🚀 *Let's create magic together!*`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURI(textMessage)}`;
    window.open(whatsappURL, '_blank');

    setFormData({ name: '', email: '', phone: '', sessionType: '', date: '', message: '' });
  };

  const sessionTypes = [
    'Wedding Photography',
    'Engagement Session',
    'Portrait Session',
    'Maternity Photography',
    'Family Photography',
    'Fashion/Editorial',
    'Commercial Photography',
    'Other'
  ];

  const contactInfo = [
    { icon: Phone, title: 'Phone', detail: '9566931353', description: 'Call or text anytime' },
    { icon: Mail, title: 'Email', detail: 'studioicon144@gmail.com', description: 'I respond within 24 hours' },
    { icon: MapPin, title: 'Chennai', detail: 'Tamilnadu', description: 'Travel available worldwide' },
    { icon: Clock, title: 'Hours', detail: 'Mon-Fri 9AM-6PM', description: 'Flexible scheduling available' }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <BackButton />
      <section className="py-16 bg-gradient-to-r from-orange-400 to-purple-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-bounce">Let's Connect</h1>
          <p className="text-lg leading-relaxed animate-pulse">
            Fill the form below and get a WhatsApp confirmation instantly.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-500">
              <img src={contactGif} alt="Contact Animation" className="w-24 h-24 mx-auto mb-4 animate-spin-slow" />
              <h3 className="text-2xl font-bold text-center mb-4 text-purple-700 animate-bounce">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4 pb-0 mb-0">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" required className="w-full px-4 py-3 border rounded-lg shadow-md" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full px-4 py-3 border rounded-lg shadow-md" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg shadow-md" />
                <select name="sessionType" value={formData.sessionType} onChange={handleInputChange} required className="w-full px-4 py-3 border rounded-lg shadow-md">
                  <option value="">Select Session Type</option>
                  {sessionTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-lg shadow-md" />
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" rows={4} className="w-full px-4 py-3 border rounded-lg shadow-md" required />
                <Button type="submit" className="w-full bg-gradient-to-r from-orange-400 to-purple-500 text-white flex items-center justify-center hover:scale-105 transition-transform">
                  <Send className="mr-2 animate-ping" /> Send via WhatsApp
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <img src={heroStudio} alt="Studio" className="w-full h-80 object-cover rounded-lg shadow-xl animate-pulse" />

              <h3 className="text-2xl font-bold mt-8 mb-4 text-purple-700">Get In <span className="text-orange-500">Touch</span></h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-purple-700">{info.title}</h4>
                      <p className="font-medium mb-1">{info.detail}</p>
                      <p className="text-sm text-purple-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200 shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <Camera className="h-6 w-6 text-orange-500 animate-spin" />
                  <h4 className="text-lg font-semibold text-purple-700">Quick Response Promise</h4>
                </div>
                <p className="text-purple-600">
                  We understand that planning your perfect session is important to you.
                  That's why we guarantee a personal response via WhatsApp instantly after form submission.
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <Smile className="text-orange-500 animate-bounce" />
                  <Star className="text-yellow-400 animate-spin" />
                  <CheckCircle className="text-purple-500 animate-pulse" />
                  <span className="text-purple-700">We make photography simple and joyful!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
