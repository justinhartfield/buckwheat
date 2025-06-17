import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, ExternalLink, TrendingUp, Users, Package, Star } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { brandsData, categoryData, marketStats } from './data/brands';
import { SEOHead } from './components/SEO';
import { BrandDetailPage } from './components/BrandDetailPage';
import { CategoryDetailPage } from './components/CategoryDetailPage';
import './App.css';

// Home Page Component
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || brand.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 relative overflow-hidden">
      <SEOHead />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-white">buckwheat.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('brands')}
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Brands
              </button>
              <button 
                onClick={() => scrollToSection('insights')}
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-amber-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Discover the
              <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
                Buckwheat
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Revolution
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your comprehensive guide to CPG brands featuring buckwheat as a key ingredient
            </p>
            <Button 
              onClick={() => scrollToSection('brands')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Brands
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section id="insights" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Market Insights</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              The buckwheat market is experiencing unprecedented growth across CPG categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {marketStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">{stat.value}</div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-amber-200">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categoryData.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-amber-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-amber-300 text-sm mb-2">{category.description}</p>
                <p className="text-amber-400 font-semibold">{category.brandCount} brands</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section id="brands" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Brands</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Discover leading CPG companies pioneering buckwheat innovation
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search brands..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-amber-300/60 focus:ring-amber-400 focus:border-amber-400"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  All Categories
                </button>
                {categoryData.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-amber-600 text-white shadow-lg'
                        : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand, index) => (
              <div
                key={brand.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedBrand(brand)}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="aspect-video bg-white/5 p-6 flex items-center justify-center">
                    <img 
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {brand.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        brand.companySize === 'emerging' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {brand.companySize}
                      </span>
                    </div>
                    <p className="text-amber-100 mb-4 line-clamp-2">{brand.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {brand.category.slice(0, 2).map((cat) => (
                        <span key={cat} className="px-2 py-1 bg-amber-600/20 text-amber-300 rounded text-xs border border-amber-600/30">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-amber-300">
                      <span className="flex items-center space-x-1">
                        <Package className="w-4 h-4" />
                        <span>{brand.products.length} products</span>
                      </span>
                      <span>Founded {brand.founded}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {filteredBrands.length === 0 && (
            <div className="text-center py-12">
              <p className="text-amber-300 text-xl">No brands found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Buckwheat.com</h2>
          <p className="text-xl text-amber-100 leading-relaxed mb-8">
            Buckwheat.com is your comprehensive resource for discovering CPG brands that feature buckwheat as a key ingredient. 
            From traditional soba noodles to innovative snack foods, we showcase the growing buckwheat revolution in consumer products.
          </p>
          <p className="text-lg text-amber-200 leading-relaxed">
            Our mission is to connect consumers with high-quality buckwheat products while supporting brands that prioritize 
            nutrition, sustainability, and innovation in the ancient grain space.
          </p>
        </div>
      </section>

      {/* Brand Detail Modal */}
      {selectedBrand && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={selectedBrand.logo}
                    alt={`${selectedBrand.name} logo`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedBrand.name}</h3>
                    <p className="text-amber-300">Founded {selectedBrand.founded} • {selectedBrand.headquarters}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedBrand(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-amber-100 mb-6 leading-relaxed">{selectedBrand.longDescription}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Key Facts</h4>
                  <ul className="space-y-2">
                    {selectedBrand.keyFacts.slice(0, 3).map((fact, index) => (
                      <li key={index} className="text-amber-100 flex items-start space-x-2">
                        <Star className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Products</h4>
                  <div className="space-y-2">
                    {selectedBrand.products.slice(0, 3).map((product) => (
                      <div key={product.id} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <p className="text-white font-medium">{product.name}</p>
                          <p className="text-amber-300 text-sm">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/brands/${selectedBrand.slug}`}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setSelectedBrand(null)}
                >
                  View Full Details
                </Link>
                <a 
                  href={selectedBrand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20 flex items-center space-x-2"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component with Routing
function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/:slug" element={<BrandDetailPage />} />
          <Route path="/categories/:slug" element={<CategoryDetailPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;

