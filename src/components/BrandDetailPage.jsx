import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MapPin, Calendar, Users, Award, Package, Globe } from 'lucide-react';
import { brandsData } from '../data/brands';
import { BrandSEO, ProductSEO } from './SEO';
import { useState } from 'react';

export const BrandDetailPage = () => {
  const { slug } = useParams();
  const brand = brandsData.find(b => b.slug === slug);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!brand) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
          <Link to="/" className="text-amber-300 hover:text-amber-100 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-900">
      <BrandSEO brand={brand} />
      
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="w-20 h-20 rounded-xl object-cover shadow-lg"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {brand.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-amber-300">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Founded {brand.founded}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{brand.headquarters}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                {brand.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {brand.isOrganic && (
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    <Award className="w-4 h-4 inline mr-2" />
                    Organic Certified
                  </span>
                )}
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 capitalize">
                  <Users className="w-4 h-4 inline mr-2" />
                  {brand.companySize} Brand
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  <Package className="w-4 h-4 inline mr-2" />
                  {brand.products.length} Products
                </span>
              </div>

              <a 
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src={brand.products[0]?.image || brand.logo}
                  alt={`${brand.name} featured product`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="py-16 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Story</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-amber-100 leading-relaxed text-lg">
              {brand.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.keyFacts.map((fact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-amber-100 font-medium">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.products.map((product) => (
              <div 
                key={product.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-square bg-white/5 p-6">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-amber-100 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    {product.price && (
                      <span className="text-2xl font-bold text-amber-400">{product.price}</span>
                    )}
                    {product.size && (
                      <span className="text-amber-300 text-sm">{product.size}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <ProductSEO product={selectedProduct} brand={brand} />
          <div className="bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <img 
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full aspect-square object-cover rounded-xl"
                />
                <div>
                  <p className="text-amber-100 mb-4">{selectedProduct.description}</p>
                  <div className="space-y-3">
                    {selectedProduct.price && (
                      <div className="flex justify-between">
                        <span className="text-amber-300">Price:</span>
                        <span className="text-white font-bold">{selectedProduct.price}</span>
                      </div>
                    )}
                    {selectedProduct.size && (
                      <div className="flex justify-between">
                        <span className="text-amber-300">Size:</span>
                        <span className="text-white">{selectedProduct.size}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {selectedProduct.ingredients && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.ingredients.map((ingredient, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-600/20 text-amber-300 rounded-full text-sm border border-amber-600/30">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedProduct.nutrition && (
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(selectedProduct.nutrition).map(([key, value]) => (
                      <div key={key} className="flex justify-between bg-white/5 rounded-lg p-3">
                        <span className="text-amber-300 capitalize">{key}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

