import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '@/components/BackButton';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWedding from '@/assets/hero-wedding.jpg';
import heroFashion from '@/assets/hero-fashion.jpg';
import heroStudio from '@/assets/hero-studio.jpg';

const Journal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Mock blog posts - in a real app, these would come from a CMS
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Capturing Authentic Emotions',
      excerpt: 'Discover the techniques I use to create genuine, emotional photographs that tell your unique story.',
      image: heroWedding,
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Photography Tips',
      featured: true,
    },
    {
      id: 2,
      title: 'Sarah & Michael\'s Garden Wedding',
      excerpt: 'A beautiful celebration of love in an intimate garden setting, captured with artistic elegance.',
      image: heroFashion,
      date: '2024-01-10',
      readTime: '3 min read',
      category: 'Wedding Stories',
      featured: false,
    },
    {
      id: 3,
      title: 'Preparing for Your Photography Session',
      excerpt: 'Everything you need to know to feel confident and look amazing during your photo session.',
      image: heroStudio,
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Client Guide',
      featured: false,
    },
    {
      id: 4,
      title: 'The Magic of Golden Hour Photography',
      excerpt: 'Why timing is everything in photography and how to make the most of natural light.',
      image: heroWedding,
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Photography Tips',
      featured: false,
    },
    {
      id: 5,
      title: 'Emma & James Beach Wedding Highlights',
      excerpt: 'A romantic seaside ceremony filled with laughter, tears of joy, and unforgettable moments.',
      image: heroFashion,
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'Wedding Stories',
      featured: false,
    },
    {
      id: 6,
      title: 'Fashion Photography Behind the Scenes',
      excerpt: 'Take a peek into my creative process during a high-end fashion editorial shoot.',
      image: heroStudio,
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Behind the Scenes',
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-24 pb-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-accent text-primary text-2xl mb-4">Behind the Lens</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              JOURNAL
            </h1>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Stories, insights, and inspiration from my photography journey. 
              Featuring real wedding stories, photography tips, and behind-the-scenes moments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <span className="text-muted-foreground text-sm">{featuredPost.category}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-primary-foreground"
                  >
                    <Link to={`/journal/${featuredPost.id}`}>
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group animate-on-scroll bg-background rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold mb-3 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/journal/${post.id}`}
                    className="font-body text-primary text-sm font-medium inline-flex items-center hover:text-primary-dark transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Stay In Touch
            </h2>
            <p className="font-body text-xl mb-8 opacity-90 leading-relaxed">
              Subscribe to receive the latest stories, photography tips, and behind-the-scenes updates 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-accent px-6 py-3"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, just beautiful stories and useful tips. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;