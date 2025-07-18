import { useState } from 'react';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/BackButton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'prints', name: 'Fine Art Prints' },
    { id: 'albums', name: 'Photo Albums' },
    { id: 'frames', name: 'Custom Frames' },
    { id: 'digital', name: 'Digital Downloads' },
  ];

  const products = [
    {
      id: 1,
      title: 'Bridal Portrait Collection',
      description: 'Premium fine art prints of our signature bridal portraits',
      price: '$250',
      category: 'prints',
      image: '/api/placeholder/400/400',
      rating: 5,
      reviews: 23,
      badge: 'Best Seller'
    },
    {
      id: 2,
      title: 'Wedding Album - Luxury Edition',
      description: 'Handcrafted leather-bound wedding album with premium paper',
      price: '$450',
      category: 'albums',
      image: '/api/placeholder/400/400',
      rating: 5,
      reviews: 18,
      badge: 'Premium'
    },
    {
      id: 3,
      title: 'Custom Gold Frame Set',
      description: 'Elegant gold frames perfect for your special moments',
      price: '$180',
      category: 'frames',
      image: '/api/placeholder/400/400',
      rating: 4,
      reviews: 15,
      badge: 'New'
    },
    {
      id: 4,
      title: 'Digital Gallery Access',
      description: 'Full resolution digital copies of your photo session',
      price: '$120',
      category: 'digital',
      image: '/api/placeholder/400/400',
      rating: 5,
      reviews: 42,
      badge: 'Digital'
    },
    {
      id: 5,
      title: 'Maternity Print Collection',
      description: 'Beautiful maternity portraits in premium quality prints',
      price: '$200',
      category: 'prints',
      image: '/api/placeholder/400/400',
      rating: 5,
      reviews: 28,
      badge: 'Popular'
    },
    {
      id: 6,
      title: 'Couple Session Album',
      description: 'Romantic couple session memories in a beautiful album',
      price: '$320',
      category: 'albums',
      image: '/api/placeholder/400/400',
      rating: 4,
      reviews: 12,
      badge: null
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getBadgeVariant = (badge: string | null) => {
    switch (badge) {
      case 'Best Seller': return 'default';
      case 'Premium': return 'secondary';
      case 'New': return 'destructive';
      case 'Digital': return 'outline';
      case 'Popular': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <BackButton />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-6 animate-fade-in">
            SHOP
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover our curated collection of premium photography products, from fine art prints to luxury albums.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="font-display tracking-wider"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge 
                        variant={getBadgeVariant(product.badge)}
                        className="absolute top-4 left-4"
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-display text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < product.rating ? 'fill-primary text-primary' : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="text-2xl font-semibold text-primary">{product.price}</div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full group">
                    <ShoppingCart className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom products and personalized services. Contact us to discuss your specific needs.
          </p>
          <Button size="lg" className="font-display tracking-wider">
            CONTACT US FOR CUSTOM ORDERS
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Shop;