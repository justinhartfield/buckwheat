import { useParams, Link } from 'react-router-dom';
import { categoryData, brandsData } from '../data/brands';

const CategoryDetailPage = () => {
  const { slug } = useParams();
  const category = categoryData.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <Link to="/categories" className="text-orange-400 hover:text-orange-300">
            ← Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const categoryBrands = brandsData.filter(brand => 
    category.brands.includes(brand.id)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/categories" className="text-orange-400 hover:text-orange-300 mb-6 inline-block">
            ← Back to Categories
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-gray-200 leading-relaxed mb-12">
            <div className="prose prose-invert max-w-none">
              {category.seoContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-200 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands in Category */}
      <section className="py-12 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            Brands in {category.name}
          </h2>
          
          {categoryBrands.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryBrands.map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brands/${brand.slug}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="mb-4">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-48 object-cover rounded-xl"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPkJyYW5kPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{brand.description.substring(0, 120)}...</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-400 text-sm">Founded {brand.founded}</span>
                    <span className="text-orange-400 text-sm font-medium">
                      {brand.products.length} products
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    {brand.headquarters}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No brands found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Related Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData
              .filter(c => c.id !== category.id)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  to={`/categories/${relatedCategory.slug}`}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {relatedCategory.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">{relatedCategory.description}</p>
                  <div className="text-orange-400 text-sm font-medium">
                    {relatedCategory.brands.length} brands →
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetailPage;

