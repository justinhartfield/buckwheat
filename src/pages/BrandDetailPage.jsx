import { useParams, Link } from 'react-router-dom';
import { brandsData } from '../data/brands';

const BrandDetailPage = () => {
  const { slug } = useParams();
  const brand = brandsData.find(b => b.slug === slug);

  if (!brand) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Brand Not Found</h1>
          <Link to="/brands" className="text-orange-400 hover:text-orange-300">
            ← Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/brands" className="text-orange-400 hover:text-orange-300 mb-6 inline-block">
            ← Back to Brands
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {brand.name}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{brand.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {brand.category}
                </span>
                <span className="bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm">
                  Founded {brand.founded}
                </span>
                <span className="bg-white/10 text-gray-300 px-4 py-2 rounded-full text-sm">
                  {brand.headquarters}
                </span>
              </div>
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
              >
                Visit Website →
              </a>
            </div>
            <div>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-96 object-cover rounded-2xl"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkJyYW5kIEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Key Facts</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <ul className="space-y-3">
              {brand.keyFacts.map((fact, index) => (
                <li key={index} className="text-gray-200 flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPlByb2R1Y3Q8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{product.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-orange-400 font-semibold">{product.price}</span>
                  </div>
                  <div className="text-gray-300 text-xs mt-3">
                    <strong>Nutrition:</strong> {product.nutrition}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Awards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-200 leading-relaxed">{brand.sustainability}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Awards & Certifications</h3>
              <div className="space-y-2">
                {brand.awards.map((award, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-orange-400 mr-3">✓</span>
                    <span className="text-gray-200">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Brands */}
      <section className="py-12 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Related Brands</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsData
              .filter(b => b.category === brand.category && b.id !== brand.id)
              .slice(0, 3)
              .map((relatedBrand) => (
                <Link
                  key={relatedBrand.id}
                  to={`/brands/${relatedBrand.slug}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <img
                    src={relatedBrand.image}
                    alt={relatedBrand.name}
                    className="w-full h-32 object-cover rounded-xl mb-4"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDMwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTI4IiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iNjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+SW1hZ2U8L3RleHQ+Cjwvc3ZnPgo=';
                    }}
                  />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {relatedBrand.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{relatedBrand.description.substring(0, 80)}...</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDetailPage;

