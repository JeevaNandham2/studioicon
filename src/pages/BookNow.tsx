import { useState, useEffect } from 'react';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Camera, Clock, MapPin, Phone, Mail, Heart, ArrowUp } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const BookNow = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    package: '',
    eventDate: '',
    location: '',
    guests: '',
    duration: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `New Photography Booking Request from Studio Icon Website:\n\nCLIENT INFORMATION:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n\nPHOTOGRAPHY DETAILS:\n- Service Type: ${formData.service}\n- Package Preference: ${formData.package}\n- Preferred Date: ${date ? format(date, "PPP") : 'Not specified'}\n- Location: ${formData.location || 'Not specified'}\n- Number of Guests: ${formData.guests || 'Not specified'}\n- Duration Needed: ${formData.duration || 'Not specified'}\n- Budget Range: ${formData.budget || 'Not specified'}\n\nCLIENT MESSAGE:\n${formData.message || 'No additional message'}\n\nSTUDIO ICON CONTACT DETAILS:\n- Email: studioicon144@gmail.com\n- Phone: +91 9585924107\n- Location: Chennai, Tamil Nadu\n\nPlease contact the client at ${formData.phone} or ${formData.email} to discuss their photography requirements.`;

    const mailtoLink = `mailto:jeevanandhammk21@gmail.com?subject=Photography Booking Request - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Booking Request Prepared!",
      description: "Your email client will open with all the booking details for Studio Icon. Please send the email to complete your request.",
    });

    setFormData({
      name: '', email: '', phone: '', service: '', package: '',
      eventDate: '', location: '', guests: '', duration: '', budget: '', message: ''
    });
    setDate(undefined);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 relative">
      <BackButton />
      <Button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-primary text-white rounded-full p-3 shadow-lg hover:scale-105 transition-transform">
        <ArrowUp className="h-6 w-6" />
      </Button>

      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Camera className="h-16 w-16 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-6 leading-tight">
              Book Your
              <span className="block font-accent text-5xl md:text-7xl text-primary">
                Photography Session
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's create something beautiful together. Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border">
              <h3 className="text-xl md:text-2xl font-display text-primary mb-6 text-center">Studio Icon Photography</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Mail className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground text-sm">studioicon144@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <Phone className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 9585924107</p>
                </div>
                <div className="space-y-2">
                  <MapPin className="w-8 h-8 text-primary mx-auto" />
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground text-sm">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-display text-2xl md:text-3xl text-center flex items-center justify-center gap-3">
                    <Heart className="h-6 md:h-8 w-6 md:w-8 text-primary" />
                    Photography Booking Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label>Photography Service *</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Photography</SelectItem>
                            <SelectItem value="maternity">Maternity Photography</SelectItem>
                            <SelectItem value="portrait">Portrait Photography</SelectItem>
                            <SelectItem value="fashion">Fashion Photography</SelectItem>
                            <SelectItem value="family">Family Photography</SelectItem>
                            <SelectItem value="corporate">Corporate Photography</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Package Preference</Label>
                        <Select value={formData.package} onValueChange={(value) => handleInputChange('package', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Package</SelectItem>
                            <SelectItem value="premium">Premium Package</SelectItem>
                            <SelectItem value="luxury">Luxury Package</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}> 
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Event Location</Label>
                      <Input id="location" value={formData.location} onChange={(e) => handleInputChange('location', e.target.value)} placeholder="City, Venue details" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input id="guests" value={formData.guests} onChange={(e) => handleInputChange('guests', e.target.value)} placeholder="e.g., 100-150" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration Needed</Label>
                      <Input id="duration" value={formData.duration} onChange={(e) => handleInputChange('duration', e.target.value)} placeholder="e.g., 8 hours" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1lakh">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1lakh-2lakh">₹1,00,000 - ₹2,00,000</SelectItem>
                          <SelectItem value="2lakh-plus">₹2,00,000+</SelectItem>
                          <SelectItem value="custom">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your vision</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} placeholder="Share your photography vision, special requirements, or any questions..." rows={4} />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg py-6">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-display text-xl md:text-2xl text-center">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-muted-foreground">+91 9585924107</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-muted-foreground">studioicon144@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Visit Studio</p>
                      <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-primary-foreground shadow-glow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-lg md:text-xl font-semibold mb-3">
                    Why Choose StudioIcon?
                  </h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li>• Award-winning photography</li>
                    <li>• 5+ years of experience</li>
                    <li>• Quick turnaround time</li>
                    <li>• Professional equipment</li>
                    <li>• Creative storytelling</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
