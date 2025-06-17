import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { categoryData, brandsData } from '../data/brands';
import { CategorySEO } from './SEO';
import { useState } from 'react';

export const CategoryDetailPage = () => {
  const { slug } = useParams();
  const category = categoryData.find(c => c.slug === slug);
  const [searchTerm, setSearchTerm] = useState('');
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link to="/" className="text-amber-300 hover:text-amber-100 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Filter brands by category
  const categoryBrands = brandsData.filter(brand => 
    brand.category.includes(category.id) &&
    (searchTerm === '' || brand.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
      <CategorySEO category={category} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-amber-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-white">buckwheat.com</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto mb-8">
              {category.description}
            </p>
            <div className="flex items-center justify-center space-x-6 text-amber-300">
              <span className="flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>{categoryBrands.length} Brands</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-8 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
            <input
              type="text"
              placeholder={`Search ${category.name.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Category Description */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">About {category.name}</h2>
            <p className="text-amber-100 leading-relaxed text-lg">
              {category.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Brands in {category.name}
          </h2>
          
          {categoryBrands.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-amber-300 text-xl">No brands found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryBrands.map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brands/${brand.slug}`}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video bg-white/5 p-6 flex items-center justify-center">
                    <img 
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {brand.name}
                      </h3>
                      <span className="text-amber-400 text-sm font-medium capitalize">
                        {brand.companySize}
                      </span>
                    </div>
                    <p className="text-amber-100 mb-4 line-clamp-2">{brand.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 text-sm">
                        Founded {brand.founded}
                      </span>
                      <span className="text-amber-300 text-sm">
                        {brand.products.length} Products
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {brand.category.slice(0, 3).map((cat) => (
                        <span key={cat} className="px-2 py-1 bg-amber-600/20 text-amber-300 rounded text-xs border border-amber-600/30">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categoryData.filter(cat => cat.id !== category.id).map((cat) => (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug}`}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="text-white font-bold mb-2 group-hover:text-amber-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-amber-300 text-sm">{cat.brandCount} brands</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

